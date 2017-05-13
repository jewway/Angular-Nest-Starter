import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import * as express from 'express';
import { enableProdMode } from '@angular/core';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ngExpressEngine } from '@nguniversal/express-engine';

import { ServerAppModule } from './app/server-app.module';
import { data } from './api/data';

enableProdMode();
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

const ROUTES: string[] = [
  '/',
  '/about'
];

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    res.render('../dist/index', {
      req: req,
      res: res
    });
  });
});

app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});
