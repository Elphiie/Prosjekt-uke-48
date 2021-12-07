function hideContent() {
var loadup = document.getElementById('form');

var displaySetting = loadup.style.display;

  if (displaySetting == 'block'){
      loadup.style.display = 'none';
  } else {
      loadup.style.display = 'block';
  }
};


function hideBtn() { 

var submitBtn = document.getElementById('ulBtn');

var btnDisplay = submitBtn.style.display;
  if(btnDisplay == 'none'){
    submitBtn.style.display = 'block';
  } else{
    submitBtn.style.display = 'none';
  }
}


const getValuesFromInputs = () =>{
  const profileName = document.querySelector('#field1').value;
  const profileImg = document.querySelector('#field2').files[0];
  const profileAud = document.querySelector('#field3').files[0];

  document.querySelector('form').style.display = 'none';

  return [profileName, profileImg, profileAud];

}

const convertInputValues = () => {
   const [profileName, profileImg, profileAud] = getValuesFromInputs();
 
   const profileImgURL = URL.createObjectURL(profileImg);
   const profileAudURL = URL.createObjectURL(profileAud);
 
   return[profileAudURL, profileImgURL, profileName ]
 }

 const addInputToProfile = () => {

   const [profileAudURL, profileImgURL, profileName ]  = convertInputValues();

   document.querySelector('.profile span').innerHTML = `${profileName}`;
   document.querySelector('.profile img').setAttribute('src', profileImgURL);
   document.querySelector('.aud').setAttribute('src', profileAudURL);

}

var loadImg = function(event) {
  var outputImg = document.getElementById('previewImg');
  var hideImg = outputImg.style.display;
  outputImg.src = URL.createObjectURL(event.target.files[0]);
  outputImg.onload = function() {
    URL.revokeObjectURL(outputImg.src)// free memory
    if (hideImg == 'block'){
      outputImg.style.display = 'none';
    }else{
      outputImg.style.display = 'block';
    }
  }
};

var loadAud = function(event) {
  var outputAud = document.getElementById('previewAud');
  var hideAud = outputAud.style.display;
  outputAud.src = URL.createObjectURL(event.target.files[0]);
  if (hideAud == 'block'){
    outputAud.style.display = 'none';
  }else{
    outputAud.style.display = 'block';
  }
  outputAud.onload = function() {
    URL.revokeObjectURL(outputAud.src)// free memory
  }
};

function showBtn() { 

  var submitBtn = document.getElementById('ulBtn');
  
  var btnDisplay = submitBtn.style.display;
  if(btnDisplay == 'none'){
    submitBtn.style.display = 'block';
  } else{
    submitBtn.style.display = 'none';
  }
  }

document.querySelector('#btn').addEventListener('click', (e) => {
  var ulContent = document.getElementById('uploaded-container');
  var showContent = ulContent.style.display;
  if (showContent == 'block'){
    ulContent.style.display = 'none';
  }else {
    ulContent.style.display = 'block';
  }
  e.preventDefault();
  addInputToProfile();
});


/*const songName = [];
const coverArt = [];
const sample = [];

const sampleName = document.querySelector('input.sample-name').value;

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