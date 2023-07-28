import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path: 'Home', component: HomeComponent},
  {path : 'MyRecipes' , component : MyRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
