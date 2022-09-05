const Tel = document.getElementById("Tel");

function Name() {
  const Name = document.getElementById("Name");
  const val = Name.value.trim();
  const Err = document.getElementById("Error");
  if (val.length >= 3) {
    Err.innerHTML = "";
    Name.style.borderColor = "green";
  } else {
    Err.innerHTML = "*Name is required!";
    Name.style.borderColor = "red";
  }
}
function surName() {
  const surName = document.getElementById("surName");
  const val = surName.value.trim();
  const Err1 = document.getElementById("Error1");
  if (val.length >= 3) {
    Err1.innerHTML = "";
    surName.style.borderColor = "green";
  } else {
    Err1.innerHTML = "*Surname is required!";
    surName.style.borderColor = "red";
  }
}
function Email() {
  const Email = document.getElementById("Email");
  const val = Email.value.trim();
  const Err2 = document.getElementById("Error2");
  if (val.length <= 0) {
    Err2.innerHTML = "*Email is required!";
    Email.style.borderColor = "red";
  } else {
    Err2.innerHTML = "";
    Email.style.borderColor = "green";
  }
}

function Password() {
  const Pass = document.getElementById("Pass");
  const val = Pass.value.trim();
  const Err4 = document.getElementById("Error4");
  if (val.length < 8) {
    Err4.innerHTML = "*Password length must be atleast 8 characters!";
    Pass.style.borderColor = "red";
  } else {
    Err4.innerHTML = "";
    Pass.style.borderColor = "green";
  }
}

function passwordRep() {
  const val = document.getElementById("Pass").value.trim();
  const PassRep = document.getElementById("PassRep");
  const val1 = PassRep.value.trim();
  const Err5 = document.getElementById("Error5");
  if (val == val1) {
    Err5.innerHTML = "";
    PassRep.style.borderColor = "green";
  } else {
    Err5.innerHTML = "*Passwords are not same!";
    PassRep.style.borderColor = "red";
  }
}
function RegEnd() {
  const inp = document.querySelectorAll(".Inp");
  const message = document.querySelector(".Message");
  inp.forEach((el, index) => {
    if (el.style.borderColor == "green") {
      message.style.display = "flex";
    } else {
      return el;
    }
  });
}
function RemoveMessage() {
  const message = document.querySelector(".Message");
  message.style.display = "none";
}
