/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderValAddedSrvcApi } from './SalesOrderValAddedSrvcApi';

/**
 * This class represents the entity "A_SalesOrderValAddedSrvc" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderValAddedSrvc<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SalesOrderValAddedSrvcType<T>
{
  /**
   * Technical entity name for SalesOrderValAddedSrvc.
   */
  static override _entityName = 'A_SalesOrderValAddedSrvc';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderValAddedSrvc entity.
   */
  static _keys = [
    'ValueAddedServiceType',
    'ValueAddedSubServiceType',
    'SalesOrder',
    'SalesOrderItem'
  ];
  /**
   * VAS Service Types.
   * Maximum length: 2.
   */
  declare valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Sub Services.
   * Maximum length: 5.
   */
  declare valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Number of Reference Document.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Item number of the reference item.
   * Maximum length: 6.
   */
  declare salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   * Maximum length: 10.
   * @nullable
   */
  declare valAddedSrvcTransactionNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Group.
   * Maximum length: 5.
   * @nullable
   */
  declare valAddedSrvcItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * Maximum length: 5.
   * @nullable
   */
  declare valAddedSrvcItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Material Number.
   * Maximum length: 40.
   * @nullable
   */
  declare valueAddedServiceProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Relevancy Flag for VAS Material.
   * @nullable
   */
  declare valAddedSrvcHasToBeOrdered?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * VAS Increment.
   * Maximum length: 4.
   * @nullable
   */
  declare valAddedSrvcIncrement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Charge Codes.
   * Maximum length: 3.
   * @nullable
   */
  declare valueAddedServiceChargeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Manual Entry Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare valAddedSrvcIsCreatedManually?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * VAS Item Number in SD.
   * Maximum length: 6.
   * @nullable
   */
  declare valAddedSrvcItemNumberInSd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Relevant for VAS Material.
   * @nullable
   */
  declare valAddedSrvcIsRlvtForProcmt?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * VAS Field 1 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  declare valueAddedServiceText1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 2 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  declare valueAddedServiceText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 3 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  declare valueAddedServiceText3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * String.
   * @nullable
   */
  declare valueAddedServiceLongText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesOrderValAddedSrvcApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderValAddedSrvcType<
  T extends DeSerializers = DefaultDeSerializers
> {
  valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  valAddedSrvcTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceProduct?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcHasToBeOrdered?: DeserializedType<T, 'Edm.Boolean'> | null;
  valAddedSrvcIncrement?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcIsCreatedManually?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemNumberInSd?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcIsRlvtForProcmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  valueAddedServiceText1?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText2?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText3?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceLongText?: DeserializedType<T, 'Edm.String'> | null;
}
