<?php
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $date = $_POST['date'];
    $mail = $_POST['mail'];
    $genre = $_POST['genre'];
    $promo = $_POST['promo'];
    $auth_password = $_POST['auth_password'];
    $password = $_POST['password'];
    $checkbox = $_POST['checkbox'];
    
    $conn = new mysqli('localhost','root','','inscription');
    if($conn->connect_error){
        die('Error connecting to:'.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(nom, prenom, date, mail, genre, auth_password, password, checkbox) values(?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("sssss", $nom, $prenom, $mail, $auth_password, $password);
        $stmt->execute();
        echo "Enregistrement réussi... ";
        $stmt-> close();
        $conn->close();
    }
?> 