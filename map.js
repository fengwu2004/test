/**
 * Created by yan on 08/02/2017.
 */

seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/test/global', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/test/idrmap'], function(global, idrmap) {

    //获取微信所需配置信息
    (function () {
        var url = 'http://wx.indoorun.com/wx/getSign.html';

        jsLib.ajax({

            type: "get",

            dataType: 'jsonp',

            url: url, //添加自己的接口链接

            data: {

                'appId': '2b497ada3b2711e4b60500163e0e2e6b'
            },

            timeOut: 10000,

            success: function (data) {

                succ && succ(data);
            },
            error: function (str) {

                console.log(str);
            }
        });

    }(succ));

    function succ(data) {

        console.log(data);

        success(data, loadSessionSuccess, loadSessionFailed)
    }

    function success(obj, succFn, errorFn) {

        if (typeof obj !== 'object' && typeof succFn !== 'function') {

            return;
        }

        global.appId = '2b497ada3b2711e4b60500163e0e2e6b';

        global.clientId = obj.clientId;

        global.time = obj.time;

        global.sign = obj.sign;

        var str = 'appId=' + '2b497ada3b2711e4b60500163e0e2e6b' + '&clientId=' + obj.clientId + '&time=' + obj.time + '&sign=' + obj.sign;

        var url = 'http://wx.indoorun.com/wx/initSession.html?'+ str;

        jsLib.ajax({

            type: "get",

            dataType: 'jsonp',

            url: url, //添加自己的接口链接

            data: {},

            timeOut: 10000,

            before: function () {

                // console.log("before");
            },
            success: function (data) {

                global.sessionKey = data.sessionKey;

                data.code === 'failed' ? (errorFn && errorFn(data)) : succFn && succFn(data);
            },
            error: function (str) {

                console.log(str);

                errorFn && errorFn();
            }
        });
    }

    function loadSessionSuccess(data) {

        var map = new idrmap();

        var regionId = '14794349038400909';

        var floorId = '14794349038710910';

        map.loadMap(regionId, floorId);
    }

    function loadSessionFailed(data) {

    }
});
