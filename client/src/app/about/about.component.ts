import {Component} from '@angular/core'
import {ImageLoaderService} from '../../shared/index'

@Component({
    selector: 'about-component',
    styleUrls: ['about.css'],
    templateUrl: 'about.html'
})
export class AboutComponent {

    public images = this.imageLoaderService.about

    constructor(private imageLoaderService: ImageLoaderService) {}
}
