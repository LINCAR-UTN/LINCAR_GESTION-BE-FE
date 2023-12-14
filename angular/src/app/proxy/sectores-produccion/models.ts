import type { EntityDto } from '@abp/ng.core';
import type { Entity } from '../volo/abp/domain/entities/models';
import type { Empleado } from '../personas/models';
import type { Autoparte } from '../autopartes/models';

export interface CreateUpdateSectorProduccionDto {
  id?: number;
  nroSector: number;
  nombre?: string;
  descripcion?: string;
  encargadoId: number;
}

export interface SectorProduccionDto extends EntityDto<number> {
  nroSector: number;
  nombre?: string;
  descripcion?: string;
  empleadosId: number[];
  encargadoId: number;
  autopartesIds: number[];
}

export interface SectorProduccion extends Entity<number> {
  nroSector: number;
  nombre?: string;
  descripcion?: string;
  empleados: Empleado[];
  encargado: Empleado;
  autopartes: Autoparte[];
}
