
function hideContent() {
var loadup = document.getElementById('form');
    if (loadup.style.display === 'none'){
        loadup.style.display = 'block';
    } else {
        loadup.style.display = 'none';
    }
};

/*
const getValuesFromInputs = () =>{
    const profileName = document.querySelector('input.sample-name').value;
 
    document.querySelector('form').style.display = 'none';
 
    return [profileName];
 
 }

 const convertInputValues = () => {
    const [profileName] = getValuesFromInputs();
  
    return[profileName]
  }

  const addInputToProfile = () => {

    const [profileName]  = convertInputValues();

    document.querySelector('.title-cover span').innerHTML = `${profileName}`;
    

}

document.querySelector('.btn').addEventListener('click', (e) => {
    if ( === 'none'){
         = 'flex';
    } else {
         = 'none';
    }
    e.preventDefault();
    addInputToProfile();
  });

const songName = [];
const coverArt = [];
const sample = [];

const profileName = document.querySelector('input.sample-name').value;

function addSample(imageBlob) {
  sample.push(imageBlob);
}

function addName(imageBlob) {
  songName.push(imageBlob);
}

function addArt(imageBlob) {
  coverArt.push(imageBlob);
}

function redrawAudio() {
  const divForSample = document.getElementsByClassName('auio');
  divForSample.innerHTML = '<audio class="aud" controls src=" ">Your browser does not support the<code>audio</code> element.</audio>';
  sample.forEach((imageBlob) => {
    const aud = document.createElement('audio');
    aud.src = URL.createObjectURL(imageBlob);
    divForSample.appendChild(aud);
  });
}

function redrawImg() {
    const divForImages = document.getElementById('image');
    divForImages.innerHTML = '<img src=" " class="coverimg">';
    coverArt.forEach((imageBlob) => {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(imageBlob);
      divForImages.appendChild(img);
    });
  }

function addSampleAndRedraw() {
  const fileInput = document.getElementById('field3');
  if (fileInput.files.length === 1) {
    addSample(fileInput.files[0]);
    redrawAudio();
  } else {
    alert('No file selected. Select a file and try again.');
  }
}

function addImageAndRedraw() {
    const fileInput = document.getElementById('field2');
    if (fileInput.files.length === 1) {
      addImage(fileInput.files[0]);
      redrawImg();
    } else {
      alert('No file selected. Select a file and try again.');
    }
  }
  


const button = document.getElementById('btn');
button.addEventListener('click', addSampleAndRedraw, addImageAndRedraw);*/