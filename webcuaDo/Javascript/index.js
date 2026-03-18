function ktten() {
  var ten = document.getElementById("name").value;
  var ht = /^(?:[A-ZÀ-Ỵ][a-zà-ỹ]+(?:\s+[A-ZÀ-Ỵ][a-zà-ỹ]+)+)$/;
  var erollable = document.getElementById("er1");
  if (ht.test(ten)) {
    erollable.innerHTML = "success";
    erollable.className = "text-success";
    return true;
  } else {
    erollable.innerHTML = "Errol";
    erollable.className = "text-danger";
    return false;
  }
}
function kttel() {
  var tel = document.getElementById("telnumber").value;
  var sdt = /^0\d{9}$/;
  var erollable1 = document.getElementById("er2");
  if (sdt.test(tel)) {
    erollable1.innerHTML = "success";
    erollable1.className = "text-success";
    return true;
  } else {
    erollable1.innerHTML = "Errol";
    erollable1.className = "text-danger";
    return false;
  }
}
function ktemail() {
  var mail = document.getElementById("email").value;
  var e_mail = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
  var erollable2 = document.getElementById("er3");
  if (e_mail.test(mail)) {
    erollable2.innerHTML = "success";
    erollable2.className = "text-success";
    return true;
  } else {
    erollable2.innerHTML = "Errol";
    erollable2.className = "text-danger";
    return false;
  }
}
function ktpassword() {
  var pass = document.getElementById("pw").value;
  var passw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&]).{6,}$/;
  var erollable3 = document.getElementById("er4");
  if (passw.test(pass)) {
    erollable3.innerHTML = "success";
    erollable3.className = "text-success";
    return true;
  } else {
    erollable3.innerHTML = "Errol";
    erollable3.className = "text-danger";
    return false;
  }
}
function showpassword() {
  var input = document.getElementById("pw");
  var checkbox = document.getElementById("paswod");
  if (checkbox.checked) {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // chặn reload
    const formData = new FormData(this);
    console.log("Username: ", formData.get("Name"));
    console.log("PhoneNumber: ", formData.get("telnumber"));
    console.log("DayOFBirth: ", formData.get("date"));
    console.log("Email: ", formData.get("email"));
    console.log("Password:", formData.get("passwords"));
  });
