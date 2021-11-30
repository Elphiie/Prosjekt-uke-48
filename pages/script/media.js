var ulBtn = document.getElementById('ulBtn')
var loadup = document.getElementById('form')
ulBtn.addEventListener('click', () =>{

    if (loadup.style.display === 'none', ulBtn.style.display === 'flex'){
        loadup.style.display = 'block', ulBtn.style.display = 'none';
    } else {
        loadup.style.display = 'none', ulBtn.style.display = 'flex';
    }
})

    

const getValuesFromInputs = () =>{
    const profileName = document.querySelector('input.profile-name').value;
    const profileImg = document.querySelector('input.profile-img').files[0];
    const profileAud = document.querySelector('input.profile-aud').files[0];
 
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
    e.preventDefault();
    addInputToProfile();
  });