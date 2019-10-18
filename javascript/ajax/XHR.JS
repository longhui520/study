var xhr; if (window.XMLHttpRequest) {　 // Mozilla, Safari... 
    xhr = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
    // IE 　
    try { xhr = new ActiveXObject('Msxml2.XMLHTTP'); }
    catch (e) { try { xhr = new ActiveXObject('Microsoft.XMLHTTP'); } catch (e) { } }
} if (xhr) {
xhr.onreadystatechange = onReadyStateChange; xhr.open('POST', '/api', true);
    // 设置 Content-Type 为 application/x-www-form-urlencoded 　 // 以表单的形式传递数据 　
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); xhr.send('username=admin&password=root');
}
// onreadystatechange 方法 
function onReadyStateChange() {
    // 该函数会被调用四次 　
    console.log(xhr.readyState); if (xhr.readyState === 4) {

        // everything is good, the response is received 　　
        if (xhr.status === 200) { console.log(xhr.responseText); } else { console.log('There was a problem with the request.'); }
    } else {
        // still not ready 　　
        console.log('still not ready...');
    }
}
