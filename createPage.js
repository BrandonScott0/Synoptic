chrome.browserAction.onClicked.addListener(function () {

    var w = 850; //USED AS WIDTH OF WINDOW TO OPEN CENTRE SCREEN
    var h = 650; //USED AS HEIGHT OF WINDOW TO OPEN CENTRE SCREEN
    var leftPosition = (screen.width) ? (screen.width - w) / 2 : 0; //USED TO OPEN SCREEN CENTRE
    var topPosition = (screen.height) ? (screen.height - h) / 2 : 0; //USED TO OPEN SCREEN CENTRE

    window.open("/html/firstPage.html", "mywin", "width=" + w + ",height=" + h + ", left=" + leftPosition + ", top=" + topPosition); //OPENS WINDOW WITH POSITION AND HEIGHT/WIDTH PARAMETERS

});