const cds = require('@sap/cds');
require('dotenv').config();
const moment = require('moment');

module.exports = cds.service.impl(async function(srv){

    const { MySalesOrder } = this.entities;
    
    var getAllSalesOrders = async function(){
        const { opApiSalesOrderSrv0001 } = require('./src/generated/OP_API_SALES_ORDER_SRV_0001');
        const { salesOrderApi } = opApiSalesOrderSrv0001();
        const dataSalesData = await salesOrderApi.requestBuilder().getAll().top(30)
        .select(
            salesOrderApi.schema.SALES_ORDER,
            salesOrderApi.schema.SALES_ORGANIZATION,
            salesOrderApi.schema.SALES_ORDER_TYPE,
            salesOrderApi.schema.SOLD_TO_PARTY,
            salesOrderApi.schema.PAYMENT_METHOD,
            salesOrderApi.schema.TO_ITEM
        )
        .execute({
            // destinationName: "CFN"
            "url": process.env.URL,
            "username": process.env.USER,
            "password": process.env.PASSWORD
        });
        return dataSalesData;
    };

    srv.on('READ', MySalesOrder, async(req) => {
        return await getAllSalesOrders().then(
            salesOrderTable => {
                var aRecord = [];
                console.log(salesOrderTable);
                salesOrderTable.forEach(element => {
                    var item = {};
                    item.SalesOrder = element.salesOrder;
                    item.SalesOrganization = element.salesOrganization;
                    item.SalesOrderType = element.salesOrderType;
                    item.SoldToParty = element.soldToParty;
                    item.PaymentMethod = element.paymentMethod;
                    if(element.toItem[0]){
                        item.Material = element.toItem[0].material;
                        item.RequestedQuantity = element.toItem[0].requestedQuantity;
                        item.NetAmount = element.toItem[0].netAmount;
                    }else{
                        item.Material = "";
                        item.RequestedQuantity = "";
                        item.NetAmount = "";
                    }
                    
                    aRecord.push(item);
                });
                return aRecord;
            }
        );
    });

    srv.on('CREATE', MySalesOrder, async (req) => {

        const payload = req.data;

        const { opApiSalesOrderSrv0001 } = require('./src/generated/OP_API_SALES_ORDER_SRV_0001');
        const { salesOrderApi, salesOrderItemApi } = opApiSalesOrderSrv0001();

        try {

            const salesOrder = salesOrderApi.entityBuilder()
                .salesOrderType(payload.SalesOrderType)
                .salesOrganization(payload.SalesOrganization)
                .distributionChannel(payload.DistributionChannel)
                .organizationDivision(payload.OrganizationDivision)
                .salesDistrict(payload.SalesDistrict)
                .soldToParty(payload.SoldToParty)
                .salesOrderDate(moment(payload.SalesOrderDate))
                .build();

            const items = payload.to_Item.results.map(item => {
                return salesOrderItemApi.entityBuilder()
                    .salesOrderItem(item.SalesOrderItem)
                    .material(item.Material)
                    .requestedQuantity(item.RequestedQuantity)
                    .requestedQuantityUnit(item.RequestedQuantityUnit)
                    .build();
            });

            salesOrder.toItem = items;

            const result = await salesOrderApi
                .requestBuilder()
                .create(salesOrder)
                .execute({
                    url: process.env.URL,
                    username: process.env.USER,
                    password: process.env.PASSWORD
                });

            return result;

        } catch (error) {
            console.error(error);
            req.error(500, error.message);
        }

    });
});