import type { ClienteDto, CreateUpdateClienteDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  apiName = 'Default';
  

  createUpdateCliente = (input: CreateUpdateClienteDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ClienteDto>({
      method: 'POST',
      url: '/api/app/cliente/update-cliente',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
