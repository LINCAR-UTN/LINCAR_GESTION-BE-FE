import type { EntityDto } from '@abp/ng.core';
import type { EstadoOrdenTrabajoAutoparte, EstadoOrdenTrabajoAutoparteDto } from '../estados-orden-trabajo-autoparte/models';
import type { Autoparte, AutoparteDto } from '../autopartes/models';
import type { Observacion, ObservacionDto } from '../observaciones/models';
import type { Entity } from '../volo/abp/domain/entities/models';
import type { OrdenProduccion } from '../ordenes-produccion/models';
import type { Empleado } from '../personas/models';

export interface CreateUpdateOrdenTrabajoAutoparteDto {
  id?: number;
  nroOrden: number;
  fechaHoraCreada?: string;
  cantidad: number;
  ordenProduccionId?: number;
  empleadoId: number;
  solicitanteId: number;
  autoparteId: number;
}

export interface OrdenTrabajoAutoparteDto extends EntityDto<number> {
  nroOrden: number;
  fechaHoraCreada?: string;
  cantidad: number;
  ordenProduccionId?: number;
  estados: EstadoOrdenTrabajoAutoparteDto[];
  empleadoId: number;
  solicitanteId: number;
  autoparte: AutoparteDto;
  observaciones: ObservacionDto[];
}

export interface OrdenTrabajoAutoparte extends Entity<number> {
  nroOrden: number;
  fechaHoraCreada?: string;
  cantidad: number;
  ordenProduccion: OrdenProduccion;
  estados: EstadoOrdenTrabajoAutoparte[];
  empleado: Empleado;
  solicitante: Empleado;
  autoparte: Autoparte;
  observaciones: Observacion[];
}
