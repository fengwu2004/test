/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/adk/modules/newMap', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/test/idrCoreManager'], function (idrmap, coreManager) {

    coreManager.loadSessionSuccess = function () {

        var map = new idrmap();

        map.loadMap()
    }

    coreManager.init();

});