/**
 * Created by yan on 09/02/2017.
 */

define(function (require, exports, module) {

    var gv = require('./idrCoreManager');

    require('./alloy_finger');

    var AlloyFinger = window.AlloyFinger;

    var Matrix3 = require('./matrix3');

    function idrmap() {

        this.af = null;

        this.svgFrame = null;

        this.svgMap = null;

        this.units = [];

        this.iniScale = 1;

        this.regionId = '';

        this.floorId = '';

        this.initAngle = 0;
    }

    idrmap.prototype.loadMap = function (regionId, floorId) {

        var that = this;

        var str = 'appId=' + gv.appId + '&clientId=' + gv.clientId + '&time=' + gv.time + '&sign=' + gv.sign;

        var url = 'http://wx.indoorun.com/wx/getSvg.html';

        jsLib.ajax({

            type: "get",

            dataType: 'jsonp',

            url: url, //添加自己的接口链接

            data: {
                'regionId': regionId,
                'floorId': floorId,
                'appId': gv.appId,
                'clientId': gv.clientId,
                'sessionKey': gv.sessionKey
            },

            timeOut: 10000,

            before:function () {

            },

            success:function (str) {

                that.createSVGMap(str, regionId, floorId);
            },

            error:function (str) {

                alert('地图数据获取失败!' + str);
            }
        });
    }

    idrmap.prototype.createSVGMap = function(str, regionId, floorId) {

        removePreviousSVG();

        var svg = str.data;

        this.regionId = regionId;

        this.floorId = floorId;

        this.addSvgMap(svg);
    }

    function removePreviousSVG() {

        var svgFrame = document.querySelector('#svgFrame');

        if (svgFrame) {

            var svgBox = document.querySelector('#svgBox');

            var gtext = document.querySelector('#g_txt');

            var lines = document.querySelector('#line');

            svgBox.innerHTML = '';

            gtext.innerHTML = '';

            lines.innerHTML = '';
        }
        else  {

            var oParent = document.createElement('div');

            oParent.id = this.id;

            var svgFrame = document.createElement('div');

            svgFrame.id = 'svgFrame';

            svgFrame.className = 'svg_frame';

            var svgBox = document.createElement('div');

            svgBox.id = 'svgBox';

            svgBox.className = 'svg_box';

            var gText = document.createElement('div');

            gText.id = 'g_txt';

            gText.className = 'gTxt';

            var lines = document.createElement('div');

            lines.id = 'line';

            svgFrame.appendChild(svgBox);

            svgFrame.appendChild(gText);

            svgFrame.appendChild(lines);

            oParent.appendChild(svgFrame);

            document.body.appendChild(oParent);
        }
    }

    function MatrixToStr(mat3) {

        return 'matrix(' + mat3[0] + ',' + mat3[1] + ',' + mat3[3] + ',' + mat3[4] + ',' + mat3[6] + ',' + mat3[7] + ')';
    }

    function onPan(that, ev) {

        that.svgFrame.translateX += ev.deltaX;

        that.svgFrame.translateY += ev.deltaY;
    }

    function onRotate(that, ev) {

        console.log('旋转');

        var x = ev.layerX, y = ev.layerY;

        console.log(x, y);

        // that.svgFrame.translateX += x;
        //
        // that.svgFrame.translateY += y;

        that.svgFrame.rotateZ += ev.angle;

        // that.svgFrame.translateX += -x;
        //
        // that.svgFrame.translateY += -y;
    }

    function onRotate(obj, evt) {

        obj.svgFrame.scaleX = evt.scale;

        obj.svgFrame.scaleY = evt.scale;
    }

    function addGestures(obj) {

        Transform(obj.svgFrame);

        obj.af = new AlloyFinger(obj.svgFrame, {

            rotate: function (evt) {

                onRotate(obj, evt);
            },

            pinch: function (evt) {

                onRotate(obj, evt)
            },

            pressMove: function (evt) {

                onPan(obj, evt);
            },
        });
    }

    idrmap.prototype.addSvgMap = function(svg) {

        this.svgFrame = document.querySelector('#svgFrame');

        this.svgBox = document.querySelector('#svgBox');

        this.svgBox.innerHTML = svg;

        this.svgBox.style.transform = MatrixToStr(this.trans);

        var that = this;

        addGestures(that);

        // addUnits(that);
    }

    function addUnits(obj) {

        var url = 'http://wx.indoorun.com/wx/getUnitsOfFloor.html';

        jsLib.ajax({

            type: "get",

            dataType: 'jsonp',

            url: url, //添加自己的接口链接

            data: {
                'regionId': obj.regionId,
                'floorId': obj.floorId,
                'appId': gv.appId,
                'clientId': gv.clientId,
                'sessionKey': gv.sessionKey
            },

            timeOut: 10000,

            before: function () {

            },
            success: function (str) {

                var data = str;

                if (data != null) {

                    obj.units = data.data;

                    doAddUnits(obj);
                }
            },
            error: function (str) {

                alert('获取unit失败!' + str);
            }
        });
    }

    function doAddUnits(obj) {

        var gtext = document.querySelector('#g_txt');

        var html = '';

        for (var i = 0; i < obj.units.length; ++i) {

            var name = obj.units[i].name;

            var left = 'left:' + obj.units[i].boundLeft + 'px;';

            var top = 'top:' + obj.units[i].boundTop + 'px;';

            html += '<span style="color:blue;' + left + top + '"' + '>' + name + '</span>';
        }

        gtext.innerHTML = html;
    }

    module.exports = idrmap;
})