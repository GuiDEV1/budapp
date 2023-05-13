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
        $query_budgets = "SELECT name FROM budgets WHERE name=:name";
        $result_budgets = $conn->prepare($query_budgets);
        $result_budgets->bindParam(':name', $data['name']);
        $result_budgets->execute();

        if($result_budgets->rowCount() == 0) {
           $new_budget = "INSERT INTO budgets (name, client, description, startDate, finalDate, value, idUser) VALUES (:name, :client, :description, :startDate, :finalDate, :value, :idUser)";
           $set_budget = $conn->prepare($new_budget);

           $set_budget->bindParam(':name', $data['name']);
           $set_budget->bindParam(':client', $data['client']);
           $set_budget->bindParam(':description', $data['description']);
           $set_budget->bindParam(':startDate', $data['startDate']);
           $set_budget->bindParam(':finalDate', $data['finalDate']);
           $set_budget->bindParam(':value', $data['value']);
           $set_budget->bindParam(':idUser', $data['idUser']);

           $set_budget->execute();

            if($set_budget->rowCount()){
                $response = [
                    "erro" => false,
                    "Message" => "budget registered successfully",
                ];
            }
        } else {
            $response = [
                "erro" => true,
                "Message" => "budget already registered",
            ];
        }

    }else {
        $response = [
            "erro" => true,
            "Message" => "budget already registered",
        ];
    }

 
    http_response_code(200);
    echo json_encode($response);

?>