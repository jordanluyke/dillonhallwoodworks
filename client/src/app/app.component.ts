import {Component} from '@angular/core'
import {ImageLoaderService} from '../shared/index'

@Component({
    selector: 'app-component',
    templateUrl: 'app.html'
})
export class AppComponent {
    constructor(private imageLoaderService: ImageLoaderService) {
        // imageLoaderService.start()
    }
}
