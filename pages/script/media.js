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
  var parentDiv = document.createElement('div').setAttribute
  var childDiv = document.createElement('div');
  var imgElement = document.createElement('img');
  var titleElement = document.createElement('h2');
  var spanElement = document.createElement('span')
  var figureElement = document.createElement('figure');
  var audElement = document.createElement('audio');
  document.getElementById('audio-container').appendChild(newElement);

  e.preventDefault();
  addInputToProfile();
});


