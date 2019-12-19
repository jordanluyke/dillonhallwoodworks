import {Component} from '@angular/core'
import {CreationService} from '../../shared/index'

@Component({
    selector: 'creations-component',
    styleUrls: ['creations.css'],
    templateUrl: 'creations.html'
})
export class CreationsComponent {

    public creations = this.creationService.creations.slice().reverse()

    constructor(
        private creationService: CreationService,
    ) {}
}
