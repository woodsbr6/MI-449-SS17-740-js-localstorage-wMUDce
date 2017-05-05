function toggleNightMode () {
  if (nightLight.className === 'daymode') {
    nightLight.className = 'nightmode'
  } else {
    nightLight.className = 'daymode'
  }
  window.localStorage.setItem('bodyClass', nightLight.className)
}

var nightLight = document.getElementById('nightLight')
var bodyClass = window.localStorage.getItem('bodyClass')
if (bodyClass !== null) {
  nightLight.className = bodyClass
} else {
  nightLight.className = 'daymode'
}

var button = document.getElementById('themeBut')
button.addEventListener('click', toggleNightMode)
