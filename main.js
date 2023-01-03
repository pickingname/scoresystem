function buildTable(e){for(var t=document.getElementById("table"),n=0;n<e.length;n++){var r=`<tr>\n      <td>${e[n].Number}</td>\n      <td>${e[n].Name}</td>\n      <td>${e[n].Score}</td>\n    </tr>`;t.innerHTML+=r,document.getElementById("loading").style.display="none"}}$.ajax({method:"GET",url:"https://script.google.com/macros/s/AKfycbyOjZudRkEE45f-mW2umY6_HKOeeGQCItzTJ4MGLhoZWLDhqIv5FtArn6-iai7SinfE/exec",success:function(e){array=e.user,buildTable(array),console.log(array)}});

// score change countdown yooooooo ARCHIVED
/*
var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime(); // change the time now

var x = setInterval(function() {
  
  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); //Meth
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //Meth
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //Meth
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); //Meth
    
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Your Score Have Chance To Be changed by now.";
  }
}, 1000);
*/