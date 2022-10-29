<?php

use LDAP\Result;

function sendsms($phoneNumber)
    {
        $token='635c32ac3dc7f:0296ca3b4828f82719d2c2c16';
        $header="Authorization: Bearer {$token}";
        $req=array(
          'method'=>'sendCode',
          'params'=>array(
            "phoneNumber" => $phoneNumber
          )  
        );
        $reqtojson=json_encode($req);
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_HTTPHEADER => array($header),
        CURLOPT_URL => 'https://api.sms5.ru/',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>$reqtojson
        ));
        $response = curl_exec($curl);
        $responseToObj=json_decode($response, true);
        var_dump($responseToObj);
        if($responseToObj["result"]["success"])
         {
          print( "status code 200");
         };

        // if ($responseToObj[])
      };
sendsms(900860011);
      
?>