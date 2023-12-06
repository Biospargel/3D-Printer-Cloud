<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $uploadDirectory = "uploads/";
    $allowedFileTypes = ["stl", "obj", "stp"];
    $maxFileSize = 15 * 1024 * 1024;

    $file = $_FILES["file"];
    $fileName = $file["name"];
    $fileTmpName = $file["tmp_name"];

    if ($file["size"] <= $maxFileSize && in_array(pathinfo($fileName, PATHINFO_EXTENSION), $allowedFileTypes)) {
        $timestamp = time();
        $newFileName = $timestamp . "_" . $fileName;

        $printer = $_POST["printer"];
        $filament = $_POST["filament"];
        $color = $_POST["color"];

        if ($fileTmpName) {
            $destination = $uploadDirectory . $newFileName;

            if (move_uploaded_file($fileTmpName, $destination)) {
                header("Location: status_anzeigen.html?material=$filament&drucker=$printer&datei=$newFileName&timestamp=$timestamp");
                exit;
            }
        }
    }
   
    header("Location: fehlerseite.html");
    exit;
}
?>
