import type { EntityDto } from '@abp/ng.core';
import type { NombreEstadoOrdenProduccion } from '../estados-orden-produccion/nombre-estado-orden-produccion.enum';
import type { Entity } from '../volo/abp/domain/entities/models';
import type { OrdenTrabajoAutoparte } from '../ordenes-trabajo-autoparte/models';

export interface EstadoOrdenTrabajoAutoparteDto extends EntityDto<number> {
  nombre: NombreEstadoOrdenProduccion;
  fechaHoraHasta?: string;
  ordenTrabajoAutoparteId: number;
}

export interface EstadoOrdenTrabajoAutoparte extends Entity<number> {
  nombre: NombreEstadoOrdenProduccion;
  fechaHoraHasta?: string;
  ordenTrabajoAutoparte: OrdenTrabajoAutoparte;
}
