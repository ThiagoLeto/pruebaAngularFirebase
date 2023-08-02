import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { enviroment } from 'src/environments/enviroment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AddProbandoComponent } from './add-probando/add-probando.component';
import { GetProbandoComponent } from './get-probando/get-probando.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AddProbandoComponent,
    AppComponent,
    AddProbandoComponent,
    GetProbandoComponent,
    MenuComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
