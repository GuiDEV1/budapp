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

   
    if($data) {

        $existence_user = "SELECT email FROM userauth WHERE email=:email";
        $result_existence = $conn->prepare($existence_user);
        $result_existence->bindParam(':email', $data['email']);
        $result_existence->execute();

        if($result_existence->rowCount() == 0) {
            $query_user = "INSERT INTO userauth (name, email, password) VALUES (:name, :email, :password)";
            $cad_user = $conn->prepare($query_user);

            $cad_user->bindParam(':name', $data['name']);
            $cad_user->bindParam(':email', $data['email']);
            $cad_user->bindParam(':password', $data['password']);

            $cad_user->execute();

            if($cad_user->rowCount()){
                $query_new_user = "SELECT * FROM userauth WHERE email=:email";
                $result_query_new_user = $conn->prepare($query_new_user);
                $result_query_new_user->bindParam(':email', $data['email']);
                $result_query_new_user->execute();

                if($result_query_new_user->rowCount() != 0) {
                    $row_new_user = $result_query_new_user->fetch(PDO::FETCH_ASSOC);
                    extract($row_new_user);
                    $new_user = [
                        'id' => $id,
                        'name' => $name,
                        'email' => $email,
                        'profile' => $profile,
                    ];
                
                    $response = [
                        "erro" => false,
                        "Message" => "User registered successfully",
                        "user" => $new_user
                    ];
                }

                
                
            }else {
                $response = [
                    "erro" => true,
                    "Message" => "User data is not valid",
                ];
            }
        }else {
            $response = [
                "erro" => true,
                "Message" => "Usuário já existe no sistema",
            ];
        }

    
    }else {
        $response = [
            "erro" => true,
            "Message" => "User data is not valid",
        ];
    }

     //response code
     http_response_code(200);

     //response json
     echo json_encode($response);

?>