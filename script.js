path_array = window.location.pathname.split('/');
path = path_array[path_array.length - 1];
path = path.replace("page", "");
path = path.replace(".html", "");

if(path=="") path='1';

prev_path = "page" + (parseInt(path) - 1) + ".html";
next_path = "page" + (parseInt(path) + 1) + ".html";
console.log(path);

function prev() {
    top.location.href = prev_path;
}
function next() {
    top.location.href = next_path;
}



function loadFunc() {
    var div = document.createElement('div');
    div.className = "home_link";
    div.innerHTML = "<a href='./index.html'><img src='./img/home.png' class='d-none d-md-block' width='100' alt='В оглавление' title='В оглавление'><img src='./img/home.png' class='d-block d-md-none' width='50' alt='В оглавление' title='В оглавление'></a>";
    if (path != 'index') document.body.appendChild(div);
}

if(window.attachEvent) {
    window.attachEvent('onload', loadFunc);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            yourFunctionName(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = loadFunc;
    }
}