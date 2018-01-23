<?php
$m = "New Customer Inquiry:";
$m .="\nName: ";
$m .= $_POST['name'];
$m .="\nEmail: ";
$m .= $_POST['email'];
$m .="\nMessage: ";
$m .= $_POST['message'];
$c = $_POST['name'];
$c .= ",";
$c .="\nThanks for the email! We will read it and get back to you within a business day. We look forward to assisting you with all your tech needs.";
$c .= "\nTalk to You Soon,";
$c.= "\n<Clarke></Computing>";
mail("zakeryt@zakeryclarke.com","New Customer Inquiry",$m);
mail($_POST['email'],"Welcome to <Clarke></Computing>",$c);
header( 'Location: http://zakeryclarke.com/?form=completed' ) ; 
?>
