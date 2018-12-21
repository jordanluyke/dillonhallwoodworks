import {Component, OnInit} from '@angular/core'
import {CreationService, Creation, ErrorHandlingSubscriber} from '../../shared/index'
import {ActivatedRoute, Router} from '@angular/router'
import {tap} from 'rxjs/operators'

@Component({
    selector: 'creation-component',
    styleUrls: ['creation.css'],
    templateUrl: 'creation.html'
})
export class CreationComponent implements OnInit {

    public creation: Creation
    public activeImgIndex = 0

    constructor(
        private creationService: CreationService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    public ngOnInit(): void {
        this.route.paramMap
            .pipe(
                tap(paramMap => {
                    let id = paramMap.get("id")
                    this.creation = this.creationService.creations[id]
                    if(this.creation == null)
                        this.router.navigate(["/"])
                })
            )
            .subscribe(new ErrorHandlingSubscriber())
    }
}
