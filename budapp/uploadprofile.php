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
        $select_user = "SELECT id FROM userauth WHERE id=:id";
        $user = $conn->prepare($select_user);
        $user->bindParam(':id', $data['id']);
        $user->execute();

        if(($user) AND ($user->rowCount() != 0)){
            $set_user_profile = "UPDATE userauth SET profile=:profile WHERE id=:id";
            $intert_profile = $conn->prepare($set_user_profile);

            $intert_profile->bindParam(':profile', $data['profile']);
            $intert_profile->bindParam('id', $data['id']);
            $intert_profile->execute();

            //return new infos user
            $query_user = "SELECT * FROM userauth WHERE id=:id";
            $result_query_user = $conn->prepare($query_user);
            $result_query_user->bindParam(':id', $data['id']);
            $result_query_user->execute();

            if($result_query_user->rowCount() != 0) {
                $row_user = $result_query_user->fetch(PDO::FETCH_ASSOC);
                extract($row_user);
                $update_infos = [
                    'id' => $id,
                    'name' => $name,
                    'email' => $email,
                    'profile' => $profile
                ];
            }
            
            $response = [
                "erro" => false,
                "Message" => "the image has been saved successfully",
                "user" => $update_infos
            ];

        }else {
            $response = [
                "erro" => true,
                "Message" => "invalid file type",
            ];
        }

    } else {
        $response = [
            "erro" => true,
            "Message" => "invalid file type",
        ];
    }

    //response code
    http_response_code(200);

    //response json
    echo json_encode($response);

?>