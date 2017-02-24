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
    }

    function filterbeacons(beacons) {

        var newBeacons = new Array();

        for (var i = 0; i < beacons.length; ++i) {

            var beacon = beacons[i];

            if (beacon.rssi != 0) {

                var val = {
                            'accuracy':beacon.accuracy,
                            'major':beacon.major,
                            'minor':beacon.minor,
                            'rssi':beacon.rssi
                          };

                newBeacons.push(val);
            }
        }

        return newBeacons;
    }

    idrLocateServer.prototype.start = function (regionId, floorId, callBack) {

        this.floorId = floorId;

        this.regionId = regionId;

        this.beaconsMgr.onBeaconReceiveFunc = onReceiveBeacons;

        this.didLocateSuccessFunc = callBack;

        this.beaconsMgr.init();

        var that = this;

        function onReceiveBeacons(beacons) {

            var newBeacons = filterbeacons(beacons);

            var beaconParas = JSON.stringify(newBeacons);

            onServerLocate(beaconParas);
        }

        function onServerLocate(beacons) {

            var domain = 'http://wx.indoorun.com';

            var url = domain + '/locate/locating';

            var data = {
                'beacons': beacons,
                'gzId': 'ewr2342342',
                'openId': 'wx_oBt8bt-1WMXu67NNZI-JUNQj6UAc',
                'OSType': 'Android',
                'regionId': that.regionId,
                'floorId': that.floorId,
                'appId': gv.appId,
                'clientId': gv.clientId,
                'sessionKey': gv.sessionKey
            };

            console.log(data);

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

                    onLocateSuccess(1, 100, 100);
                },

                error: function (str) {


                }
            });
        }

        function onLocateSuccess(valid, posx, posy) {

            that.x = posx;

            that.y = posy;

            that.valid = valid;
        }
    }

    module.exports = idrLocateServer;
});