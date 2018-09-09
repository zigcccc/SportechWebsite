<?php
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/x-www-form-urlencoded');
  require('vendor/autoload.php');
  require('mailchimp/Mailchimp.php');
  require_once('generateEmail.php');

  $mailchimp_api_key = getenv(MAILCHIMP_API_KEY);
  $mailchimp_list_id = "6e466f85f5";
  $sendgrid_api_key = getenv(SENDGRID_API_KEY);

  if (empty($_POST)) {
    http_response_code(405);
    echo 'No data was submitted...';
    die();
  }

  $name = strip_tags(trim($_POST['full_name']));
  $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
  $phone = strip_tags(trim($_POST['phone']));
  $age = strip_tags(trim($_POST['age']));
  $nameArr = explode(" ", $name);


  if (empty($name) OR empty($email) OR empty($phone)) {
    http_response_code(400);
    echo json_encode(["error" => "Missing params..."]);
    die();
  }

  $data = array(
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "age" => $age
  );

  $responseEmailContent = generateEmail('response', $data);
  $notifyEmailContent = generateEmail('notify_owners', $data);

  // Mailchimp
  $mailchimp = new Mailchimp($mailchimp_api_key);
  $mailchimp_lists = new Mailchimp_Lists($mailchimp);

  // Sendgrid
  $responseEmail = new \SendGrid\Mail\Mail();
  $responseEmail->setFrom("prijave@sportech.si", "Ekipa Sportech");
  $responseEmail->setSubject("Prijava na tekmovanje Sportech");
  $responseEmail->addTo($email, $name);
  $responseEmail->addTo("zkrasovec@gmail.com", "Ziga Krasovec");
  $responseEmail->addContent(
    "text/html", $responseEmailContent
  );

  $notifyEmail = new \SendGrid\Mail\Mail();
  $notifyEmail->setFrom("web@sportech.si", "Webmaster Sportech.si");
  $notifyEmail->setSubject("Prijava tekmovalca");
  $notifyEmail->addTo('prijave@sportech.si', 'Prijave Sportech');
  $notifyEmail->addTo("zkrasovec@gmail.com", "Ziga Krasovec");
  $notifyEmail->addContent(
    "text/html", $notifyEmailContent
  );
  
  $sendgrid = new \SendGrid($sendgrid_api_key);

  try {
    $subscriber = $mailchimp_lists->subscribe(
      $mailchimp_list_id,
      ['email' => $email],
      ['FNAME' => $nameArr[0], 'LNAME' => $nameArr[1]],
      'text',
      FALSE,
      FALSE
    );
    $res1 = $sendgrid->send($responseEmail);
    $res2 = $sendgrid->send($notifyEmail);
    $message = array(
      'status' => 200,
      'message' => 'Prijava uspešno posredovana!'
    );
    echo json_encode($message);
  } catch (Exception $e) {
    echo json_encode([
      'status' => 406,
      'message' => $e -> getMessage()
    ]);
    http_response_code(406);
  }