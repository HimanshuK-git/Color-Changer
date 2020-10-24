import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TrendingComponent } from './home/trending/trending.component';

const routes: Routes = [{
  path:'trending',
  component: TrendingComponent
},
{
  path:'trending/:id',
  component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
