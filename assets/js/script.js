let timerInterval;
let totalSeconds = 0; // Start at 50 minutes for testing
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const restartButton = document.getElementById('restartBtn');
const timeDisplay = document.getElementById('timeDisplay');
const sound = new Audio('assets/sounds/waktunya-merokok.mp3');

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals

    timerInterval = setInterval(() => {
        totalSeconds++;
        timeDisplay.textContent = formatTime(totalSeconds);

        // Play sound every hour (3600 seconds)
        if (totalSeconds % 3600 === 0) {
            sound.play();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function restartTimer() {
    stopTimer();
    totalSeconds = 0;
    timeDisplay.textContent = formatTime(totalSeconds);
    startTimer();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
restartButton.addEventListener('click', restartTimer);

timeDisplay.textContent = formatTime(totalSeconds);
