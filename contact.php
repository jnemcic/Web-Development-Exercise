<?php
$section = "contact";
$pageTitle = "Contact";

include("inc/header.php"); ?>

    <div id="contact-form" >
        <div id="form-wrapper">
            <form id="commentform" class="cmxform">
                <h2>Send an <strong>email</strong></h2>

                <div class="fields">
                    <div class="name">
                        <label>* Name:</label><br />
                        <input type="text" id="name" required>
                    </div>
                    <div class="email">
                        <label>* Email:</label><br />
                        <input type="email" id="email" required>
                    </div>
                    <div class="message">
                        <label>Message:</label>
                        <textarea id="message" rows="8"></textarea>
                    </div>
                </div> 

                <div class="button"><button type="submit" class="submit" id="submit" />Send</button></div>
            </form> 
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