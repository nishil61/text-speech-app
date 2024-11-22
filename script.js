function speakText() {
    const textInput = document.getElementById('text-input').value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    utterance.onerror = function(event) {
        console.error('SpeechSynthesisUtterance.onerror', event.error);
    }
    speechSynthesis.speak(utterance);
}

let listening = false;
const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = true; // Set to continuous listening

recognition.onresult = function(event) {
    const speechOutput = document.getElementById('speech-output');
    speechOutput.textContent += event.results[event.resultIndex][0].transcript + ' ';
};

function toggleListening() {
    if (listening) {
        recognition.stop();
        document.getElementById('listen-btn').textContent = 'Start Listening';
    } else {
        recognition.start();
        document.getElementById('listen-btn').textContent = 'Stop Listening';
    }
    listening = !listening;
}

