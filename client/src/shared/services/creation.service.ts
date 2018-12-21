import {Injectable} from '@angular/core'
import {Creation} from './model/index'

@Injectable()
export class CreationService {

    public creations: Creation[] = [
        {
            title: "Experimental bench/coffee table",
            imgs: [
                "https://scontent-sjc3-1.cdninstagram.com/vp/bb822f52a91c21880683f7cbe7452a26/5C941404/t51.2885-15/e35/46722444_275375153143893_5807018697456207619_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
                "https://scontent-sjc3-1.cdninstagram.com/vp/bc6b3fbdc43bc676ed30c8f51fc0ff56/5CA42583/t51.2885-15/e35/46879000_1303227493153411_7026721733571293111_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
                "https://scontent-sjc3-1.cdninstagram.com/vp/7c01484083db5a3d471578b3caa9dc67/5CA8D3D0/t51.2885-15/e35/47582333_2593026060724373_6031296934741291297_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in."
        },
        {
            title: "Coffee Table",
            imgs: [
                "https://scontent-sjc3-1.cdninstagram.com/vp/716c9621f3c86cd0fc27689d78048e6d/5CD55D88/t51.2885-15/e35/46679561_283641315669938_9176674608243030962_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
                "https://scontent-sjc3-1.cdninstagram.com/vp/0851f91f889864483910f3df962150db/5CB91300/t51.2885-15/e35/46538795_2033475643364904_894380804077930978_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in."
        },
    ]
}
