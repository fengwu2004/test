/**
 * Created by yan on 23/02/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/test/idrLocateServer'], function (idrLocateServer) {

    var locator = new idrLocateServer();

    locator.start('14428254382730015', '14428254382890016', didLocateSuccess);

    function didLocateSuccess() {

        console.log('hello, locate success');
    }
});