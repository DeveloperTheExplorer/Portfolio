<?php
  if (isset($_POST['inquiry'])) {
    $subject = "Customer Contact";
    $name = $_POST['name'];
	  $name = addslashes($name);
    $email = $_POST['email'];
    $inquiry = $_POST['inquiry'];
	  $inquiry = addslashes($inquiry);
    $autoReplyEmail = 'business@selfbased.com';
    $companyEmail = 'arvin.ansari68@gmail.com';

    $autoreply = 'Hello, <br/> This is an automated message to let you know that I have received your email and will contact you as soon as possible. Thank you for your time. <br/><br/> Sincerely, <br/> Arvin Ansari, creator and founder of SelfBased.';

    if($autoreply != "" && $autoreply != '<p style="text-align: center;"><span style="font-size: 18pt;">Let your customers know that you have received their Email!</span></p>') {
      // The message
      $message = $autoreply;

      // The headers
      $headers = "From: autoreply@selfbased.com\n";
          $headers .= "MIME-Version: 1.0\n";
          $headers .= "Content-type: text/html; charset=iso-8859-1\n";

      // Send
      mail($email, 'Contact Email Confirmation', $message, $headers);
    }

    $message = '<h2>Subject: '.$subject.'</h2>
								<h2>Name: '.$name.'</h2>
                <h2>Email: '.$email.'</h2>
                <h2>Question: </h2>
                <p>'.$inquiry.'</p>';

    // The headers
    $headers = "From: $autoReplyEmail\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    // Send
    mail($companyEmail, $subject, $message, $headers);

    echo 'success';
    exit();

  }
?>
