/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrMapControl', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrCoreManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrDataManager'], function (idrmap, idrCoreMgr, idrDataMgr) {

    var regionId = '14794349038400909'

    var floorId = '14557583851000004'

    idrCoreMgr.loadSessionSuccess = function () {

        idrDataMgr.loadRegionInfo(regionId, function () {

            var map = new idrmap();

            map.loadMap(regionId, floorId);
        }, null)
    }

    idrCoreMgr.init();
});