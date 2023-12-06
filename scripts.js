
function submitForm(event) {
    event.preventDefault();

    const datei = document.getElementById('datei').files[0];
    const material = document.getElementById('material').value;
    const drucker = document.getElementById('drucker').value;

 i
    if (!datei) {
        alert('Bitte wählen Sie eine Datei aus.');
        return;
    }


    if (material === '' || drucker === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }


    console.log('Formulardaten:', {
        datei: datei,
        material: material,
        drucker: drucker
    });

    alert('Formular erfolgreich gesendet!');
}

// Bootstrap: Aktivieren Sie alle Popovers und Tooltips
$(function () {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
});

document.getElementById('backButton').addEventListener('click', function() {
  goBack();
});

function goBack() {
  window.history.back();
}
//Menu
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
document.addEventListener('DOMContentLoaded', function () {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  // "Rechtliches"-Button hinzugefügt
  var rechtlichesButton = document.getElementById("rechtlichesButton");
  if (rechtlichesButton) {
    rechtlichesButton.addEventListener("click", function () {
      openNav(); // Öffnet das Sidepanel
    });
  }

  // Schließt das Sidepanel, wenn der "Rechtliches"-Button im Panel gedrückt wird
  var closeBtnInsidePanel = document.querySelector(".sidepanel .closebtn");
  if (closeBtnInsidePanel) {
    closeBtnInsidePanel.addEventListener("click", function () {
      closeNav();
    });
  }
});
