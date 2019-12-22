import {Component, OnInit} from '@angular/core'
import {InstagramImage, InstagramService} from '../../shared/index'

@Component({
    selector: 'about-component',
    styleUrls: ['about.css'],
    templateUrl: 'about.html'
})
export class AboutComponent implements OnInit {

    public images: InstagramImage[] = ["B6CvzAsHZSB"].map(id => new InstagramImage(id))

    constructor(public instagramService: InstagramService) {}

    public ngOnInit(): void {
        this.instagramService.load(this.images)
    }
}
