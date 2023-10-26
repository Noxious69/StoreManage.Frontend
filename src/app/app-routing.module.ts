import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { InsertneworderComponent } from './pages/insertneworder/insertneworder.component';
import { OrderlistComponent } from './pages/orderlist/orderlist.component';

const routes: Routes = [
  {path: 'first' , component:FirstpageComponent},
  {path: 'newtask' , component:InsertneworderComponent},
  {path: 'list' , component:OrderlistComponent},
  {path: '' , redirectTo : '/first', pathMatch:'full'},
  {path: '**' , redirectTo : '/first'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
