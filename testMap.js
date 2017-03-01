/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrMapControl', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrCoreManager'], function (idrmap, coreManager) {

    coreManager.loadSessionSuccess = function () {

        var map = new idrmap();

        map.loadMap('14794349038400909', '14557583851000004');
    }

    coreManager.init();
});