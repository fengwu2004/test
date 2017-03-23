/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrMapView', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrCoreManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrDataManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrNetworkManager'], function (idrmapView, idrCoreMgr, idrDataMgr, networkInstance) {

    var regionId = '14633645971891335'

    var floorId = '14633645973301472'

    zip.workerScriptsPath = 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/zip/'

    function unzipBlob(blob, callback) {

        var blobreader = new zip.Data64URIReader(blob)

        zip.createReader(blobreader, function(zipReader) {

            zipReader.getEntries(function(entries) {

                entries[0].getData(new zip.BlobWriter("text/plain"), function(data) {

                    zipReader.close();

                    callback(data);
                });
            });
        }, onerror);
    }

    idrCoreMgr.loadSessionSuccess = function () {

        networkInstance.serverCallRegionPath('14633645971891335', function(data) {

            // var decodedData = window.atob(data);

            unzipBlob(data, function(jsonData) {

                console.log(jsonData)

                var decodedData = window.atob(jsonData);

                console.log(decodedData)
            })

        }, null)

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