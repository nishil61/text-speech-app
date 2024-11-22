function speakText() {
    const textInput = document.getElementById('text-input').value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    speechSynthesis.speak(utterance);
}

function startListening() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = function(event) {
        const speechOutput = document.getElementById('speech-output');
        speechOutput.textContent = event.results[0][0].transcript;
    };
    recognition.start();
}
