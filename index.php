<?php 
$pageTitle = "Cities of Croatia";
$section = null;


if (isset($_GET[""])) {
    if ($_GET["nav"] == "home") {
        $pageTitle = "Cities of Croatia";
        $section = "home";
    } else if ($_GET["nav"] == "basic") {
        $pageTitle = "Basic Information";
        $section = "about";
    }
      else if ($_GET["nav"] == "about") {
        $pageTitle = "About Page";
        $section = "about";
    } else if ($_GET["nav"] == "contact") {
        $pageTitle = "Contact";
        $section = "contact";
    }
}

include("inc/header.php"); ?>

<div id="wrapper">
  <section>
    <ul id="gallery">
      <li>
        <a href="images/osijek.jpg" class="lightbox">
          <img src="images/osijek.jpg" alt="Osijek"/>
        </a>
        <p>More information on click: <a href="addinfo.php#os">Osijek</a></p>
      </li>
      <li>
        <a href="images/rovinj.jpg" class="lightbox">
          <img src="images/rovinj.jpg" alt="Rovinj"/>
        </a>
        <p>More information on <a href="addinfo.php#rv">Rovinj</a>.</p>
      </li>
      <li>
        <a href="images/dubrovnik.jpg" class="lightbox">
          <img src="images/dubrovnik.jpg" alt="Dubrovnik"/>
        </a>
        <p>More information on <a href="addinfo.php#du">Dubrovnik</a>.</p>
      </li>
      <li>
        <a href="images/zagreb.jpg" class="lightbox">
          <img src="images/zagreb.jpg" alt="Zagreb"/>
        </a>
        <p>More information on <a href="addinfo.php#zg">Zagreb</a>.</p>
      </li>
      <li>
        <a href="images/split.jpg" class="lightbox">
          <img src="images/split.jpg" alt="Split"/>
        </a>
        <p>More information on <a href="addinfo.php#sp">Split</a>.</p>
      </li>
      <li>
        <a href="images/varazdin.jpg" class="lightbox">
          <img src="images/varazdin.jpg" alt="Varaždin"/>
        </a>
        <p>More information on <a href="addinfo.php#vz">Varaždin</a>.</p>
      </li>
      <li>
        <a href="images/pula.jpg" class="lightbox">
          <img src="images/pula.jpg" alt="Pula"/>
        </a>
        <p>More information on <a href="addinfo.php#pu">Pula</a>.</p>
      </li>
    </ul>
  </section>

  <?php include("inc/footer.php"); ?>