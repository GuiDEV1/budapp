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
        $select_budget = "SELECT * FROM budgets WHERE name=:name AND idUser=:idUser";
        $budget = $conn->prepare($select_budget);
        $budget->bindParam(':name', $data['name']);
        $budget->bindParam(':idUser', $data['idUser']);
        $budget->execute();

        if(($budget) AND ($budget->rowCount() != 0)) {
            $verify_new_name = "SELECT name FROM budgets WHERE name=:newName AND idUser=:idUser";
            $new_name = $conn->prepare($verify_new_name);
            $new_name->bindParam(':newName', $data['newName']);
            $new_name->bindParam(':idUser', $data['idUser']);
            $new_name->execute();


            if(($new_name->rowCount() == 0) || ($data['newName'] == $data['name'])){
                if($data['newClient'] != '') {
                    $set_clientBudget = "UPDATE budgets SET client=:newClient WHERE name=:name";
                    $set_client = $conn->prepare($set_clientBudget);
                    $set_client->bindParam(':newClient', $data['newClient']);
                    $set_client->bindParam(':name', $data['name']);
                    $set_client->execute();
                }
    
                if($data['newDesc'] != '') {
                    $set_descBudget = "UPDATE budgets SET description=:newDesc WHERE name=:name";
                    $set_desc = $conn->prepare($set_descBudget);
                    $set_desc->bindParam(':newDesc', $data['newDesc']);
                    $set_desc->bindParam(':name', $data['name']);
                    $set_desc->execute();
                }
    
                if($data['newStartDate'] != '') {
                    $set_startDateBudget = "UPDATE budgets SET startDate=:newStartDate WHERE name=:name";
                    $set_startDate = $conn->prepare($set_startDateBudget);
                    $set_startDate->bindParam(':newStartDate', $data['newStartDate']);
                    $set_startDate->bindParam(':name', $data['name']);
                    $set_startDate->execute();
                }
    
                if($data['newFinalDate'] != '') {
                    $set_finalDateBudget = "UPDATE budgets SET finalDate=:newFinalDate WHERE name=:name";
                    $set_finalDate = $conn->prepare($set_finalDateBudget);
                    $set_finalDate->bindParam(':newFinalDate', $data['newFinalDate']);
                    $set_finalDate->bindParam(':name', $data['name']);
                    $set_finalDate->execute();
                }

                if($data['newValue'] != '') {
                    $set_newValueBudget = "UPDATE budgets SET value=:newValue WHERE name=:name";
                    $set_value = $conn->prepare($set_newValueBudget);
                    $set_value->bindParam(':newValue', $data['newValue']);
                    $set_value->bindParam(':name', $data['name']);
                    $set_value->execute();
                }

                if($data['newName'] != '') {
                    $set_newNameBudget = "UPDATE budgets SET name=:newName WHERE name=:name";
                    $set_name = $conn->prepare($set_newNameBudget);
                    $set_name->bindParam(':newName', $data['newName']);
                    $set_name->bindParam(':name', $data['name']);
                    $set_name->execute();
                }
    
                $response = [
                    "erro" => false,
                    "Message" => "Changes made successfully",
                ];

            }else {
                $response = [
                    "erro" => true,
                    "Message" => "This name has already been used",
                ];
            }
          
        }else {
            $response = [
                "erro" => true,"Message" => "invalid information",
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