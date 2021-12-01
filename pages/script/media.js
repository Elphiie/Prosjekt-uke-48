var ulBtn = document.getElementById('ulBtn')
var loadup = document.getElementById('form')
ulBtn.addEventListener('click', () =>{
    if (loadup.style.display === 'none', ulBtn.style.display === 'flex'){
        loadup.style.display = 'block', ulBtn.style.display = 'none';
    } else {
        loadup.style.display = 'none', ulBtn.style.display = 'flex';
    }
})


var sampleName = document.getElementById('field1').id=1
var ulImg = document.getElementById('field2').id=2
var ulAudio = document.getElementById('field3').id=3
var nxtBtn = document.getElementById('nextBtn')


const getValuesFromInputs = () =>{
    const profileName = document.querySelector('input.sample-name').value;
    const profileImg = document.querySelector('input.cover-img').files[0];
    const profileAud = document.querySelector('input.sample-aud').files[0];
 
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

    document.querySelector('.audio h2').innerHTML = `${profileName}`;
    document.querySelector('.audio img').setAttribute('src', profileImgURL);
    document.querySelector('.aud').setAttribute('src', profileAudURL);

}

document.querySelector('.btn').addEventListener('click', (e) => {
    if (ulBtn.style.display === 'none'){
        ulBtn.style.display = 'flex';
    } else {
        ulBtn.style.display = 'none';
    }
    e.preventDefault();
    addInputToProfile();
  });