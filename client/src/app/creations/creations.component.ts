import {Component, OnInit} from '@angular/core'
import {InstagramImage, InstagramService} from '../../shared/index'

@Component({
    selector: 'creations-component',
    styleUrls: ['creations.css'],
    templateUrl: 'creations.html'
})
export class CreationsComponent implements OnInit {

    public images = [
        "Bv77_n9nAjx",
        "ByGh2PyHdC4",
        "BvkdmJAnYG_",
        "Bwi_-97nRgV",
        "Bxab-arHPz6",
        "BwoSmrvHn40",
    ]
        .map(id => new InstagramImage(id))

    constructor(private instagramService: InstagramService) {}

    public ngOnInit(): void {
        this.instagramService.load(this.images)
    }
}
