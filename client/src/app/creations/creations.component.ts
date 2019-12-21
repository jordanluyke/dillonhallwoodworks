import {Component, OnInit} from '@angular/core'
import {CacheService} from '../../shared/index'
import {tap} from 'rxjs/operators'

@Component({
    selector: 'creations-component',
    styleUrls: ['creations.css'],
    templateUrl: 'creations.html'
})
export class CreationsComponent {

    public igIds = [
        "Bv77_n9nAjx",
        "ByGh2PyHdC4",
        "BvkdmJAnYG_",
        "Bwi_-97nRgV",
        "Bxab-arHPz6",
        "BwoSmrvHn40",
    ]

    constructor(public cacheService: CacheService) {}

    public toIgUrl(id: string): string {
        return `https://instagram.com/p/${id}/media?size=m`
    }
}
