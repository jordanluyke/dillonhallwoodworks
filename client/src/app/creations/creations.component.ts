import {Component} from '@angular/core'

@Component({
    selector: 'creations-component',
    styleUrls: ['creations.css'],
    templateUrl: 'creations.html'
})
export class CreationsComponent {

    public igUrls = [
        "Bv77_n9nAjx",
        "ByGh2PyHdC4",
        "BvkdmJAnYG_",
        "Bwi_-97nRgV",
        "Bxab-arHPz6",
        "BwoSmrvHn40",
    ]
        .map(id => {
            return "https://instagram.com/p/" + id
        })
}
