import Vue from 'vue'
import Background from './Background.vue';
import ImageHelper from '../../mixin/ImageHelper';

// helper function that mounts and returns the component with data
function getComp (Component, propsData) {
    let Ctor = Vue.extend(Component);
    return   new Ctor({ propsData });
}

describe('Background.vue', () => {
    it('has a created hook', () => {
        expect(typeof Background.created).toBe('function');
    });
    it('sets the correct default background image', () => {
        expect(typeof Background.data).toBe('function');
        const defaultData = Background.data();
        expect(defaultData.styleObject.backgroundImage).toBe('')
    });
    it('correctly sets the liste of image when created',  () => {
        let comp = getComp(Background, {srcset:"banner-image-desktop.jpg,banner-image-mobile.jpg"});
        comp.$mount();
        expect(typeof comp.img_ls).toBe('object');
        expect(comp.img_ls.length).toBe(2);
        expect(typeof comp.updateImg).toBe('function');
        expect(comp.styleObject.backgroundImage).toBe("url('dist/images/assets/banner-image-mobile.jpg')");
    });
    it('correctly sets the liste of image when resize',  () => {
        let comp = getComp(Background, {srcset:"desktop,mobile"});
        comp.$mount();
        expect(comp.styleObject.backgroundImage).toBe(ImageHelper.getImageBg('mobile'));
        comp.updateImg({innerWidth:1000});
        expect(comp.styleObject.backgroundImage).toBe(ImageHelper.getImageBg('desktop'));
        comp.updateImg({innerWidth:200});
        expect(comp.styleObject.backgroundImage).toBe(ImageHelper.getImageBg('mobile'));
    })
});

