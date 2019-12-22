import {ReplaySubject} from 'rxjs'
import {SafeUrl} from '@angular/platform-browser'

export class InstagramImage {

    public onLoad: ReplaySubject<SafeUrl> = new ReplaySubject(1)
    public src?: SafeUrl

    constructor(public id: string) {}

    public getPostUrl(): string {
        return "https://instagram.com/p/" + this.id
    }

    public getMediaUrl(): string {
        return `https://instagram.com/p/${this.id}/media/?size=m`
    }
}