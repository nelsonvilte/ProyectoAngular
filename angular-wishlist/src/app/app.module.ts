import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule as NgRxStoreModule, ActionReducerMap} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule}from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './components/destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './components/lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './components/destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './components/form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { DestinosViajesState, reducerDestinosViajes, initializeDestinosViajesState, DestinosViajesEffects } from './models/destinos-viajes-state.model';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { AuthService } from './services/auth.service';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado/usuario-logueado.guard';



//routing
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:ListaDestinosComponent},
  {path: 'destino/:id', component:DestinoDetalleComponent},
  
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ UsuarioLogueadoGuard ]
  }
];

//redux init
export interface AppState{
  destinos: DestinosViajesState;
}
const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};

let reducersInitialState = {
  destinos: initializeDestinosViajesState()
};
//redux fin init

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers,{initialState: reducersInitialState,
      runtimeChecks:{ 

        strictStateImmutability: false, 
  
        strictActionImmutability: false, 
  
      } 
    }),
    EffectsModule.forRoot([DestinosViajesEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    DestinosApiClient, AuthService, UsuarioLogueadoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
