<?php 
    //headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");

    //include connection
    include_once 'connection.php';


    //get information from user
    $response_json = file_get_contents("php://input");
    $data = json_decode($response_json, true);

    if($data){
        $select_user = "SELECT * FROM userauth WHERE id=:id AND password=:password";
        $user = $conn->prepare($select_user);
        $user->bindParam(':id', $data['id']);
        $user->bindParam(':password', $data['currentPassword']);
        $user->execute();

        if(($user) AND ($user->rowCount() != 0)) {
            $set_user_password = "UPDATE userauth SET password=:newPassword WHERE id=:id";
            $intert_password = $conn->prepare($set_user_password);

            $intert_password->bindParam(':newPassword', $data['newPassword']);
            $intert_password->bindParam('id', $data['id']);
            $intert_password->execute();

            $response = [
                "erro" => false,
                "Message" => "password changed successfully",
            ];

        }else {
            $response = [
                "erro" => true,
                "Message" => "current password is invalid",
            ];
        }
    } else {
        $response = [
            "erro" => true,
            "Message" => "invalid information",
        ];
    }

    //response code
    http_response_code(200);

    //response json
    echo json_encode($response);

?>