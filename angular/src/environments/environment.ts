import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'LINCAR_GESTION',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44375/',
    redirectUri: baseUrl,
    clientId: 'LINCAR_GESTION_App',
    responseType: 'code',
    scope: 'offline_access LINCAR_GESTION',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44375',
      rootNamespace: 'LINCAR_GESTION',
    },
  },
} as Environment;
