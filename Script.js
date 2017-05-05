function toggleNightMode () {
  var color = document.getElementById('nightLight').style.color
  var backgroundColor = document.getElementById('nightLight').style.backgroundColor
  if (color === 'black' && backgroundColor === 'white') {
    document.getElementById('nightLight').style.color = 'white'
    document.getElementById('nightLight').style.backgroundColor = 'black'
  } else {
    document.getElementById('nightLight').style.color = 'black'
    document.getElementById('nightLight').style.backgroundColor = 'white'
  }
}
var nightLight = window.localStorage.getItem('nightLight')

   // If no firstName was previously saved...
   if (nightLight === null) {
     // Ask the user for their first name
     color = window.prompt('Night!')
     if (color === null) {
       backgroundColor = 'Day'
     } else {
       window.localStorage.setItem('Night', 'Day')
     }
   }
