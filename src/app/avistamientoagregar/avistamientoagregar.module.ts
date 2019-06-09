import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvistamientoagregarPage } from './avistamientoagregar.page';

const routes: Routes = [
  {
    path: '',
    component: AvistamientoagregarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvistamientoagregarPage]
})
export class AvistamientoagregarPageModule {}
