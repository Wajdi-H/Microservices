import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { LivresComponent } from './livres/livres.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from "@angular/common";
import { AddbooksComponent } from './livres/addbooks/addbooks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ListClientComponent } from './Client/list-client/list-client.component';
import { AddClientComponent } from './Client/add-client/add-client.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    AddCommandeComponent,
    NavbarComponent,
    AddbooksComponent,
    LivresComponent,
    ListcategoryComponent,
    AddcategoryComponent,
    ListClientComponent,
    AddClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
