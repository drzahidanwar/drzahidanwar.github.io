var useranswers = new Array();
var answered = 0;

function renderQuiz(from, to) {
  for(i=from;i<=to;i++) {
    document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
    for(j=0;j<choices[i].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    }
  }
  /*
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
  */
}
function resetQuiz(showConfirm) {
  if(showConfirm)
    if(!confirm("Are you sure you want to reset your answers and start from the beginning?"))
      return false;
  document.location = document.location;
}
function submitAnswer(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  showResult(questionId);
//  disableQuestion(classId);
//  disableAnswers(questionId);
  answered++;
}
function showResult(questionId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="correct.gif" style="border:0" alt="Correct!" /> <p style="color:green"><b>' + feedback[questionId] + '</b></p>';
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="incorrect.gif" style="border:0" alt="Incorrect!" />';
  }
}
function showScore() {
  if(answered != answers.length) {
    alert("Please answer all questions on this page. Each question should be attempted only once for computing score! Attempts:" + answered+ "Total:" + answers.length);
    return false;
  }
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "You scored " + correct + " out of " + questionCount + "\n\n";
  alertMsg += "You correctly answered " + pc + "% of the questions! \n\n";
  alert(alertMsg);

}


