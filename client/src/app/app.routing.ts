import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {CreationComponent} from './creation/creation.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'contact',
        component: ContactComponent
    }, {
        path: 'creations/:id',
        component: CreationComponent,
    }, {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true})
