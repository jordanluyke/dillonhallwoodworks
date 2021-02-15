import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {SharedModule} from '../shared/shared.module'
import {routing} from './app.routing'
import {HomeComponent} from './home/home.component'
import {SkateboardsComponent} from './skateboards/skateboards.component'
import {PinstripingComponent} from './pinstriping/pinstriping.component'
import {StoryComponent} from './story/story.component'
import {ContactComponent} from './contact/contact.component'
import {HeaderComponent, FooterComponent} from './partials/index'

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SkateboardsComponent,
        PinstripingComponent,
        StoryComponent,
        ContactComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
