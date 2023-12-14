import type { CreateUpdateEmpleadoDto, EmpleadoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  apiName = 'Default';
  

  createUpdateEmpleado = (input: CreateUpdateEmpleadoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmpleadoDto>({
      method: 'POST',
      url: '/api/app/empleado/update-empleado',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
