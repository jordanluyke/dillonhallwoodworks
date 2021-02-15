import {Injectable, SecurityContext} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {of, Observable, defer} from 'rxjs'
import {tap, map} from 'rxjs/operators'
import {DomSanitizer, SafeUrl} from '@angular/platform-browser'

@Injectable()
export class ImgCacheService {

    private cache: Map<string, ArrayBuffer> = new Map()
    private componentsCached: string[] = []

    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
    ) {}

    public get(src: string): Observable<SafeUrl> {
        return defer(() => {
            let buf = this.cache.get(src)
            if(buf != null)
                return of(buf)
            return this.httpClient.get(src, {
                responseType: "arraybuffer"
            })
                .pipe(tap(data => this.cache.set(src, data)))
        })
            .pipe(
                map(buf => {
                    let blob = new Blob([buf], {
                        type: 'image/jpeg'
                    })
                    let url = window.URL.createObjectURL(blob)
                    let safeUrl = this.sanitizer.bypassSecurityTrustUrl(url)
                    return safeUrl
                })
            )
    }

    public isComponentCached(componentName: string): boolean {
        return this.componentsCached.includes(componentName)
    }

    public addCachedComponent(componentName: string): void {
        if(!this.isComponentCached(componentName))
            this.componentsCached.push(componentName)
    }
}
