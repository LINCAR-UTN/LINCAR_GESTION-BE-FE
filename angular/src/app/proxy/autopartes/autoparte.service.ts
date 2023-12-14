import type { AutoparteDto, CreateUpdateAutoparteDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutoparteService {
  apiName = 'Default';
  

  createUpdateAutoparte = (input: CreateUpdateAutoparteDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AutoparteDto>({
      method: 'POST',
      url: '/api/app/autoparte/update-autoparte',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getAutopartes = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AutoparteDto[]>({
      method: 'GET',
      url: '/api/app/autoparte/autopartes',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
