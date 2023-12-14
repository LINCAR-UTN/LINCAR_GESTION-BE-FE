import type { CreateUpdateModeloProductoDto, ModeloProductoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModeloProductoService {
  apiName = 'Default';
  

  createUpdateModeloProducto = (input: CreateUpdateModeloProductoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModeloProductoDto>({
      method: 'POST',
      url: '/api/app/modelo-producto/update-modelo-producto',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getModelosProducto = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ModeloProductoDto[]>({
      method: 'GET',
      url: '/api/app/modelo-producto/modelos-producto',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
