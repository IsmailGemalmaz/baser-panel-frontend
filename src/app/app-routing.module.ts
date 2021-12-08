import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path:'',redirectTo:'anasayfa',pathMatch:'full'},
  {path:'anasayfa',component:MainComponent},
  {path:'hakkımızda',component:AboutComponent},
  {path:'iletişim',component:ContactComponent},
  {path:'haberler',component:NewsComponent},
  {path:'blog-detail',component:BlogDetailComponent},
  {path:'blog',component:BlogComponent},
  {path:'admin',component:AdminNavComponent},
  {path:'admin-anasayfa',component:AdminMainComponent},
  {path:'admin-hakkımızda',component:AdminAboutComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
