

interface ResumeData {
    name: string;
    email: string;
    profession: string;
    phone: string;
    address: string;
    about: string;
    educations: string[];
    skills: string[];
    languages: string[];
    fatherName: string;
    nic: string;
    nationality: string;
    dob: string;
    maritalStatus: string;
    religion: string;
    imageUrl: string;
}
  
  function generateResume(data: ResumeData) {
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    const resumeHtml = `
       <div class="resume">
    <div class="left-panel">
        <div class="profile-section">
            <img src="${data.imageUrl}" alt="Profile Picture"/>
            <h3 class="heading">PROFILE</h3>
            <p class="about"><span id="edit-about" class="editable">${data.about}</span></p>
        </div>

        <div class="contact-section">
            <h3 class="heading">CONTACT ME</h3>
            <p>📞<span class="editable" id="edit-phone">${data.phone}</span></p>
            <p> 📧<span id="edit-email" class="editable">${data.email}</span></p>
            <p>🏠<span id="edit-address" class="editable">${data.address}</span></p>
        </div>

    </div>


    <div class="top-right-panel">
        <h1 class="name"><span id="edit-name" class="editable">${data.name}</span></h1>
            <h3 class="profession"><span class="editable" id="edit-profession">${data.profession}</span></h3>
            <div></div>

            <div class="right-panel">
                <h3 class="heading">⮚ EDUCATION</h3>
                <ul>${Array.from(document.querySelectorAll('#educationList li'))
                .map(item => `<li id ="edit-education" class = "editable">${(item as HTMLElement).textContent?.replace('✖', '').trim()}</li>`)
                .join('')}</ul>
                
    
                <h3 class="heading">⮚ LANGUAGES</h3>
                <ul>${Array.from(document.querySelectorAll('#languagesList li'))
                .map(item => `<li id ="edit-languages" class ="editable">${(item as HTMLElement).textContent?.replace('✖', '').trim()}</li>`)
                .join('')}</ul>
                

                <h3 class="heading">⮚ SKILLS</h3>
                <ul>${Array.from(document.querySelectorAll('#skillsList li'))
                .map(item => `<li id = "edit-skills" class = "editable">${(item as HTMLElement).textContent?.replace('✖', '').trim()}</li>`)
                .join('')}</ul>
    
                <h3 class="heading">⮚ PERSONAL PROFILE</h3>
                <p id="edit-father-name"><strong>Father's Name:</strong><span class="editable"> ${data.fatherName}</span></p>
                <p><strong>NIC #:</strong><span class="editable" id="edit-nic">${data.nic}</span></p>
                <p><strong>Nationality:</strong> <span class="editable" id="edit-nationality">${data.nationality}</span></p>
                <p><strong>DOB:</strong> <span class="editable" id="edit-dob"> ${data.dob}</span></p>
                <p><strong>Marital Status:</strong> <span class="editable" id="edit-status">${data.maritalStatus}</span></p>
                <p><strong>Religion:</strong> <span class="editable" id="edit-religion">${data.religion}</span></p>
            </div>
    </div>


   </div>
   <div class="buttons">
            <button id="edit-button">Edit</button>
            <button id="printBtn">Print Resume</button>
            <button id="copyUrlBtn">Copy URL</button>
      </div>
    `;
  
    resumeOutput.innerHTML = resumeHtml;




    // Edit able resume function 
    const editButton = document.getElementById('edit-button') as HTMLButtonElement;
    if (editButton) {
      editButton.addEventListener('click', toggleEditSave);
    }


    let isEditing = false;

function toggleEditSave() {
  const editButton = document.getElementById('edit-button') as HTMLButtonElement;
  const editableElements = document.querySelectorAll('.editable') as NodeListOf<HTMLElement>;

  if (!isEditing) {
    
    editableElements.forEach(element => {
      element.setAttribute('contenteditable', 'true');
      element.style.border = '1px dashed #0ef'; 
    });
    editButton.innerText = "Save";
  } else {
    
    editableElements.forEach(element => {
      element.setAttribute('contenteditable', 'false');
      element.style.border = 'none';
    });
    editButton.innerText = "Edit";
    
    
    const updatedData = {
      about: (document.getElementById('edit-about') as HTMLElement).innerText,
      phone: (document.getElementById('edit-phone') as HTMLElement).innerText,
      email: (document.getElementById('edit-email') as HTMLElement).innerText,
      address: (document.getElementById('edit-address') as HTMLElement).innerText,
      name: (document.getElementById('edit-name') as HTMLElement).innerText,
      profession: (document.getElementById('edit-profession') as HTMLElement).innerText,
      education: Array.from(document.querySelectorAll('#edit-education')).map((el) => (el as HTMLElement).innerText),
      languages: Array.from(document.querySelectorAll('#edit-languages')).map((el) => (el as HTMLElement).innerText),
      skills: Array.from(document.querySelectorAll('#edit-skills')).map((el) => (el as HTMLElement).innerText),
      fatherName: (document.getElementById('edit-father-name') as HTMLElement).innerText,
      nic: (document.getElementById('edit-nic') as HTMLElement).innerText,
      nationality: (document.getElementById('edit-nationality') as HTMLElement).innerText,
      dob: (document.getElementById('edit-dob') as HTMLElement).innerText,
      maritalStatus: (document.getElementById('edit-status') as HTMLElement).innerText,
      religion: (document.getElementById('edit-religion') as HTMLElement).innerText,
    };

    console.log("Updated data:", updatedData);
  }

  isEditing = !isEditing; 
}


  
    // resume print function 

    const printBtn = document.getElementById('printBtn') as HTMLButtonElement;
    printBtn.addEventListener('click', () => {
      window.print();
    });
  
    // shareable link generate and copy function 

    const copyUrlBtn = document.getElementById('copyUrlBtn') as HTMLButtonElement;
    copyUrlBtn.addEventListener('click', () => {
      const url = `${window.location.origin}/resume/${encodeURIComponent(data.name)}`;
      navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard: ' + url);
      });
    });
  }
  
  
  document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
  
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profession = (document.getElementById('profession') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    
    const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
    const nic = (document.getElementById('nic') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const maritalStatus = (document.getElementById('maritalStatus') as HTMLInputElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
  
    
    const skills = Array.from(document.querySelectorAll('#skillsList li')).map(item => item.textContent ?? '');
    const languages = Array.from(document.querySelectorAll('#languagesList li')).map(item => item.textContent ?? '');
    const educations = Array.from(document.querySelectorAll('#educationList li')).map(item => item.textContent ?? '');
  
    
    const imageInput = document.getElementById('image') as HTMLInputElement;
    const file = imageInput.files?.[0];
  
    if (!file) {
      alert("Please upload a picture.");
      return;
    }
  
    
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target?.result as string;
  
      
      const resumeData: ResumeData = {
        name,
        email,
        profession,
        phone,
        address,
        about,
        educations,
        skills,
        languages,
        fatherName,
        nic,
        nationality,
        dob,
        maritalStatus,
        religion,
        imageUrl
      };
  
      // Generate the resume
      generateResume(resumeData);
    };
  
    reader.readAsDataURL(file);
  });
  
  
  // Adding skill to the list

  document.getElementById('addSkillBtn')?.addEventListener('click', () => {
    const skillInput = document.getElementById('skillInput') as HTMLInputElement;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement;
    
    if (skillInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = skillInput.value;
      
      
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✖'; 
      deleteBtn.style.marginLeft = '10px'; 
      deleteBtn.style.cursor = 'pointer';  
      
      deleteBtn.addEventListener('click', () => {
        skillsList.removeChild(listItem);
      });
      
      listItem.appendChild(deleteBtn);
      skillsList.appendChild(listItem);
      
      
      skillInput.value = '';
    }
  });
  
  // Adding language to the list
  document.getElementById('addLanguageBtn')?.addEventListener('click', () => {
    const languageInput = document.getElementById('languageInput') as HTMLInputElement;
    const languagesList = document.getElementById('languagesList') as HTMLUListElement;
  
    if (languageInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = languageInput.value;
      
    
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✖'; 
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.style.cursor = 'pointer';
  
      deleteBtn.addEventListener('click', () => {
        languagesList.removeChild(listItem);
      });
      
      listItem.appendChild(deleteBtn);
      languagesList.appendChild(listItem);
      
    
      languageInput.value = '';
    }
  });



  // Adding Education to the list
  document.getElementById('addEducationBtn')?.addEventListener('click', () => {
    const educationInput = document.getElementById('educationInput') as HTMLInputElement;
    const educationList = document.getElementById('educationList') as HTMLUListElement;
  
    if (educationInput.value.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = educationInput.value;
      
      
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '✖';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.style.cursor = 'pointer';
  
      
      deleteBtn.addEventListener('click', () => {
        educationList.removeChild(listItem);
      });
  
      listItem.appendChild(deleteBtn);
      educationList.appendChild(listItem);
  
      
      educationInput.value = '';
    }









});
  


