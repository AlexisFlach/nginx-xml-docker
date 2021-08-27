var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let res = JSON.parse(xhttp.responseText);
    let users = res.users;

    let output = '';

    for (let i = 0; i < users.length; i++) {
      output += '<li>' + users[i].name + '</i>';
    }
    document.getElementById('users').innerHTML = output;
  }
}

xhttp.open("GET", 'http://localhost:80/api', true)

xhttp.send();

