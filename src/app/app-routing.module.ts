import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelArticleComponent } from './Composants/nouvel-article/nouvel-article.component';
import { PageArticlesComponent } from './Pages/articles/page-articles/page-articles.component';
import { PageClientComponent } from './Pages/client/page-client/page-client.component';
import { PageMvtStockComponent } from './Pages/mvtStock/page-mvt-stock/page-mvt-stock.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './Pages/page-statistiques/page-statistiques.component';

const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'inscrire',component:PageInscriptionComponent},
  {path:'',component:PageDashboardComponent,
children:[
  {path:'statistique',component:PageStatistiquesComponent},
  {path:'articles',component:PageArticlesComponent},
  {path:'nouvelarticle',component:NouvelArticleComponent},
  {path:'mvtstock',component:PageMvtStockComponent},
  {path:'clients',component:PageClientComponent}
]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
