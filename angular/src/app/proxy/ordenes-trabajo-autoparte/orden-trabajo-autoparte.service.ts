import type { CreateUpdateOrdenTrabajoAutoparteDto, OrdenTrabajoAutoparteDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdenTrabajoAutoparteService {
  apiName = 'Default';
  

  createUpdateOrdenTrabajoAutoparte = (input: CreateUpdateOrdenTrabajoAutoparteDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenTrabajoAutoparteDto>({
      method: 'POST',
      url: '/api/app/orden-trabajo-autoparte/update-orden-trabajo-autoparte',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getAllOrdenesTrabajoAutoparte = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenTrabajoAutoparteDto[]>({
      method: 'GET',
      url: '/api/app/orden-trabajo-autoparte/ordenes-trabajo-autoparte',
    },
    { apiName: this.apiName,...config });
  

  getOrdenTrabajoAutoparte = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenTrabajoAutoparteDto>({
      method: 'GET',
      url: `/api/app/orden-trabajo-autoparte/${id}/orden-trabajo-autoparte`,
    },
    { apiName: this.apiName,...config });
  

  getOrdenesTrabajoAutoparteAsignadasAUnEmpleado = (empleadoId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrdenTrabajoAutoparteDto[]>({
      method: 'GET',
      url: `/api/app/orden-trabajo-autoparte/ordenes-trabajo-autoparte-asignadas-aUn-empleado/${empleadoId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
