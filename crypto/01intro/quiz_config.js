<!-- Paste this code into an external JavaScript file named: quiz_config.js  -->

/* This script and many more are available free online at
The JavaScript Source :: http://www.javascriptsource.com
Created by: James Crooke :: http://www.cj-design.com */

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var feedback = new Array();

// To add more questions, just follow the format below.

questions[0] = "Cryptography is used in which of the following applications";
choices[0] = new Array();
choices[0][0] = "web browsers";
choices[0][1] = "email applications";
choices[0][2] = "cell phones";
choices[0][3] = "ATMs";
choices[0][4] = "credit cards";
choices[0][5] = "all of the above";
answers[0] = choices[0][5];
feedback[0] = "Correct. Cryptography has a wide variety of applications";

questions[1] = "Advancement in applied cryptography has been relatively stagnant in recent years";
choices[1] = new Array();
choices[1][0] = "true";
choices[1][1] = "false";
answers[1] = choices[1][1];
feedback[1] = "Correct. Applied cryptography is a rapidly advancing field";

questions[2] = "A cryptosystem uses one or more crypto algorithms";
choices[2] = new Array();
choices[2][0] = "true";
choices[2][1] = "false";
answers[2] = choices[2][0];
feedback[2] = "Correct. A cryptosystem is based on one or more crypto algorithms to provide security services";

questions[3] = "Cryptanalysis is a field particular to hackers";
choices[3] = new Array();
choices[3][0] = "true";
choices[3][1] = "false";
answers[3] = choices[3][1];
feedback[3] = "Correct. Cryptanalysis is no longer associated with hackers alone but is now a scientific discipline involving cryptanalysts as well as academic researchers.";