import {Injectable} from '@angular/core'
import {from} from 'rxjs'
import {flatMap, tap} from 'rxjs/operators'
import {InstagramImage} from './model/index'
import {CacheService} from './cache.service'
import {ErrorHandlingSubscriber} from '../util/index'

@Injectable()
export class InstagramService {

    constructor(private cacheService: CacheService) {}

    public load(images: InstagramImage[]): void {
        from(images)
            .pipe(flatMap(img => this.cacheService.getImgSrc(img.id, img.getMediaUrl())
                .pipe(tap(src => img.src = src))))
            .subscribe(new ErrorHandlingSubscriber())
    }
}
