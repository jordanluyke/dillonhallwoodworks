import {Component} from '@angular/core'
import {CacheService} from '../../shared/index'

@Component({
    selector: 'about-component',
    styleUrls: ['about.css'],
    templateUrl: 'about.html'
})
export class AboutComponent {

    constructor(public cacheService: CacheService) {}

    public toIgUrl(id: string): string {
        return `https://instagram.com/p/${id}/media?size=m`
    }
}
