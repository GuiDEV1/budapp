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

    if($data){
        $query_budget = "SELECT * FROM budgets WHERE idUser=:idUser";
        $result_budget = $conn->prepare($query_budget);
        $result_budget->bindParam(':idUser', $data['idUser']);
        $result_budget->execute();

        if(($result_budget) AND ($result_budget->rowCount() != 0)) {
            $row_budget = $result_budget->fetchAll(PDO::FETCH_ASSOC);

            $response = [
                "erro" => false,
                "Message" => "return all budgets",
                "budgets" => $row_budget
            ];

           
        } else {
            $response = [
                "erro" => true,
                "Message" => "failed to restore products"
            ];
           
        }


    }else {
        $response = [
            "erro" => true,
            "Message" => "failed to restore products",
        ];
    }

 
    http_response_code(200);
    echo json_encode($response);

?>