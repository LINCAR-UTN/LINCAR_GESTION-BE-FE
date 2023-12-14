import type { EntityDto } from '@abp/ng.core';
import type { NombreEstadoOrdenProduccion } from './nombre-estado-orden-produccion.enum';
import type { OrdenProduccion, OrdenProduccionDto } from '../ordenes-produccion/models';
import type { Entity } from '../volo/abp/domain/entities/models';

export interface EstadoOrdenProduccionDto extends EntityDto<number> {
  nombre: NombreEstadoOrdenProduccion;
  fechaHoraHasta?: string;
  orden: OrdenProduccionDto;
}

export interface EstadoOrdenProduccion extends Entity<number> {
  nombre: NombreEstadoOrdenProduccion;
  fechaHoraHasta?: string;
  ordenProduccion: OrdenProduccion;
}
