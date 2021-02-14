import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {StreetComponent} from './street/street.component'
import {OceanComponent} from './ocean/ocean.component'
import {PinstripingComponent} from './pinstriping/pinstriping.component'
import {HistoryComponent} from './history/history.component'
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'

const routes: Routes = [
    {
        path: '',
        component: StreetComponent
    }, {
        path: 'ocean',
        component: OceanComponent
    }, {
        path: 'pinstriping',
        component: PinstripingComponent
    }, {
        path: 'history',
        component: HistoryComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'contact',
        component: ContactComponent
    }, {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
    useHash: true
})
