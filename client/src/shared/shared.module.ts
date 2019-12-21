import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {CacheService} from './services/index'

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgbModule,
    ],
    declarations: [
    ],
    providers: [
        CacheService,
    ],
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgbModule,
    ]
})
export class SharedModule {}
