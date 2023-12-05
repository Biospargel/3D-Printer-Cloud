
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