<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Excercise on Web Dev</title>
    <link rel="icon" href="img/icon-cities.png">
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <header>
      <a href="index.php" id="logo">
        <h1><?php echo $pageTitle; ?></h1>
      </a>
      <!--<img class="headerImg" src="img/sketch.jpg" alt="City sketch"/> -->
      <nav id="menu">
        <ul>
          <li class="home<?php if ($section == "home") { echo " on"; } ?>"><a href="index.php">Home</a></li>
          <li class="basic<?php if ($section == "basic") { echo " on"; } ?>"><a href="addinfo.php">Basic Information</a></li>
          <li class="about<?php if ($section == "about") { echo " on"; } ?>"><a href="about-page.php">About Page</a></li>
          <li class="contact<?php if ($section == "contact") { echo " on"; } ?>"><a href="contact.php">Contact</a></li>
        </ul>
      </nav>
    </header>