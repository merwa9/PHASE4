const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = "Total Score is: "+mostRecentScore+ " points!";
