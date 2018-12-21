import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {
    HeaderDefaultComponent,
} from './components/index'
import {CreationService} from './services/index'

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        HeaderDefaultComponent
    ],
    providers: [
        CreationService,
    ],
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        HeaderDefaultComponent,
    ]
})
export class SharedModule {}
