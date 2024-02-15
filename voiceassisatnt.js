document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startAssistant');
    const recognition = new webkitSpeechRecognition();

    recognition.onstart = function() {
        console.log('Voice assistant listening...');
        startButton.textContent = 'Listening...';
    };

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        console.log('You said: ', result);
        // Here you can process the result and perform actions on your website
        startButton.textContent = 'Start Assistant';
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        startButton.textContent = 'Start Assistant';
    };

    startButton.addEventListener('click', function() {
        if (recognition && recognition.state === 'listening') {
            recognition.stop();
            return;
        }
        try {
            recognition.start();
        } catch (error) {
            console.error('Error starting speech recognition:', error);
        }
    });
});
