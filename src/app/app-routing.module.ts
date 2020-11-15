import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AddbooksComponent } from './livres/addbooks/addbooks.component';
import { LivresComponent } from './livres/livres.component';

const routes: Routes = [
  { path: "", component: CommandesComponent },
  { path: "commande", component: CommandesComponent },
  { path: "livres", component: LivresComponent },
  { path: "addbook", component: AddbooksComponent },
  { path: "Category", component: ListcategoryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
