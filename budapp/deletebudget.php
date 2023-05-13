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

        if($result_budgets->rowCount() != 0) {
            $query_del_budgets = "DELETE FROM budgets WHERE name=:name and idUser=:idUser";
            $delete_budgets = $conn->prepare($query_del_budgets);

            $delete_budgets->bindParam(':name', $data['name']);
            $delete_budgets->bindParam(':idUser', $data['idUser']);
            $delete_budgets->execute();
            $response = [
                "erro" => false,
                "Message" => "successfully deleted",
            ];
            
        } else {
            $response = [
                "erro" => true,
                "Message" => "The product does not exist in the system",
            ];
        }
        

    }else {
        $response = [
            "erro" => true,
            "Message" => "The product does not exist in the system",
        ];
    }

 
    http_response_code(200);
    echo json_encode($response);

?>