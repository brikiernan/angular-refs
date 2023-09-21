import { ApplicationConfig } from '@angular/core';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';

const config: Partial<IConfig> = {
  leadZeroDateTime: true,
  showMaskTyped: true,
};

export const appConfig: ApplicationConfig = {
  providers: [provideEnvironmentNgxMask(config)],
};
