import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderTableComponent } from './components/calender-table/calender-table.component';

const routes: Routes = [
  {
    path: 'time-table',
    component: CalenderTableComponent
  },
  {
    path: '**',
    redirectTo: 'time-table'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
