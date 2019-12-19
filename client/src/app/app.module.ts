import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {SharedModule} from '../shared/shared.module'
import {routing} from './app.routing'
import {CreationsComponent} from './creations/creations.component'
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {HeaderComponent, FooterComponent} from './partials/index'
import {CreationComponent} from './creation/creation.component'

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CreationsComponent,
        AboutComponent,
        ContactComponent,
        CreationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
