/**
 * Created by christophe.gaon on 11/01/2017.
 */
import {screenSizes} from '../../constants/screen-sizes';
import debounce from 'lodash/debounce';
import ImageHelper from '../../mixin/ImageHelper';

export default {
    name: 'background',
    props: ['srcset'],
    methods: {
        /**
         * Update the image according to the window resized
         * @param target window resized
         */
        updateImg: function (target) {
            if(target.innerWidth>screenSizes.SCREEN_XS){
                this.styleObject.backgroundImage = ImageHelper.getImageBg(this.img_ls[0]);
            }
            else {
                this.styleObject.backgroundImage = ImageHelper.getImageBg(this.img_ls[1]);
            }
        }
    },
    created: function() {
        this.img_ls = this.srcset.split(',');
        this.updateImg(window);
        window.onresize= debounce((event) => {
            this.updateImg(event.target);
        },150);
    },
    data: function (){
        return {
            styleObject : {
                backgroundImage : ""
            }
        }
    }
}