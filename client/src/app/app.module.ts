import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {SharedModule} from '../shared/shared.module'
import {routing} from './app.routing'
import {StreetComponent} from './street/street.component'
import {OceanComponent} from './ocean/ocean.component'
import {PinstripingComponent} from './pinstriping/pinstriping.component'
import {HistoryComponent} from './history/history.component'
import {AboutComponent} from './about/about.component'
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
        StreetComponent,
        OceanComponent,
        PinstripingComponent,
        HistoryComponent,
        AboutComponent,
        ContactComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
