import {Injectable} from '@angular/core'
import {Creation} from './model/index'

@Injectable()
export class CreationService {

    public creations: Creation[] = [
        {
            title: "Experimental bench/coffee table",
            imgs: [
                "/img/experimental-coffee-bench1.jpg",
                "/img/experimental-coffee-bench2.jpg",
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in."
        },
        {
            title: "Coffee Table",
            imgs: [
                "/img/coffee-table1.jpg",
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in."
        },
    ]
}
