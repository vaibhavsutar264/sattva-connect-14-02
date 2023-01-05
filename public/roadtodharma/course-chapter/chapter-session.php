<?php 
session_start();
$_SESSION["auth"] = 'true';
$chapter = $_GET['chapterUrl'];
print_r($_SESSION['auth']);
if(!empty($chapter)){
	header("Location: https://www.sattvaconnect.com/roadtodharma/course-chapter/".$chapter);
}else{
	header("Location: https://www.sattvaconnect.com/roadtodharma/");
}
?>