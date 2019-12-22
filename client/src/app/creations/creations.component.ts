import {Component} from '@angular/core'
import {ImageLoaderService} from '../../shared/index'

@Component({
    selector: 'creations-component',
    styleUrls: ['creations.css'],
    templateUrl: 'creations.html'
})
export class CreationsComponent {

    public images = this.imageLoaderService.creations

    constructor(private imageLoaderService: ImageLoaderService) {}
}
