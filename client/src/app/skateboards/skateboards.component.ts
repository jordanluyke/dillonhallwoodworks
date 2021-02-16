import {Component, OnInit} from '@angular/core'
import {ImgCacheService, ErrorHandlingSubscriber} from '../../shared/index'
import {from} from 'rxjs'
import {tap, toArray, concatMap} from 'rxjs/operators'
import {SafeUrl} from '@angular/platform-browser'

@Component({
    selector: 'skateboards-component',
    styleUrls: ['skateboards.css'],
    templateUrl: 'skateboards.html'
})
export class SkateboardsComponent implements OnInit {

    public imgSrcs: SafeUrl[] = []
    public activeIndex = -1
    public isLoading = true

    constructor(private imgCacheService: ImgCacheService) {}

    public ngOnInit(): void {
        let imgSrcs = Array.from(Array(27).keys())
            .map(i => `/img/skateboards/sb${i+1}.jpg`)

        from(imgSrcs)
            .pipe(
                concatMap(src => this.imgCacheService.get(src)),
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
