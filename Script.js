function toggleNightMode () {
  if (nightLight.className == 'daymode') {
      nightLight.className = 'nightmode'
  } else {
    nightLight.className = 'daymode'
  }
}
var button = document.getElementById('themeBut')
button.addEventListener('click', toggleNightMode)
//   var nightLight = window.localStorage.getItem('nightLight')
//   if (nightLight === null) {
//     nightLight = window.prompt('nightLight')
//   } else {
//     window.localStorage.setItem('toggleNightMode')
//   }
// }

//     if(typeof(Storage) !== "undefined") {
//         if (localStorage.toggleNightMode) {
//             localStorage.toggleNightMode = Number(localStorage.toggleNightMode)+1
//         } else {
//             localStorage.toggleNightMode = 1
//         }
//         document.getElementById("nightLight").innerHTML = "You have clicked the button " + localStorage.toggleNightMode + " time(s)."
//     } else {
//         document.getElementById("nightLight").innerHTML = "#"
// } }
