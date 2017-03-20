/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrMapView', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrCoreManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrDataManager'], function (idrmapView, idrCoreMgr, idrDataMgr) {

    var regionId = '14633645971891335'

    var floorId = '14633645973301472'

    idrCoreMgr.loadSessionSuccess = function () {

        idrDataMgr.loadRegionInfo(regionId, function () {

            var map = new idrmapView();

            map.setLoadMapFinishCallback(function() {

                map.setCurrPos(130, 100, true)

                map.showPath([{x:11, y:22}, {x:100, y:120}, {x:120, y:120}, {x:120, y:150}])
            })
            
            map.loadMap(regionId, floorId);
        }, null)
    }


    idrCoreMgr.init();
});