import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {SkateboardsComponent} from './skateboards/skateboards.component'
import {PinstripingComponent} from './pinstriping/pinstriping.component'
import {StoryComponent} from './story/story.component'
import {ContactComponent} from './contact/contact.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'skateboards',
        component: SkateboardsComponent
    }, {
        path: 'pinstriping',
        component: PinstripingComponent
    }, {
        path: 'story',
        component: StoryComponent
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
