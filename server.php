<?php

;
$diskList = json_decode(file_get_contents('./dischi.json'));


header("Content-Type: application/json");


echo json_encode($diskList);

?>