import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauCltFrsComponent } from './Composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelArticleComponent } from './Composants/nouvel-article/nouvel-article.component';
import { NouvelleCategoryComponent } from './Composants/nouvelle-category/nouvelle-category.component';
import { NouvelleCmdCltFrsComponent } from './Composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageArticlesComponent } from './Pages/articles/page-articles/page-articles.component';
import { PageCategorieComponent } from './Pages/categorie/page-categorie/page-categorie.component';
import { PageClientComponent } from './Pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './Pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageMvtStockComponent } from './Pages/mvtStock/page-mvt-stock/page-mvt-stock.component';
import { PageCmdCltFrsComponent } from './Pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { ChangerMotDePasseComponent } from './Pages/page-profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './Pages/page-profil/page-profil/page-profil.component';
import { PageStatistiquesComponent } from './Pages/page-statistiques/page-statistiques.component';
import { NouvelUtilisateurComponent } from './Pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './Pages/utilisateur/page-utilisateur/page-utilisateur.component';

const routes: Routes = [
  {path:'login',component:PageLoginComponent},
  {path:'inscrire',component:PageInscriptionComponent},
  {path:'',component:PageDashboardComponent,
children:[
  {path:'statistique',component:PageStatistiquesComponent},
  {path:'articles',component:PageArticlesComponent},
  {path:'nouvelarticle',component:NouvelArticleComponent},
  {path:'mvtstock',component:PageMvtStockComponent},
  {path:'clients',component:PageClientComponent},
  {path:'commandesclient',component:PageCmdCltFrsComponent,
  data:{
    origin:'client'
  }},
  {
    path: 'nouvellecommandeclt',
    component: NouvelleCmdCltFrsComponent,
    data: {
      origin: 'client'
    }
  }, 
  {path:'nouveauclient',component:NouveauCltFrsComponent,
  data:{
    origin:'client'
  }},
  {path:'fournisseurs',component:PageFournisseurComponent},
  {path:'nouveaufournisseur',component:NouveauCltFrsComponent,
data:{
  origin:'fournisseur'
}},
  {path:'commandesfournisseur',component:PageCmdCltFrsComponent,
   data:{
     origin:'fournisseur'
   }},
   {
    path: 'nouvellecommandefrs',
    component: NouvelleCmdCltFrsComponent,
    data: {
      origin: 'fournisseur'
    }
  },
  
  {path:'categories',component:PageCategorieComponent},
  {path:'nouvellecategorie',component:NouvelleCategoryComponent},
  {path:'utilisateurs',component:PageUtilisateurComponent},
  {path:'nouvelutilisateur',component:NouvelUtilisateurComponent},
  {path:'profil',component:PageProfilComponent},
  {path:'changermotdepasse',component:ChangerMotDePasseComponent}

]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
