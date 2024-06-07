<?php
require 'vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;

$jsonData = file_get_contents('assets/json/album.json');
$data = json_decode($jsonData, true);
$randomAlbum = $data['albums'][array_rand($data['albums'])];
$imagePath = $randomAlbum['cover'];
$imageFullPath = $imagePath;

if (file_exists($imageFullPath)) {
    $pixelationLevels = [30, 20, 10, 5, 2, 0]; 
    foreach ($pixelationLevels as $index => $pixelationLevel) {
        $image = Image::make($imageFullPath); 
        $image->resize(500, 500);
        $image->pixelate($pixelationLevel);
        $tempImageFile = "temp_image_$index.jpg";
        $image->save($tempImageFile);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musicdle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="image-container">
            <h1>Trouve la cover</h1>
            <img id="coverImage" src="temp_image_0.jpg"> 
        </div>
        <div class="album-info hidden">
            <?=$randomAlbum['artiste']?><br>
            <?=$randomAlbum['nom']?>
        </div>
        <div id="textInputContainer">
            <input type="text" id="textInput" placeholder="Votre réponse...">
            <button id="validateButton">Valider</button>
        </div>
        <input type="hidden" id="albumName" value="<?=$randomAlbum['nom']?>">
        <div id="displayTextContainer"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
