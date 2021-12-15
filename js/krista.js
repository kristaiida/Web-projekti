function submitQuiz() {

// Get answer score
    function answerScore (qName) {
        let radiosNo = document.getElementsByName(qName);

        for (let i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
                var answerValue = Number(radiosNo[i].value);
            }
        }
        
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// Calculate score
    let calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5'));

// Function to return the correct answer
    function correctAnswer (correctStringNo, qNumber) {
        return ("The correct answer for question number " + qNumber + " is &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

// Print correct answers only if answer is wrong
    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }
    if (answerScore('q5') === 0) {
        document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
    }

// Calculate possible score
    let questionCountArray = document.getElementsByClassName('question');

    let questionCounter = 0;
    for (let i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// Show score
    let showScore = "Your Score: " + calcScore +"/" + questionCounter;
// If all are correct, show 'Perfect score!'
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});