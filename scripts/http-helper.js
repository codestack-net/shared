function getUrlParameter(url, paramName) {

    var params = decodeURIComponent(url).split('?')[1];
    var urlVars = params.split('&');
        

    for (var i = 0; i < urlVars.length; i++) {
        var curParam = urlVars[i].split('=');

        if (curParam[0] === paramName) {
            var paramVal = curParam[1];
            return paramVal === undefined ? true : paramVal;
        }
    }
};

function createHttpRequest(fileName) {
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", fileName, false);
    return xhttp;
}

function loadTextDoc(fileName) {
    var xhttp = createHttpRequest(fileName);

    xhttp.send("");
    return xhttp.responseText;
}

function loadXMLDoc(fileName) {

    var xhttp = createHttpRequest(fileName);
    try {
        xhttp.responseType = "msxml-document"
    } catch (err) { }

    xhttp.send("");
    return xhttp.responseXML;
}