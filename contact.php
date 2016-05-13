<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim(filter_input(INPUT_POST,"name",FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST,"email",FILTER_SANITIZE_EMAIL));
    $message = trim(filter_input(INPUT_POST,"message",FILTER_SANITIZE_SPECIAL_CHARS));

if ($name == "" || $email == "" || $message == "") {
        $error_message = "Please fill in the required fields: Name, Email, Message";
    }
if (!isset($error_message) && $_POST["address"] != "") {
    $error_message = "Bad form input";
}
require("inc/phpmailer/class.phpmailer.php");

$mail = new PHPMailer;

if (!isset($error_message) && !$mail->ValidateAddress($email)) {
    $error_message = "Invalid Email Address";
}

if (!isset($error_message)) {
    $email_body = "";
    $email_body .= "Name " . $name . "\n";
    $email_body .= "Email " . $email . "\n";
    $email_body .= "Message " . $message . "\n";
    
    $mail->setFrom($email, $name);
    $mail->addAddress('josipa.nemcic@gmail.com', 'Josipa');

    $mail->isHTML(false);
    
    $mail->Subject = 'Message from ' . $name;
    $mail->Body = $email_body;
    
    if($mail->send()) {
        header("location:contact.php?status=thanks");
        exit;
    }
    $error_message = 'Message could not be sent.';
    $error_message .= 'Mailer Error: ' . $mail->ErrorInfo;
}
}

$section = "contact";
$pageTitle = "Contact";
include("inc/header.php"); 
?>

    <div id="contact-form" >
        <div id="form-wrapper">
            <form id="commentform" class="cmxform" method="post" action="contact.php">
                <h2>Send an <strong>email</strong></h2>
                <?php
                    if (isset($_GET["status"]) && $_GET["status"] == "thanks") {
                    echo "<p>Thanks for the email!</p>";
                    } else {
                        if (isset($error_message)) {
                            echo "<p class='message'>".$error_message . "</p>";
                        } else {
                            echo "<p>If there's any questions feel free to contact me!</p>";
                        }
                ?>
                <div class="fields">
                    <div class="name">
                        <label for="name" id="name">* Name:</label><br />
                        <input type="text" id="name" name="name" value="<?php if (isset($name)) { echo $name; } ?>" required>
                    </div>
                    <div class="email">
                        <label for="email">* Email:</label><br />
                        <input type="email" id="email" name="email" value="<?php if (isset($email)) { echo $email; } ?>" required>
                    </div>
                    <div class="message">
                        <label for="message">* Message:</label>
                        <textarea id="message" name="message" rows="8" required ><?php if (isset($message)) { echo htmlspecialchars($_POST["message"]); } ?></textarea>
                    </div>
                    <div style="display:none">
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address">
                        <p>Please leave this field blank</p>
                    </div>
                </div> 

                <div class="button"><button type="submit" class="submit" id="submit" />Send</button></div>
            </form> 
            <?php } ?>
        </div>
        <div id="form-sidebar">
            <h3>University</h3>
            <p><strong><a href="http://www.mathos.unios.hr/">J. J. Strossmayer University of Osijek</a></strong><br />
            <strong>Department of Mathematics</strong><br />
            Trg Ljudevita Gaja 6<br />
            HR-31000 Osijek</p>

            <h3>Elsewhere</h3>
            <ul>
            <li id="contact-twitter"><a href="https://twitter.com/JosipaNemcic">Twitter</a></li>
            <li id="contact-facebook"><a href="http://www.facebook.com/jnemcic">Facebook</a></li>
            </ul>
        </div>
      </div>

<?php include("inc/footer.php"); ?>