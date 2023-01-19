console.log("initialized loading")

$.ajax({
   method: 'GET',
   url: 'https://script.google.com/macros/s/AKfycbyOjZudRkEE45f-mW2umY6_HKOeeGQCItzTJ4MGLhoZWLDhqIv5FtArn6-iai7SinfE/exec',
   success: function (response) {
      array = response.user
      buildTable(array)
      console.log(array)
   }
})


function buildTable(data) {
   var table = document.getElementById('table')

   for (var i = 0; i < data.length; i++) {
      var row =
         `<tr>
      <td>${data[i].Number}</td>
      <td>${data[i].Name}</td>
      <td>${data[i].Score}</td>
    </tr>`

      table.innerHTML += row

      document.getElementById('loading').style.display = "none"
   }
}
