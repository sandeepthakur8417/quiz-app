function checkAnswer(button) {
    // Check if the selected answer is correct
    if (button.getAttribute('data-correct') === 'true') {
        button.style.backgroundColor = '#4CAF50'; // Green for correct
        alert('Correct! Air pollution is the most significant risk to respiratory health.');
    } else {
        button.style.backgroundColor = '#F44336'; // Red for incorrect
        alert('Incorrect. Try again!');
    }

    // Disable all buttons after a click
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.disabled = true);

    // Move to the next question after a delay
    setTimeout(() => {
        loadNextQuestion();
    }, 1500); // 1.5 seconds delay before loading the next question
}

// Load next question
function loadNextQuestion() {
    // You can add logic here to change the question content dynamically
    // For example, update the text and options for the next question
    const currentQuestionNumber = document.querySelector('.question-number .current');
    const nextQuestionNumber = parseInt(currentQuestionNumber.textContent) + 1;

    if (nextQuestionNumber <= 7) { // Assuming there are 7 questions
        currentQuestionNumber.classList.remove('current');
        const nextQuestionSpan = document.querySelector(`.question-number span:nth-child(${nextQuestionNumber})`);
        nextQuestionSpan.classList.add('current');

        // Update the question text and options here (you can use an array or fetch new data)
        document.querySelector('.question p').textContent = `New question #${nextQuestionNumber} goes here`;  // Example

        // Enable all buttons again for the next question
        const buttons = document.querySelectorAll('.options button');
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.style.backgroundColor = '#d9d9d9'; // Reset button color
        });
    } else {
        alert('Quiz completed!');
    }
}
