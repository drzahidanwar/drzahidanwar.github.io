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

questions[0] = "In symmetric cryptography the encryption function and decryption function must be the same.";
choices[0] = new Array();
choices[0][0] = "true";
choices[0][1] = "false";
answers[0] = choices[0][1];
feedback[0] = "Correct. The keys must the same or easily derivable from each other. The functions have no such requirement.";

questions[1] = "In symmetric cryptography two communicating parties can have two different keys but they must be easily derivable from the other";
choices[1] = new Array();
choices[1][0] = "true";
choices[1][1] = "false";
answers[1] = choices[1][0];
feedback[1] = "Correct. Keys for encryption and decryption can be different but one can be easily derived from the other.";

questions[2] = "Five friends want to communicate using symmetric key cryptography. How many total keys will be required to be exchanged.";
choices[2] = new Array();
choices[2][0] = "1";
choices[2][1] = "2";
choices[2][2] = "5";
choices[2][3] = "10";
choices[2][4] = "20";
answers[2] = choices[2][3];
feedback[2] = "Correct. N(N-1)/2 = 5(4)/2 = 10";

questions[3] = "The primary reason for the low popularity of symmetric encryption is its slow speed.";
choices[3] = new Array();
choices[3][0] = "true";
choices[3][1] = "false";
answers[3] = choices[3][1];
feedback[3] = "Correct. Symmetric encryption is really fast.";