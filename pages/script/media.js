var myAudio = document.getElementById('audio');

function playAudio() {
    myAudio.play();
}

function pauseAudio() {
    myAudio.pause();
}

function dlAudio(filename, text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('dlAudio', "../audio/.mp3");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
}