import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'listado', loadChildren: './listado/listado.module#ListadoPageModule' },
  { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },
  { path: 'aveagregar', loadChildren: './aveagregar/aveagregar.module#AveagregarPageModule' },
  { path: 'avistamientoagregar', loadChildren: './avistamientoagregar/avistamientoagregar.module#AvistamientoagregarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
