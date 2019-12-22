import {Component, OnInit} from '@angular/core'
import {ImageLoaderService, ErrorHandlingSubscriber} from '../../shared/index'
import {from, Observable} from 'rxjs'
import {flatMap, tap, take, toArray} from 'rxjs/operators'
import {SafeUrl} from '@angular/platform-browser'

@Component({
    selector: 'creations-component',
    styleUrls: ['creations.css'],
    templateUrl: 'creations.html'
})
export class CreationsComponent implements OnInit {

    public images = this.imageLoaderService.creations
    public showSpinner = true

    constructor(private imageLoaderService: ImageLoaderService) {}

    public ngOnInit(): void {
        this.onLoad()
            .pipe(tap(src => {
                this.showSpinner = false
            }))
            .subscribe(new ErrorHandlingSubscriber())
    }

    private onLoad(): Observable<SafeUrl[]> {
        return from(this.images)
            .pipe(
                flatMap(img => img.onLoad.asObservable()),
                take(this.images.length),
                toArray()
            )
    }
}
