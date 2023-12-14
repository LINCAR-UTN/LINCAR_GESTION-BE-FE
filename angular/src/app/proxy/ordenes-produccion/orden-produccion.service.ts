import type { CreateUpdateOrdenProduccionDto, OrdenProduccionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { EstadoOrdenProduccion } from '../estados-orden-produccion/models';

@Injectable({
  providedIn: 'root',
})
export class OrdenProduccionService {
  apiName = 'Default';
  

  createUpdateOrdenProduccion = (input: CreateUpdateOrdenProduccionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenProduccionDto>({
      method: 'POST',
      url: '/api/app/orden-produccion/update-orden-produccion',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getAllOrdenesTrabajoAutoparte = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenProduccionDto[]>({
      method: 'GET',
      url: '/api/app/orden-produccion/ordenes-trabajo-autoparte',
    },
    { apiName: this.apiName,...config });
  

  getOrdenProduccion = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenProduccionDto>({
      method: 'GET',
      url: `/api/app/orden-produccion/${id}/orden-produccion`,
    },
    { apiName: this.apiName,...config });
  

  getOrdenesTrabajoAutopartePorEstadoActual = (estado: EstadoOrdenProduccion, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenProduccionDto[]>({
      method: 'GET',
      url: '/api/app/orden-produccion/ordenes-trabajo-autoparte-por-estado-actual',
      params: { nombre: estado.nombre, fechaHoraHasta: estado.fechaHoraHasta, ["OrdenProduccion.NroOrden"]: estado.ordenProduccion.nroOrden, ["OrdenProduccion.FechaEmision"]: estado.ordenProduccion.fechaEmision, ["OrdenProduccion.FechaEntrega"]: estado.ordenProduccion.fechaEntrega, ["OrdenProduccion.FechaEntregaEfectiva"]: estado.ordenProduccion.fechaEntregaEfectiva, ["OrdenProduccion.DescripcionCamion"]: estado.ordenProduccion.descripcionCamion, ["OrdenProduccion.CentroRuedaCamion"]: estado.ordenProduccion.centroRuedaCamion, ["OrdenProduccion.ModeloCamion"]: estado.ordenProduccion.modeloCamion, ["OrdenProduccion.CajaVelocidadCamion"]: estado.ordenProduccion.cajaVelocidadCamion, ["OrdenProduccion.AnchoChasisCamion"]: estado.ordenProduccion.anchoChasisCamion, ["OrdenProduccion.DominioCamion"]: estado.ordenProduccion.dominioCamion, ["OrdenProduccion.ColorCamion"]: estado.ordenProduccion.colorCamion, ["OrdenProduccion.LargoChasisCamion"]: estado.ordenProduccion.largoChasisCamion, ["OrdenProduccion.LargoTotalMts"]: estado.ordenProduccion.largoTotalMts, ["OrdenProduccion.LargoUtilMts"]: estado.ordenProduccion.largoUtilMts, ["OrdenProduccion.AltoTotalMts"]: estado.ordenProduccion.altoTotalMts, ["OrdenProduccion.AltoUtilMts"]: estado.ordenProduccion.altoUtilMts, ["OrdenProduccion.AnchoTotalMts"]: estado.ordenProduccion.anchoTotalMts, ["OrdenProduccion.AnchoUtilMts"]: estado.ordenProduccion.anchoUtilMts, ["OrdenProduccion.EspesorPisoMms"]: estado.ordenProduccion.espesorPisoMms, ["OrdenProduccion.TipoUnidad"]: estado.ordenProduccion.tipoUnidad, ["OrdenProduccion.TipoPiso"]: estado.ordenProduccion.tipoPiso, ["OrdenProduccion.ColorZocalo"]: estado.ordenProduccion.colorZocalo, ["OrdenProduccion.ColorInferior"]: estado.ordenProduccion.colorInferior, ["OrdenProduccion.PuertaLateral"]: estado.ordenProduccion.puertaLateral, ["OrdenProduccion.PuertaTrasera"]: estado.ordenProduccion.puertaTrasera, ["OrdenProduccion.Malacates"]: estado.ordenProduccion.malacates, ["OrdenProduccion.Arcos"]: estado.ordenProduccion.arcos, ["OrdenProduccion.Escalera"]: estado.ordenProduccion.escalera, ["OrdenProduccion.Boquillas"]: estado.ordenProduccion.boquillas, ["OrdenProduccion.PortaEstacas"]: estado.ordenProduccion.portaEstacas, ["OrdenProduccion.Voltaje"]: estado.ordenProduccion.voltaje, ["OrdenProduccion.Cliente.Nombre"]: estado.ordenProduccion.cliente.nombre, ["OrdenProduccion.Cliente.Apellido"]: estado.ordenProduccion.cliente.apellido, ["OrdenProduccion.Cliente.NumeroTelefono"]: estado.ordenProduccion.cliente.numeroTelefono, ["OrdenProduccion.Cliente.DNI"]: estado.ordenProduccion.cliente.dni, ["OrdenProduccion.Cliente.FechaHoraAlta"]: estado.ordenProduccion.cliente.fechaHoraAlta, ["OrdenProduccion.Cliente.FechaHoraModificado"]: estado.ordenProduccion.cliente.fechaHoraModificado, ["OrdenProduccion.Cliente.Direccion"]: estado.ordenProduccion.cliente.direccion, ["OrdenProduccion.Cliente.OrdenesProduccion"]: estado.ordenProduccion.cliente.ordenesProduccion, ["OrdenProduccion.Cliente.Id"]: estado.ordenProduccion.cliente.id, ["OrdenProduccion.Estados"]: estado.ordenProduccion.estados, ["OrdenProduccion.ModeloProducto.CodigoModelo"]: estado.ordenProduccion.modeloProducto.codigoModelo, ["OrdenProduccion.ModeloProducto.LargoTotalMts"]: estado.ordenProduccion.modeloProducto.largoTotalMts, ["OrdenProduccion.ModeloProducto.LargoUtilMts"]: estado.ordenProduccion.modeloProducto.largoUtilMts, ["OrdenProduccion.ModeloProducto.AltoTotalMts"]: estado.ordenProduccion.modeloProducto.altoTotalMts, ["OrdenProduccion.ModeloProducto.AltoUtilMts"]: estado.ordenProduccion.modeloProducto.altoUtilMts, ["OrdenProduccion.ModeloProducto.AnchoTotalMts"]: estado.ordenProduccion.modeloProducto.anchoTotalMts, ["OrdenProduccion.ModeloProducto.AnchoUtilMts"]: estado.ordenProduccion.modeloProducto.anchoUtilMts, ["OrdenProduccion.ModeloProducto.EspesorPisoMms"]: estado.ordenProduccion.modeloProducto.espesorPisoMms, ["OrdenProduccion.ModeloProducto.TipoUnidad"]: estado.ordenProduccion.modeloProducto.tipoUnidad, ["OrdenProduccion.ModeloProducto.TipoPiso"]: estado.ordenProduccion.modeloProducto.tipoPiso, ["OrdenProduccion.ModeloProducto.ColorZocalo"]: estado.ordenProduccion.modeloProducto.colorZocalo, ["OrdenProduccion.ModeloProducto.ColorInferior"]: estado.ordenProduccion.modeloProducto.colorInferior, ["OrdenProduccion.ModeloProducto.PuertaLateral"]: estado.ordenProduccion.modeloProducto.puertaLateral, ["OrdenProduccion.ModeloProducto.PuertaTrasera"]: estado.ordenProduccion.modeloProducto.puertaTrasera, ["OrdenProduccion.ModeloProducto.Malacates"]: estado.ordenProduccion.modeloProducto.malacates, ["OrdenProduccion.ModeloProducto.Arcos"]: estado.ordenProduccion.modeloProducto.arcos, ["OrdenProduccion.ModeloProducto.Escalera"]: estado.ordenProduccion.modeloProducto.escalera, ["OrdenProduccion.ModeloProducto.Boquillas"]: estado.ordenProduccion.modeloProducto.boquillas, ["OrdenProduccion.ModeloProducto.PortaEstacas"]: estado.ordenProduccion.modeloProducto.portaEstacas, ["OrdenProduccion.ModeloProducto.Voltaje"]: estado.ordenProduccion.modeloProducto.voltaje, ["OrdenProduccion.ModeloProducto.OrdenesProduccion"]: estado.ordenProduccion.modeloProducto.ordenesProduccion, ["OrdenProduccion.ModeloProducto.Autopartes"]: estado.ordenProduccion.modeloProducto.autopartes, ["OrdenProduccion.ModeloProducto.Id"]: estado.ordenProduccion.modeloProducto.id, ["OrdenProduccion.OrdenesTrabajoAutoparte"]: estado.ordenProduccion.ordenesTrabajoAutoparte, ["OrdenProduccion.Observaciones"]: estado.ordenProduccion.observaciones, ["OrdenProduccion.Id"]: estado.ordenProduccion.id, id: estado.id },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
