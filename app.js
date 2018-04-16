document.getElementById('btn').addEventListener('click', loadImg);

function loadImg(e) {

  const xhr = new XMLHttpRequest();

  var e = document.getElementById("list");

  var strUser = e.options[e.selectedIndex].value;

  xhr.open('GET', `http://48hour.bigbox.info/testing/getLogo.php?logo=${strUser}`, true);

  xhr.onload = function() {

    if(this.status ===200) {

      let data = JSON.parse(this.responseText);

      let output = `<img src="${data.result}">`;

      document.getElementById('container').innerHTML = output;

    }
    
  }
  
  xhr.send();
}




