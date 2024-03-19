function showInput(e) {
    e.preventDefault();
    var output_info = document.getElementById("myform");
    var display = document.getElementById("display");
    var data = output_info.querySelectorAll("input:not([type=submit]), select");
    for (var i = 0; i < data.length; i++) {
      display.innerHTML += data[i].name + ": " + data[i].value + "<br>"
    }
  }
