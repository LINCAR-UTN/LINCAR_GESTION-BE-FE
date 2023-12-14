import type { EntityDto } from '@abp/ng.core';
import type { Observacion, ObservacionDto } from '../observaciones/models';
import type { Atributo, AtributoDto } from '../atributos/models';
import type { Entity } from '../volo/abp/domain/entities/models';
import type { OrdenTrabajoAutoparte } from '../ordenes-trabajo-autoparte/models';
import type { SectorProduccion } from '../sectores-produccion/models';
import type { ModeloProducto } from '../modelos-producto/models';

export interface AutoparteDto extends EntityDto<number> {
  codAutoparte?: number;
  nombre?: string;
  activa?: boolean;
  observaciones: ObservacionDto[];
  sectoresProduccionIds: number[];
  modelosProduccionIds: number[];
  atributos: AtributoDto[];
}

export interface CreateUpdateAutoparteDto {
  id?: number;
  codAutoparte?: number;
  nombre?: string;
  activa?: boolean;
  observaciones: ObservacionDto[];
  sectoresProduccionIds: number[];
  modelosProduccionIds: number[];
  atributos: AtributoDto[];
}

export interface Autoparte extends Entity<number> {
  codAutoparte: number;
  nombre?: string;
  activa: boolean;
  observaciones: Observacion[];
  ordenesTrabajoAutopartes: OrdenTrabajoAutoparte[];
  sectoresProduccion: SectorProduccion[];
  modelosProduccion: ModeloProducto[];
  atributos: Atributo[];
}
