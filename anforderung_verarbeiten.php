<!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>
    <div class="status-container">
 

        <div class="progress-bar-container">
            <p>Status: <span id="status">In Bearbeitung</span></p>
            <div class="progress-bar">
                <span style="width: 10%;"></span>
            </div>
        </div>

       
        <a href="auftrag_abgebrochen.html" class="cancel-button">Auftrag abbrechen</a>
    </div>

    <script>
      
const progress = 50;
const progressBar = document.getElementById('progress-bar');
progressBar.style.width = `${progress}%`;



       
        if (progress === 100) {
            statusText.innerText = 'Abgeschlossen';
        } else if (progress === 0) {
            statusText.innerText = 'Warten auf Start';
        } else {
            statusText.innerText = 'In Bearbeitung';
        }
    </script>
</body>
</html>

