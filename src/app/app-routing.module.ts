import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';



const routs: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },
    /* { path: '**', component: PageNotFoundComponent } */
];


@NgModule({
    imports: [RouterModule.forRoot(routs)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    constructor(private route: ActivatedRoute) { }
}