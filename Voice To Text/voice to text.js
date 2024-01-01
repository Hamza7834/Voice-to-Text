
document.addEventListener('DOMContentLoaded', function(event){
    const outputDiv = document.getElementById('output');
    const startButton = document.getElementById('startButton');

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = 'en-US';

    recognition.onresult = (event) => {

         // Handle the recognized speech here
         
        const transcript = event.results[0][0].transcript;
        outputDiv.textContent = transcript;
    };

    recognition.onend = () => {
        startButton.textContent = 'Start Recording';
    };

    startButton.addEventListener('click', () => {
        if (recognition.running) {
            recognition.stop();
            startButton.textContent = 'Start Recording';
        } else {
            recognition.start();
            startButton.textContent = 'Stop Recording';
            outputDiv.textContent = 'Your voice Text';
        }
    });
});
