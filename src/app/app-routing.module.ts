import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  
  //{
   // path: 'inicio',
    //loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  //},
  {
  path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
   path: 'gustos',
  loadChildren: () => import('./gustos/gustos.module').then( m => m.GustosPageModule)
  },
  //{
   // path: 'busqueda',
    //loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  //},
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  //{
   // path: 'galeria',
    //loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  //},
  //{
   // path: 'actualizaciones',
   // loadChildren: () => import('./actualizaciones/actualizaciones.module').then( m => m.ActualizacionesPageModule)
  //},
  //{
   // path: 'biblioteca',
   // loadChildren: () => import('./biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  //},
  //{
    //path: 'encuesta',
    //loadChildren: () => import('./encuesta/encuesta.module').then( m => m.EncuestaPageModule)
 // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
