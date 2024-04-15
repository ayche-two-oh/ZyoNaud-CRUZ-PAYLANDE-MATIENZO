import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPage } from './my-custom/my-custom.page';
import { MyCustomPageWithIdPage } from './my-custom/my-custom-page-with-id/my-custom-page-with-id.page';

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
  {
    path: 'my-page',
    loadChildren: () => import('./my-page/my-page.module').then( m => m.MyPagePageModule)
  },
  {
    path: 'my-custom', component: MyCustomPage
  },
  {
    path: 'my-custom/my-custom-page/:id', component: MyCustomPageWithIdPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
