<?php

if (isset($_POST['data'])) {
    //extract data
    $data = json_decode($_POST['data'], true);

    //dev
    $db = new mysqli('localhost', 'root', '', 'dmp') or die(mysqli_error($conn));

    //release 
    //$db = new mysqli('localhost', 'i100603_laurens', '10522848', 'i100603_laureato') or die(mysqli_error($conn));

    //keys

    $momentKey = "moment";
    $emotionKey = "emotion";
    $pressureListKey = "pressureList";
    $concequenceListKey = "concequenceList";
    $needListKey = "needList";
    $instrumentalValueListKey = "instrumentalValueList";
    $terminalValueListKey = "terminalValueList";
    $factorListKey = "factorList";
    $coverageGradeKey = "coverageGrade";
    $coverageRemarksKey = "coverageRemarks";
    $usabilityGradeKey = "usabilityGrade";
    $usabilityRemarksKey = "usabilityRemarks";
    $feedbackKey = "feedback";
    $moreValuesClickCountKey = "moreValuesClickCount";

    //data
    $id = uniqid();
    $moment = $db->real_escape_string(json_encode($data[$momentKey]));
    $emotion = $db->real_escape_string(json_encode($data[$emotionKey]));
    $pressureList = $db->real_escape_string(json_encode($data[$pressureListKey]));
    $concequenceList = $db->real_escape_string(json_encode($data[$concequenceListKey]));
    $needList = $db->real_escape_string(json_encode($data[$needListKey]));
    $instrumentalValueList = $db->real_escape_string(json_encode($data[$instrumentalValueListKey]));
    $terminalValueList = $db->real_escape_string(json_encode($data[$terminalValueListKey]));
    $factorList = $db->real_escape_string(json_encode($data[$factorListKey]));
    $coverageGrade = $db->real_escape_string(json_encode($data[$coverageGradeKey]));
    $coverageRemarks = $db->real_escape_string(json_encode($data[$coverageRemarksKey]));
    $usabilityGrade = $db->real_escape_string(json_encode($data[$usabilityGradeKey]));
    $usabilityRemarks = $db->real_escape_string(json_encode($data[$usabilityRemarksKey]));
    $feedback = $db->real_escape_string(json_encode($data[$feedbackKey]));
    $moreValuesClickCount = $db->real_escape_string(json_encode($data[$moreValuesClickCountKey]));

    // echo json_encode($valuationList);
    // echo json_encode($experienceList);
    // echo json_encode($personalStrengthList);
    // echo json_encode($feedback);

    $db->query("INSERT INTO experiment2 (id, moment, emotion, pressureList, concequenceList, needList, instrumentalValueList, terminalValueList, factorList, coverageGrade, coverageRemarks, usabilityGrade, usabilityRemarks, feedback, moreValuesClickCount) 
            VALUES ('$id', '$moment', '$emotion', '$pressureList', '$concequenceList', '$needList', '$instrumentalValueList', '$terminalValueList', '$factorList', '$coverageGrade', '$coverageRemarks', '$usabilityGrade', '$usabilityRemarks', '$feedback', '$moreValuesClickCount')") 
            or die($db->error);
}

?>

