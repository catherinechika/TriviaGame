let numRight = 0;
let numWrong = 0;
let numUns = 0;
let count = 120;
let quizStart = false;
const timerText = $(".timer-text")
const startBtn = $("#startBtn")
let intId;
let status;
$(document).ready(function () {
    // Hiding the questions until player is ready to start the quiz
    $(".content").hide();
    $(".quiz").hide();
    $(".results").hide();
    // Start the time when the start quiz button is clicked
    $("#startBtn").on("click", function () {
        intId = setInterval(counter, 1000)
        $(".steps").hide();
        $("#startBtn").hide();
    })
    // stop the time when the stop quiz button is clicked
    $("#endBtn").on("click", function () {
        clearInterval(intId); $(".quiz").hide();
    })

    // Function to account for when the right box is checked
    $('input[id = "right"]').click(function () {
        if ($(this).prop("checked") == true) {
            numRight++
        }
    });

    // Function to account for when the wrong box is checked
    $('input[id = "wrong"]').click(function () {
        if ($(this).prop("checked") == true) {
            numWrong++
        }
    });

    // Function for the submit button
    $(".submitBtn").on("click", tallyUp)
    $(".submitBtn").on("click", gameOver)

    // Function to increment the timer and the keep count of the results
    function counter() {
        if (count > 0) {
            count--
            $(".quiz").show();
            $(".content").show();
            $(".timer-text").text(count)
        }
        else {
            tallyUp()
            gameOver()

        }
    }
    function tallyUp() {
        clearInterval(intId)
        count = "DONE!"
        $(".timer-text").text(count)
        $(".results").show();
        $(".quiz").hide();
        numUns = 10 - (numRight + numWrong)
        $(".numRight").text(numRight)
        $(".numWrong").text(numWrong)
        $(".numUns").text(numUns)
    }
    function gameOver() {
        $("#startBtn").hide()
        $("#endBtn").hide()
    }

})
    // }

