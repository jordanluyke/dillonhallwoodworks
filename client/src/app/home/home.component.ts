import {Component} from '@angular/core'
import {CreationService} from '../../shared/index'

@Component({
    selector: 'home-component',
    styleUrls: ['home.css'],
    templateUrl: 'home.html'
})
export class HomeComponent {

    public creations = this.creationService.creations.slice().reverse()

    constructor(
        private creationService: CreationService,
    ) {}
}
