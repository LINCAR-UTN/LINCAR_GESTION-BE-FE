import type { EntityDto } from '@abp/ng.core';
import type { Autoparte, AutoparteDto } from '../autopartes/models';
import type { Entity } from '../volo/abp/domain/entities/models';

export interface AtributoDto extends EntityDto<number> {
  nombre?: string;
  valor?: string;
  autoparte: AutoparteDto;
}

export interface Atributo extends Entity<number> {
  nombre?: string;
  valor?: string;
  autoparte: Autoparte;
}
