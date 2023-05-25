<?php 
    //headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    //header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
  
    //include connection
    include_once 'connection.php';

    //get information from user to login
    $response_json = file_get_contents("php://input");
    $data = json_decode($response_json, true);

    $query_user = "SELECT * FROM userauth WHERE email=:email AND password=:password";
    $result_user = $conn->prepare($query_user);
    $result_user->bindParam(':email', $data['email']);
    $result_user->bindParam(':password', $data['password']);
    $result_user->execute();

    if(($result_user) AND ($result_user->rowCount() != 0)){
        $row_user = $result_user->fetch(PDO::FETCH_ASSOC);
        extract($row_user);
        $user = [
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'profile' => $profile
        ];

        $response = [
            "erro" => false,
            "user" => $user,
            "Message" => "user authenticated successfully"
        ];

    }else {
        $response = [
            "erro" => true,
            "Message" => "User data is not valid",
        ];
    }

    http_response_code(200);
    echo json_encode($response);

?>