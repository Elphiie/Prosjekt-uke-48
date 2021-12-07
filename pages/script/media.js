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

   var parentDiv = document.createElement('div');
   parentDiv.className = "sample-container";
 
   var childDiv = document.createElement('div');
   childDiv.className = "profile cover";
 
   var imgElement = document.createElement('img');
   imgElement.className = "coverimg";
   imgElement.setAttribute('src', profileImgURL);

 
   var titleElement = document.createElement('h2');
   var spanElement = document.createElement('span')
   spanElement.innerHTML = `${profileName}`;
 
   var figureElement = document.createElement('figure');
   figureElement.className = "align";
 
   var audElement = document.createElement('audio');
   audElement.className = "aud";
   audElement.id = "audio";
   audElement.setAttribute("controls", "controls");
   audElement.setAttribute('src', profileAudURL);
   
   childDiv.appendChild(imgElement);
   titleElement.appendChild(spanElement);
   childDiv.appendChild(titleElement);
   parentDiv.appendChild(childDiv);
   figureElement.appendChild(audElement);
   parentDiv.appendChild(figureElement);

   document.getElementById('audio-container').appendChild(parentDiv);

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
  e.preventDefault();
});

function resetForm() {
  $("#form")[0].reset();
}


