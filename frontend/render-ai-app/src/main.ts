import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { } from 'node';
import { AppModule } from './app/app.module';

import { hmrBootstrap } from './hmr';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);
if (process.env.NODE_ENV !== 'production') {
  if (module[ 'hot' ]) {
    hmrBootstrap(module, bootstrap);
  } else {
    bootstrap();
  }
} else {
  bootstrap();
}
