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
import { PageFournisseurComponent } from './Pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './Composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './Composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './Composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './Pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './Composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategorieComponent } from './Pages/categorie/page-categorie/page-categorie.component';
import { NouvelleCategoryComponent } from './Composants/nouvelle-category/nouvelle-category.component';
import { PageUtilisateurComponent } from './Pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './Composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './Pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './Pages/page-profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './Pages/page-profil/changer-mot-de-passe/changer-mot-de-passe.component';

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
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategorieComponent,
    NouvelleCategoryComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
