var _a, _b, _c, _d;
function generateResume(data) {
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeHtml = "\n       <div class=\"resume\">\n    <div class=\"left-panel\">\n        <div class=\"profile-section\">\n            <img src=\"".concat(data.imageUrl, "\" alt=\"Profile Picture\"/>\n            <h3 class=\"heading\">PROFILE</h3>\n            <p class=\"about\"><span id=\"edit-about\" class=\"editable\">").concat(data.about, "</span></p>\n        </div>\n\n        <div class=\"contact-section\">\n            <h3 class=\"heading\">CONTACT ME</h3>\n            <p>\uD83D\uDCDE<span class=\"editable\" id=\"edit-phone\">").concat(data.phone, "</span></p>\n            <p> \uD83D\uDCE7<span id=\"edit-email\" class=\"editable\">").concat(data.email, "</span></p>\n            <p>\uD83C\uDFE0<span id=\"edit-address\" class=\"editable\">").concat(data.address, "</span></p>\n        </div>\n\n    </div>\n\n\n    <div class=\"top-right-panel\">\n        <h1 class=\"name\"><span id=\"edit-name\" class=\"editable\">").concat(data.name, "</span></h1>\n            <h3 class=\"profession\"><span class=\"editable\" id=\"edit-profession\">").concat(data.profession, "</span></h3>\n            <div></div>\n\n            <div class=\"right-panel\">\n                <h3 class=\"heading\">\u2B9A EDUCATION</h3>\n                <ul>").concat(Array.from(document.querySelectorAll('#educationList li'))
        .map(function (item) { var _a; return "<li id =\"edit-education\" class = \"editable\">".concat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('✖', '').trim(), "</li>"); })
        .join(''), "</ul>\n                \n    \n                <h3 class=\"heading\">\u2B9A LANGUAGES</h3>\n                <ul>").concat(Array.from(document.querySelectorAll('#languagesList li'))
        .map(function (item) { var _a; return "<li id =\"edit-languages\" class =\"editable\">".concat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('✖', '').trim(), "</li>"); })
        .join(''), "</ul>\n                \n\n                <h3 class=\"heading\">\u2B9A SKILLS</h3>\n                <ul>").concat(Array.from(document.querySelectorAll('#skillsList li'))
        .map(function (item) { var _a; return "<li id = \"edit-skills\" class = \"editable\">".concat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('✖', '').trim(), "</li>"); })
        .join(''), "</ul>\n    \n                <h3 class=\"heading\">\u2B9A PERSONAL PROFILE</h3>\n                <p id=\"edit-father-name\"><strong>Father's Name:</strong><span class=\"editable\"> ").concat(data.fatherName, "</span></p>\n                <p><strong>NIC #:</strong><span class=\"editable\" id=\"edit-nic\">").concat(data.nic, "</span></p>\n                <p><strong>Nationality:</strong> <span class=\"editable\" id=\"edit-nationality\">").concat(data.nationality, "</span></p>\n                <p><strong>DOB:</strong> <span class=\"editable\" id=\"edit-dob\"> ").concat(data.dob, "</span></p>\n                <p><strong>Marital Status:</strong> <span class=\"editable\" id=\"edit-status\">").concat(data.maritalStatus, "</span></p>\n                <p><strong>Religion:</strong> <span class=\"editable\" id=\"edit-religion\">").concat(data.religion, "</span></p>\n            </div>\n    </div>\n\n\n   </div>\n   <div class=\"buttons\">\n            <button id=\"edit-button\">Edit</button>\n            <button id=\"printBtn\">Print Resume</button>\n            <button id=\"copyUrlBtn\">Copy URL</button>\n      </div>\n    ");
    resumeOutput.innerHTML = resumeHtml;
    // Add event listener for the Edit/Save button after resume is generated
    var editButton = document.getElementById('edit-button');
    if (editButton) {
        editButton.addEventListener('click', toggleEditSave);
    }
    var isEditing = false;
    function toggleEditSave() {
        var editButton = document.getElementById('edit-button');
        var editableElements = document.querySelectorAll('.editable');
        if (!isEditing) {
            editableElements.forEach(function (element) {
                element.setAttribute('contenteditable', 'true');
                element.style.border = '1px dashed #0ef';
            });
            editButton.innerText = "Save";
        }
        else {
            editableElements.forEach(function (element) {
                element.setAttribute('contenteditable', 'false');
                element.style.border = 'none';
            });
            editButton.innerText = "Edit";
            var updatedData = {
                about: document.getElementById('edit-about').innerText,
                phone: document.getElementById('edit-phone').innerText,
                email: document.getElementById('edit-email').innerText,
                address: document.getElementById('edit-address').innerText,
                name: document.getElementById('edit-name').innerText,
                profession: document.getElementById('edit-profession').innerText,
                education: Array.from(document.querySelectorAll('#edit-education')).map(function (el) { return el.innerText; }),
                languages: Array.from(document.querySelectorAll('#edit-languages')).map(function (el) { return el.innerText; }),
                skills: Array.from(document.querySelectorAll('#edit-skills')).map(function (el) { return el.innerText; }),
                fatherName: document.getElementById('edit-father-name').innerText,
                nic: document.getElementById('edit-nic').innerText,
                nationality: document.getElementById('edit-nationality').innerText,
                dob: document.getElementById('edit-dob').innerText,
                maritalStatus: document.getElementById('edit-status').innerText,
                religion: document.getElementById('edit-religion').innerText,
            };
            console.log("Updated data:", updatedData);
        }
        isEditing = !isEditing;
    }
    // Event listener to print the resume using window.print()
    var printBtn = document.getElementById('printBtn');
    printBtn.addEventListener('click', function () {
        window.print();
    });
    // Event listener to copy the generated URL based on the user's name
    var copyUrlBtn = document.getElementById('copyUrlBtn');
    copyUrlBtn.addEventListener('click', function () {
        var url = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(data.name));
        navigator.clipboard.writeText(url).then(function () {
            alert('URL copied to clipboard: ' + url);
        });
    });
}
// Form submission handling
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Retrieving form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var profession = document.getElementById('profession').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var about = document.getElementById('about').value;
    // const education = (document.getElementById('education') as HTMLInputElement).value;
    var fatherName = document.getElementById('fatherName').value;
    var nic = document.getElementById('nic').value;
    var nationality = document.getElementById('nationality').value;
    var dob = document.getElementById('dob').value;
    var maritalStatus = document.getElementById('maritalStatus').value;
    var religion = document.getElementById('religion').value;
    // Fetching skills and languages and educations
    var skills = Array.from(document.querySelectorAll('#skillsList li')).map(function (item) { var _a; return (_a = item.textContent) !== null && _a !== void 0 ? _a : ''; });
    var languages = Array.from(document.querySelectorAll('#languagesList li')).map(function (item) { var _a; return (_a = item.textContent) !== null && _a !== void 0 ? _a : ''; });
    var educations = Array.from(document.querySelectorAll('#educationList li')).map(function (item) { var _a; return (_a = item.textContent) !== null && _a !== void 0 ? _a : ''; });
    // Handling image upload
    var imageInput = document.getElementById('image');
    var file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!file) {
        alert("Please upload a picture.");
        return;
    }
    // Reading the image file
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        // Create the resume data object
        var resumeData = {
            name: name,
            email: email,
            profession: profession,
            phone: phone,
            address: address,
            about: about,
            educations: educations,
            skills: skills,
            languages: languages,
            fatherName: fatherName,
            nic: nic,
            nationality: nationality,
            dob: dob,
            maritalStatus: maritalStatus,
            religion: religion,
            imageUrl: imageUrl
        };
        // Generate the resume
        generateResume(resumeData);
    };
    reader.readAsDataURL(file);
});
// Adding skill to the list
(_b = document.getElementById('addSkillBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var skillInput = document.getElementById('skillInput');
    var skillsList = document.getElementById('skillsList');
    if (skillInput.value.trim() !== '') {
        var listItem_1 = document.createElement('li');
        listItem_1.textContent = skillInput.value;
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✖';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.addEventListener('click', function () {
            skillsList.removeChild(listItem_1);
        });
        listItem_1.appendChild(deleteBtn);
        skillsList.appendChild(listItem_1);
        skillInput.value = '';
    }
});
// Adding language to the list
(_c = document.getElementById('addLanguageBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var languageInput = document.getElementById('languageInput');
    var languagesList = document.getElementById('languagesList');
    if (languageInput.value.trim() !== '') {
        var listItem_2 = document.createElement('li');
        listItem_2.textContent = languageInput.value;
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✖';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.addEventListener('click', function () {
            languagesList.removeChild(listItem_2);
        });
        listItem_2.appendChild(deleteBtn);
        languagesList.appendChild(listItem_2);
        languageInput.value = '';
    }
});
// Adding Education to the list
(_d = document.getElementById('addEducationBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var educationInput = document.getElementById('educationInput');
    var educationList = document.getElementById('educationList');
    if (educationInput.value.trim() !== '') {
        var listItem_3 = document.createElement('li');
        listItem_3.textContent = educationInput.value;
        // Create a delete button (cross sign)
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '✖'; // Cross sign
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.cursor = 'pointer';
        // Add click event to delete the list item when cross is clicked
        deleteBtn.addEventListener('click', function () {
            educationList.removeChild(listItem_3);
        });
        listItem_3.appendChild(deleteBtn);
        educationList.appendChild(listItem_3);
        // Clear the input after adding the education
        educationInput.value = '';
    }
});
