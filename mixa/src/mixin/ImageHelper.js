/**
 * Created by christophe.gaon on 11/01/2017.
 */

const rootImage = "dist/images/assets/";
export default class  ImageHelper {
    /**
     * get a background url image ready for style
     * @param path from siteCore variable
     * @returns {string} url for backgroundImage ready for setting
     */
    static getImageBg(path){
        return "url('"+rootImage+path+"')";
    }
}
