const formField = document.querySelector(".form-field");
const emailInput = document.forms["form-field"]["email"];
const nameInput = document.forms["form-field"]["fullName"];
const phoneInput = document.forms["form-field"]["tel"];
const massageInput = document.forms["form-field"]["massage"];

function nameValidation(name) {
  let nameRegex = /^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$/;
  return name.match(nameRegex);
}
function emailValidation(email) {
  let emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email.match(emailRegex);
}
function phoneValidation(phone) {
  let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  return phone.match(phoneRegex);
}
function massageValidation(massage) {
  let massageRegex = /^[a-zA-Z\u0590-\u05FF\u200f\u200e ]{10,60}$/;
  return massage.match(massageRegex);
}

function formValidation(e) {
  const name = document.forms["form-field"]["fullName"].value;
  const email = document.forms["form-field"]["email"].value;
  const phone = document.forms["form-field"]["tel"].value;
  const massage = document.forms["form-field"]["massage"].value;
  e.preventDefault();

  if (!nameValidation(name)) {
    nameInput.style.borderColor = "red";
    return;
  } else {
    nameInput.style.borderColor = "#2e2e2e";
  }
  if (!emailValidation(email)) {
    emailInput.style.borderColor = "red";
    return;
  } else {
    emailInput.style.borderColor = "#2e2e2e";
  }
  if (!phoneValidation(phone)) {
    phoneInput.style.borderColor = "red";
    return;
  } else {
    phoneInput.style.borderColor = "#2e2e2e";
  }
  if ((massage.length = 0 || !massageValidation(massage))) {
    massageInput.style.borderColor = "red";
    return;
  } else {
    massageInput.style.borderColor = "#2e2e2e";
  }
  document.querySelector(".confirmation-message").style.display = "block";
  nameInput.value = "";
  emailInput.value = "";
  massageInput.value = "";
  phoneInput.value = "";
}

formField.addEventListener("click", formValidation);

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
  new javaScriptProject("5", "JavaPage-sign-in.html", "sign-in.png", "התחברות והרשמה"),
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
