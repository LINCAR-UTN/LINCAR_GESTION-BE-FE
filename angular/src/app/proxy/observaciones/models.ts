import type { EntityDto } from '@abp/ng.core';
import type { Entity } from '../volo/abp/domain/entities/models';

export interface ObservacionDto extends EntityDto<number> {
  texto?: string;
}

export interface Observacion extends Entity<number> {
  texto?: string;
}
