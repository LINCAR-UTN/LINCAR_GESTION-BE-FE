import type { EntityDto } from '@abp/ng.core';
import type { Cliente, ClienteDto } from '../personas/models';
import type { EstadoOrdenProduccion, EstadoOrdenProduccionDto } from '../estados-orden-produccion/models';
import type { ModeloProducto, ModeloProductoDto } from '../modelos-producto/models';
import type { OrdenTrabajoAutoparte, OrdenTrabajoAutoparteDto } from '../ordenes-trabajo-autoparte/models';
import type { Observacion, ObservacionDto } from '../observaciones/models';
import type { Entity } from '../volo/abp/domain/entities/models';

export interface CreateUpdateOrdenProduccionDto {
  id?: number;
  nroOrden: number;
  fechaEmision?: string;
  fechaEntrega?: string;
  fechaEntregaEfectiva?: string;
  descripcionCamion?: string;
  centroRuedaCamion: number;
  modeloCamion?: string;
  cajaVelocidadCamion?: string;
  anchoChasisCamion: number;
  dominioCamion?: string;
  colorCamion?: string;
  largoChasisCamion: number;
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
  clienteId?: number;
  modeloProductoId?: number;
}

export interface OrdenProduccionDto extends EntityDto<number> {
  nroOrden: number;
  fechaEmision?: string;
  fechaEntrega?: string;
  fechaEntregaEfectiva?: string;
  descripcionCamion?: string;
  centroRuedaCamion: number;
  modeloCamion?: string;
  cajaVelocidadCamion?: string;
  anchoChasisCamion: number;
  dominioCamion?: string;
  colorCamion?: string;
  largoChasisCamion: number;
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
  cliente: ClienteDto;
  estados: EstadoOrdenProduccionDto[];
  modeloProducto: ModeloProductoDto;
  ordenesTrabajoAutoparte: OrdenTrabajoAutoparteDto[];
  observaciones: ObservacionDto[];
}

export interface OrdenProduccion extends Entity<number> {
  nroOrden: number;
  fechaEmision?: string;
  fechaEntrega?: string;
  fechaEntregaEfectiva?: string;
  descripcionCamion?: string;
  centroRuedaCamion: number;
  modeloCamion?: string;
  cajaVelocidadCamion?: string;
  anchoChasisCamion: number;
  dominioCamion?: string;
  colorCamion?: string;
  largoChasisCamion: number;
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
  cliente: Cliente;
  estados: EstadoOrdenProduccion[];
  modeloProducto: ModeloProducto;
  ordenesTrabajoAutoparte: OrdenTrabajoAutoparte[];
  observaciones: Observacion[];
}
