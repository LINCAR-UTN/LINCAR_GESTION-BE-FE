import type { EntityDto } from '@abp/ng.core';
import type { Entity } from '../volo/abp/domain/entities/models';
import type { OrdenProduccion } from '../ordenes-produccion/models';
import type { OrdenTrabajoAutoparte } from '../ordenes-trabajo-autoparte/models';
import type { SectorProduccion } from '../sectores-produccion/models';

export interface ClienteDto extends EntityDto<number> {
  nombre?: string;
  apellido?: string;
  numeroTelefono?: string;
  dni: number;
  fechaHoraAlta?: string;
  fechaHoraModificado?: string;
  direccion?: string;
}

export interface CreateUpdateClienteDto {
  id?: number;
  nombre?: string;
  apellido?: string;
  numeroTelefono?: string;
  dni: number;
  fechaHoraAlta?: string;
  fechaHoraModificado?: string;
  direccion?: string;
}

export interface CreateUpdateEmpleadoDto {
  id?: number;
  nombre?: string;
  apellido?: string;
  numeroTelefono?: string;
  dni: number;
  fechaHoraAlta?: string;
  fechaHoraModificado?: string;
  activo: boolean;
}

export interface EmpleadoDto extends EntityDto<number> {
  nombre?: string;
  apellido?: string;
  numeroTelefono?: string;
  dni: number;
  fechaHoraAlta?: string;
  fechaHoraModificado?: string;
  activo: boolean;
  ordenesTrabajoAutoparteIds: number[];
  sectorProduccionEmpleadoIds: number[];
  sectoresProduccionACargoIds: number[];
}

export interface Cliente extends Entity<number> {
  nombre?: string;
  apellido?: string;
  numeroTelefono?: string;
  dni: number;
  fechaHoraAlta?: string;
  fechaHoraModificado?: string;
  direccion?: string;
  ordenesProduccion: OrdenProduccion[];
}

export interface Empleado extends Entity<number> {
  nombre?: string;
  apellido?: string;
  numeroTelefono?: string;
  dni: number;
  fechaHoraAlta?: string;
  fechaHoraModificado?: string;
  activo: boolean;
  ordenesTrabajoAutoparte: OrdenTrabajoAutoparte[];
  sectorProduccionEmpleado: SectorProduccion[];
  sectoresProduccionACargo: SectorProduccion[];
}
