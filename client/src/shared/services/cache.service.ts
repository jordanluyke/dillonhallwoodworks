import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of, defer, ReplaySubject} from 'rxjs'
import {map, flatMap} from 'rxjs/operators'
import {DomSanitizer, SafeUrl} from '@angular/platform-browser'

@Injectable()
export class CacheService {

    private imgCache: Map<string, ReplaySubject<ArrayBuffer>> = new Map()

    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
    ) {}

    public getImgSrc(id: string, url: string): Observable<SafeUrl> {
        return defer(() => {
            let subject = this.imgCache.get(id)
            if(subject != null)
                return of(subject)
            return this.httpClient.get(url, {
                responseType: "arraybuffer"
            })
                .pipe(
                    map(data => {
                        let subject: ReplaySubject<ArrayBuffer> = new ReplaySubject(1)
                        this.imgCache.set(id, subject)
                        subject.next(data)
                        return subject
                    })
                )
        })
            .pipe(
                flatMap(subject => subject.asObservable()),
                map(data => {
                    let blob = new Blob([data], {
                        type: 'image/jpeg'
                    })
                    let url = window.URL.createObjectURL(blob)
                    return this.sanitizer.bypassSecurityTrustUrl(url)
                })
            )
    }
}
