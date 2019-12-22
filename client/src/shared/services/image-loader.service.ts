import {Injectable} from '@angular/core'
import {from} from 'rxjs'
import {flatMap, tap} from 'rxjs/operators'
import {InstagramImage} from './model/index'
import {CacheService} from './cache.service'
import {ErrorHandlingSubscriber} from '../util/index'

@Injectable()
export class ImageLoaderService {

    public creations = [
        "Bv77_n9nAjx",
        "ByGh2PyHdC4",
        "BvkdmJAnYG_",
        "Bwi_-97nRgV",
        "Bxab-arHPz6",
        "BwoSmrvHn40",
    ].map(id => new InstagramImage(id))
    public about = [
        "B6CvzAsHZSB",
    ].map(id => new InstagramImage(id))

    constructor(private cacheService: CacheService) {}

    public start(): void {
        from(this.creations.concat(this.about))
            .pipe(flatMap(img => this.cacheService.getImgSrc(img.id, img.getMediaUrl())
                .pipe(tap(src => img.src = src))))
            .subscribe(new ErrorHandlingSubscriber())
    }
}
