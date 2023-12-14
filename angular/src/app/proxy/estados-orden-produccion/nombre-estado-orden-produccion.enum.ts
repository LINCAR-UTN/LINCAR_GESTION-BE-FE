import { mapEnumToOptions } from '@abp/ng.core';

export enum NombreEstadoOrdenProduccion {
  CREADA = 0,
  TERMINADA = 1,
  ENTREGADA = 2,
}

export const nombreEstadoOrdenProduccionOptions = mapEnumToOptions(NombreEstadoOrdenProduccion);
