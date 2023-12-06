<?php
$uploadFolder = 'uploads/';
$files = scandir($uploadFolder, SCANDIR_SORT_DESCENDING);

if (!empty($files[0])) {
    $latestFile = $files[0];
    echo json_encode(['success' => true, 'latestFile' => $latestFile]);
} else {
    echo json_encode(['success' => false, 'message' => 'No files found in the "uploads" folder.']);
}
?>
