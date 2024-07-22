// JavaScript Document


  function showmenu() {
    var menuOverlay = document.getElementById('menuoverlay');
    if (menuOverlay.style.display === 'none' || menuOverlay.style.display === '') {
      menuOverlay.style.display = 'block';
    } else {
      menuOverlay.style.display = 'none';
    }
  }

function hidemenu() {
    var menuOverlay = document.getElementById('menuoverlay');
    if (menuOverlay.style.display === 'block' || menuOverlay.style.display === '') {
      menuOverlay.style.display = 'none';
    } else {
      menuOverlay.style.display = 'none';
    }
  }
