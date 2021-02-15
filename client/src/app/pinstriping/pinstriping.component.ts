import {Component, OnInit} from '@angular/core'
import {ImgCacheService, ErrorHandlingSubscriber} from '../../shared/index'
import {from, Observable} from 'rxjs'
import {mergeMap, tap, take, toArray, delay} from 'rxjs/operators'
import {SafeUrl} from '@angular/platform-browser'

@Component({
    selector: 'pinstriping-component',
    styleUrls: ['pinstriping.css'],
    templateUrl: 'pinstriping.html'
})
export class PinstripingComponent implements OnInit {

    public imgSrcs: SafeUrl[] = []
    public activeIndex = -1
    public isLoading = true

    constructor(private imgCacheService: ImgCacheService) {}

    public ngOnInit(): void {
        let imgSrcs = Array.from(Array(8).keys())
            .map(i => `/img/pinstriping/ps${i+1}.jpg`)

        from(imgSrcs)
            .pipe(
                mergeMap(src => this.imgCacheService.get(src)),
                toArray(),
                tap(srcs => {
                    this.imgSrcs = srcs
                    if(this.imgCacheService.isComponentCached(this.constructor.name)) {
                        this.isLoading = false
                    } else {
                        setTimeout(() => {
                            this.isLoading = false
                        }, 200)
                        this.imgCacheService.addCachedComponent(this.constructor.name)
                    }
                }, err => {
                    this.isLoading = false
                }),
            )
            .subscribe(new ErrorHandlingSubscriber())
    }

    public onImgClick(index: number): void {
        if(this.activeIndex != index)
            this.activeIndex = index
        else
            this.activeIndex = -1
    }
}
