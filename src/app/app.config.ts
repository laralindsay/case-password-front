import { provideHttpClient, withFetch } from '@angular/common/http';

import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withFetch()), provideAnimationsAsync()
  ]
};
