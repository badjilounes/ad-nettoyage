import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './core/navigation/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PerformanceComponent } from './performance/performance.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: '', component: SidebarComponent,
    children: [
      {
        path: 'accueil', component: HomeComponent, data: {
          title: 'home.title',
          menu: true
        }
      },
      {
        path: 'services', component: PerformanceComponent, data: {
          title: 'performance.title',
          menu: true
        }
      },
      {
        path: 'devis-gratuit', component: QuoteComponent, data: {
          title: 'quote.title',
          menu: true
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
