import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './Pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './Composants/menu/menu.component';
import { HeaderComponent } from './Composants/header/header.component';
import { PageArticlesComponent } from './Pages/articles/page-articles/page-articles.component';
import { DetailArticleComponent } from './Composants/detail-article/detail-article.component';
import { PaginationComponent } from './Composants/pagination/pagination.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { BoutonActionComponent } from './Composants/bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './Composants/nouvel-article/nouvel-article.component';
import { PageMvtStockComponent } from './Pages/mvtStock/page-mvt-stock/page-mvt-stock.component';
import { DetailMvtStockArticleComponent } from './Composants/detail-mvt-stock-article/detail-mvt-stock-article.component';
import { DetailMtvStockComponent } from './Composants/detail-mtv-stock/detail-mtv-stock.component';
import { DetailCltFrsComponent } from './Composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './Pages/client/page-client/page-client.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticlesComponent,
    DetailArticleComponent,
    PaginationComponent,
    FooterComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    PageMvtStockComponent,
    DetailMvtStockArticleComponent,
    DetailMtvStockComponent,
    DetailCltFrsComponent,
    PageClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
