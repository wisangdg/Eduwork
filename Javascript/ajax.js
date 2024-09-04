function doLogin() {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://eot6cxxjsekvfha.m.pipedream.net");
    ajax.onload = function() {
        const response = document.getElementById("response");
        response.innerText = ajax.responseText;
    };

    ajax.setRequestHeader("Content-Type", "application/json");
    const json = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    ajax.send(JSON.stringify(json));
}

document.getElementById("login").onclick = doLogin;