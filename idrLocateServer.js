/**
 * Created by yan on 23/02/2017.
 */


define(function (require, exports, module) {

    var gv = require('./global');

    var BeaconMgr = require('./BeaconMgr');

    function idrLocateServer() {

        this.floorId = '';

        this.regionId = '';

        this.x = 0;

        this.y = 0;

        this.beaconsMgr = new BeaconMgr();

        this.didLocateSuccessFunc = '';
    }

    function filterbeacons(beacons) {

        var newBeacons = new Array();

        for (var i = 0; i < beacons.length; ++i) {

            var beacon = beacons[i];

            if (beacon.rssi != 0) {

                newBeacons.push(beacon);
            }
        }

        return newBeacons;
    }

    idrLocateServer.prototype.start = function (regionId, floorId) {

        this.floorId = floorId;

        this.regionId = regionId;

        this.beaconsMgr.onBeaconReceiveFunc = this.onReceiveBeacons;

        this.beaconsMgr.init();
    }

    function onLocateSuccess(obj, valid, posx, posy) {

        if (valid) {

            obj.x = posx;

            obj.y = posy;

            obj.didLocateSuccessFunc();
        }
    }
    
    idrLocateServer.prototype.onReceiveBeacons = function (beacons) {

        var newBeacons = filterbeacons(beacons);

        var that = this;

        onServerLocate(that, newBeacons);
    }

    function onServerLocate(obj, beacons) {

        var domain = 'http://wx.indoorun.com';

        var url = domain + '/locate/locating';

        var data = {
            'beacons': beacons,
            'gzId': 'ewr2342342',
            'regionId': obj.regionId,
            'floorId': obj.floorId,
            'appId': gv.appId,
            'clientId': gv.clientId,
            'sessionKey': gv.sessionKey
        };

        jsLib.ajax({

            type:'post',

            dataType: 'jsonp',

            url: url, //添加自己的接口链接

            data: data,

            timeOut: 100000,

            before: function () {
                // console.log("before");
            },

            success: function (str) {

                onLocateSuccess(obj, 1, 100, 100);
            },

            error: function (str) {


            }
        });
    }

    module.exports = idrLocateServer;
});