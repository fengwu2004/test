/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrMapControl', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrCoreManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrDataManager'], function (idrmap, idrCoreMgr, idrDataMgr) {

    var regionId = '14633645971891335'

    var floorId = '14633645973301472'

    idrCoreMgr.loadSessionSuccess = function () {

        idrDataMgr.loadRegionInfo(regionId, function () {

            var map = new idrmap();

            map.setLoadMapFinishCallback(function() {

                map.setCurrPos(100, 100, true)

                map.showPath([[100, 100], [100, 120], [120, 120], [120, 150]])
            })
            
            map.loadMap(regionId, floorId);
        }, null)
    }


    idrCoreMgr.init();
});