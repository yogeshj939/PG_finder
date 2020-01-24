import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PgDisplayComponent } from './pg-display/pg-display.component';

const routes: Routes = [
  { path: 'pg', component: PgDisplayComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
