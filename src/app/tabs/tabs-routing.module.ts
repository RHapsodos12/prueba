import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
      path: 'inicio',
      children: [
        {
          path: '',
          loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
        }
      ]
    },
    {
      path: 'busqueda',
      children: [
        {
          path: '',
          loadChildren: () => import('../busqueda/busqueda.module').then( m => m.BusquedaPageModule)
        }
      ]
    },
    {
      path: 'encuesta',
      children: [
        {
          path: '',
          loadChildren: () => import('../encuesta/encuesta.module').then( m => m.EncuestaPageModule)
        }
      ]
    },
    {
      path: 'biblioteca',
      children: [
        {
          path: '',
          loadChildren: () => import('../biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
        }
      ]
    },
    {
      path: 'galeria',
      children: [
        {
          path: '',
          loadChildren: () => import('../galeria/galeria.module').then( m => m.GaleriaPageModule)
        }
      ]
    },
    {
      path: 'actualizaciones',
      children: [
        {
          path: '',
          loadChildren: () => import('../actualizaciones/actualizaciones.module').then( m => m.ActualizacionesPageModule)
        }
      ]
    },

{
      path: '',
      redirectTo: '/tabs/inicio',
      pathMatch: 'full'
    }
  ]
  } , 

    {
      path: '',
      redirectTo: '/tabs/inicio',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
