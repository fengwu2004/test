/**
 * Created by yan on 28/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrMapView', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrCoreManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrDataManager', 'http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/idrNetworkManager'], function (idrmapView, idrCoreMgr, idrDataMgr, networkInstance) {

    var regionId = '14633645971891335'

    var floorId = '14633645973301472'

    function unzipBlob(blob, callback) {
        // use a zip.BlobReader object to read zipped data stored into blob variable
        zip.createReader(new zip.BlobReader(blob), function(zipReader) {
            // get entries from the zip file
            zipReader.getEntries(function(entries) {
                // get data from the first file
                entries[0].getData(new zip.BlobWriter("text/plain"), function(data) {
                    // close the reader and calls callback function with uncompressed data as parameter
                    zipReader.close();
                    callback(data);
                });
            });
        }, onerror);
    }

    idrCoreMgr.loadSessionSuccess = function () {

        networkInstance.serverCallRegionPath('14633645971891335', function(data) {

            var decodedData = window.atob(data);

            unzipBlob(decodedData, function(jsonData) {

                console.log(jsonData)
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