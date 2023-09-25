const formField = document.querySelector(".form-field");
const emailInput = document.forms["form-field"]["email"];
const nameInput = document.forms["form-field"]["fullName"];
const phoneInput = document.forms["form-field"]["tel"];
const massageInput = document.forms["form-field"]["massage"];
const formBtn = document.querySelector(".formBtn");

formBtn.disabled = true;

emailInput.addEventListener("input", mainValidation);
nameInput.addEventListener("input", mainValidation);
phoneInput.addEventListener("input", mainValidation);
massageInput.addEventListener("input", mainValidation);

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".confirmation-message").style.display = "block";
  nameInput.value = "";
  emailInput.value = "";
  massageInput.value = "";
  phoneInput.value = "";
});

function mainValidation() {
  if (
    nameValidation(nameInput) &&
    emailValidation(emailInput) &&
    phoneValidation(phoneInput) &&
    massageValidation(massageInput)
  ) {
    formBtn.disabled = false;
  }
}

function nameValidation(nameInput) {
  let nameRegex = /^[a-zA-Z\s]{3,15}$/;
  if (
    nameRegex.test(nameInput.value) === false ||
    nameInput.value.length < 5 ||
    nameInput.value === "" ||
    nameInput.value === null
  ) {
    nameInput.style.borderColor = "red";
  } else {
    nameInput.style.borderColor = "#2e2e2e";
    return true;
  }
}
function emailValidation(emailInput) {
  let emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (
    emailRegex.test(emailInput.value) === false ||
    emailInput.value.length < 5 ||
    emailInput.value.length > 20 ||
    emailInput.value === "" ||
    emailInput.value === null
  ) {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "#2e2e2e";
    return true;
  }
}
function phoneValidation(phoneInput) {
  let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  if (
    phoneRegex.test(phoneInput.value) === false ||
    phoneInput.value.length < 5 ||
    phoneInput.value.length > 20 ||
    phoneInput.value === "" ||
    phoneInput.value === null
  ) {
    phoneInput.style.borderColor = "red";
  } else {
    phoneInput.style.borderColor = "#2e2e2e";
    return true;
  }
}
function massageValidation(massageInput) {
  let massageRegex = /^[a-zA-Z\s]*$/;
  if (
    massageRegex.test(massageInput.value) === false ||
    massageInput.value.length < 15 ||
    massageInput.value === "" ||
    massageInput.value === null
  ) {
    massageInput.style.borderColor = "red";
  } else {
    massageInput.style.borderColor = "#2e2e2e";
    return true;
  }
}
//  scroll to top

let myButton = document.getElementById("upBtn");

myButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

// javascript section

function javaScriptProject(number, link, image, projectName) {
  this.number = number;
  this.link = link;
  this.image = image;
  this.projectName = projectName;
}

const javascriptProjects = [
  new javaScriptProject("1", "JavaPage-calculator.html", "calculator.png", "מחשבון"),
  new javaScriptProject("2", "JavaPage-credit-card.html", "credit-card.png", "כרטיס אשראי"),
  new javaScriptProject("3", "JavaPage-screen-builder.html", "screen-builder.png", "בונה מסכים"),
  new javaScriptProject("4", "JavaPage-shopping-cart.html", "shopping-cart.png", "עגלת קניות"),
  new javaScriptProject("5", "JavaPage-todoList.html", "todoList.png", "רשימת משימות"),
  new javaScriptProject("6", "JavaPage-user-management.html", "user-management.png", "ניהול משתמשים"),
];

function javascriptSection() {
  const projectContainer = document.querySelector(".javascript");

  let javaScriptProjectHTML = "";
  javascriptProjects.forEach((javaScriptProject) => {
    javaScriptProjectHTML += `
    <div class="grid">
    <div class="project">
        <a href="${javaScriptProject.link}"><img src="img/${javaScriptProject.image}" alt="Project photo"></a>
    </div>
    <p>${javaScriptProject.projectName}</p>
</div>
    `;
  });

  projectContainer.innerHTML = javaScriptProjectHTML;
}

javascriptSection();
