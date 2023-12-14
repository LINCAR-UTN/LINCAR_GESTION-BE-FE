import type { CreateUpdateSectorProduccionDto, SectorProduccionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectorProduccionService {
  apiName = 'Default';
  

  createUpdateSectorProduccion = (input: CreateUpdateSectorProduccionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SectorProduccionDto>({
      method: 'POST',
      url: '/api/app/sector-produccion/update-sector-produccion',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getSectoresProduccion = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SectorProduccionDto[]>({
      method: 'GET',
      url: '/api/app/sector-produccion/sectores-produccion',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
