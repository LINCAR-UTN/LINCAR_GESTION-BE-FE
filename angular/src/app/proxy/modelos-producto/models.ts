import type { EntityDto } from '@abp/ng.core';
import type { Autoparte, AutoparteDto } from '../autopartes/models';
import type { Entity } from '../volo/abp/domain/entities/models';
import type { OrdenProduccion } from '../ordenes-produccion/models';

export interface CreateUpdateModeloProductoDto {
  id?: number;
  codigoModelo?: string;
  largoTotalMts: number;
  largoUtilMts: number;
  altoTotalMts: number;
  altoUtilMts: number;
  anchoTotalMts: number;
  anchoUtilMts: number;
  espesorPisoMms: number;
  tipoUnidad?: string;
  tipoPiso?: string;
  colorZocalo?: string;
  colorInferior?: string;
  puertaLateral?: string;
  puertaTrasera?: string;
  malacates: number;
  arcos: number;
  escalera?: string;
  boquillas: number;
  portaEstacas: number;
  voltaje: number;
}

export interface ModeloProductoDto extends EntityDto<number> {
  codigoModelo?: string;
  largoTotalMts: number;
  largoUtilMts: number;
  altoTotalMts: number;
  altoUtilMts: number;
  anchoTotalMts: number;
  anchoUtilMts: number;
  espesorPisoMms: number;
  tipoUnidad?: string;
  tipoPiso?: string;
  colorZocalo?: string;
  colorInferior?: string;
  puertaLateral?: string;
  puertaTrasera?: string;
  malacates: number;
  arcos: number;
  escalera?: string;
  boquillas: number;
  portaEstacas: number;
  voltaje: number;
  autopartes: AutoparteDto[];
}

export interface ModeloProducto extends Entity<number> {
  codigoModelo?: string;
  largoTotalMts: number;
  largoUtilMts: number;
  altoTotalMts: number;
  altoUtilMts: number;
  anchoTotalMts: number;
  anchoUtilMts: number;
  espesorPisoMms: number;
  tipoUnidad?: string;
  tipoPiso?: string;
  colorZocalo?: string;
  colorInferior?: string;
  puertaLateral?: string;
  puertaTrasera?: string;
  malacates: number;
  arcos: number;
  escalera?: string;
  boquillas: number;
  portaEstacas: number;
  voltaje: number;
  ordenesProduccion: OrdenProduccion[];
  autopartes: Autoparte[];
}
