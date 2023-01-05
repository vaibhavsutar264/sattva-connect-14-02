<?php
$file = $_GET['file'];
header("Content-disposition: attachment; filename=meditation_audio.mp3");
header("Content-type: application/mp3:");
readfile($file);
?>