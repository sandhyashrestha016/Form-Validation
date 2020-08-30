const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
var m = document.getElementById("m");
var f = document.getElementById("f");
var o = document.getElementById("o");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var e1 = document.getElementById("e1");
var e2 = document.getElementById("e2");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var g1 = document.getElementById("g1");
var g2 = document.getElementById("g2");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var j1 = document.getElementById("j1");
var j2 = document.getElementById("j2");
var k1 = document.getElementById("k1");
var k2 = document.getElementById("k2");
var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  var mValue = m.value.trim();
  var fValue = f.value.trim();
  var oValue = o.value.trim();
  var a1Value = a1.value.trim();
  var a2Value = a2.value.trim();
  var b1Value = b1.value.trim();
  var b2Value = b2.value.trim();
  var c1Value = c1.value.trim();
  var c2Value = c2.value.trim();
  var d1Value = d1.value.trim();
  var d2Value = d2.value.trim();
  var e1Value = e1.value.trim();
  var e2Value = e2.value.trim();
  var f1Value = f1.value.trim();
  var f2Value = f2.value.trim();
  var g1Value = g1.value.trim();
  var g2Value = g2.value.trim();
  var h1Value = h1.value.trim();
  var h2Value = h2.value.trim();
  var i1Value = i1.value.trim();
  var i2Value = i2.value.trim();
  var j1Value = j1.value.trim();
  var j2Value = j2.value.trim();
  var k1Value = k1.value.trim();
  var k2Value = k2.value.trim();
  var l1Value = l1.value.trim();
  var l2Value = l2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (m.checked !== true && f.checked !== true && o.checked !== true) {
    setErrorFor2(m && f && o, "select an option");
  } else {
    setSuccessFor2(m && f && o);
  }

  if (a1.checked !== true && a2.checked !== true) {
    setErrorFor2(a1 && a2, "select an option");
  } else {
    setSuccessFor2(a1 && a2);
  }

  if (b1.checked !== true && b2.checked !== true) {
    setErrorFor2(b1 && b2, "select an option");
  } else {
    setSuccessFor2(b1 && b2);
  }

  if (c1.checked !== true && c2.checked !== true) {
    setErrorFor2(c1 && c2, "select an option");
  } else {
    setSuccessFor2(c1 && c2);
  }

  if (d1.checked !== true && d2.checked !== true) {
    setErrorFor2(d1 && d2, "select an option");
  } else {
    setSuccessFor2(d1 && d2);
  }

  if (e1.checked !== true && e2.checked !== true) {
    setErrorFor2(e1 && e2, "select an option");
  } else {
    setSuccessFor2(e1 && e2);
  }

  if (f1.checked !== true && f2.checked !== true) {
    setErrorFor2(f1 && f2, "select an option");
  } else {
    setSuccessFor2(f1 && f2);
  }

  if (g1.checked !== true && g2.checked !== true) {
    setErrorFor2(g1 && g2, "select an option");
  } else {
    setSuccessFor2(g1 && g2);
  }

  if (h1.checked !== true && h2.checked !== true) {
    setErrorFor2(h1 && h2, "select an option");
  } else {
    setSuccessFor2(h1 && h2);
  }

  if (i1.checked !== true && i2.checked !== true) {
    setErrorFor2(i1 && i2, "select an option");
  } else {
    setSuccessFor2(i1 && i2);
  }

  if (j1.checked !== true && j2.checked !== true) {
    setErrorFor2(j1 && j2, "select an option");
  } else {
    setSuccessFor2(j1 && j2);
  }

  if (k1.checked !== true && k2.checked !== true) {
    setErrorFor2(k1 && k2, "select an option");
  } else {
    setSuccessFor2(k1 && k2);
  }
  if (l1.checked !== true && l2.checked !== true) {
    setErrorFor2(l1 && l2, "select an option");
  } else {
    setSuccessFor2(l1 && l2);
  }

  if (
    a1.checked == true &&
    b1.checked == true &&
    c1.checked == true &&
    d1.checked == true &&
    e1.checked == true &&
    f1.checked == true &&
    g1.checked == true &&
    h1.checked == true &&
    i1.checked == true &&
    j1.checked == true &&
    k1.checked == true &&
    l1.checked == true
  ) {
    setSuccessFor2(
      a1 && b1 && c1 && d1 && e1 && f1 && g1 && h1 && i1 && j1 && k1 && l1
    );
  }

  if (
    a2.checked == true &&
    b2.checked == true &&
    c2.checked == true &&
    d2.checked == true &&
    e2.checked == true &&
    f2.checked == true &&
    g2.checked == true &&
    h2.checked == true &&
    i2.checked == true &&
    j2.checked == true &&
    k2.checked == true &&
    l2.checked == true
  ) {
    setSuccessFor2(
      a2 && b2 && c2 && d2 && e2 && f2 && g2 && h2 && i2 && j2 && k2 && l2
    );
  }

  if (
    usernameValue === "" ||
    emailValue === "" ||
    !isEmail(emailValue) ||
    (m.checked !== true && f.checked !== true && o.checked !== true) ||
    (a1.checked !== true && a2.checked !== true) ||
    (b1.checked !== true && b2.checked !== true) ||
    (c1.checked !== true && c2.checked !== true) ||
    (d1.checked !== true && d2.checked !== true) ||
    (e1.checked !== true && e2.checked !== true) ||
    (f1.checked !== true && f2.checked !== true) ||
    (g1.checked !== true && g2.checked !== true) ||
    (h1.checked !== true && h2.checked !== true) ||
    (i1.checked !== true && i2.checked !== true) ||
    (j1.checked !== true && j2.checked !== true) ||
    (k1.checked !== true && k2.checked !== true) ||
    (l1.checked !== true && l2.checked !== true)
  ) {
    swal("Error", "Incorrect Input", "error");
  } else if (
    a1.checked == true &&
    b1.checked == true &&
    c1.checked == true &&
    d1.checked == true &&
    e1.checked == true &&
    f1.checked == true &&
    g1.checked == true &&
    h1.checked == true &&
    i1.checked == true &&
    j1.checked == true &&
    k1.checked == true &&
    l1.checked == true
  ) {
    swal({
      title: "Go to Hospital",
      text: "Stay Safe",
    });
  } else if (
    a2.checked == true &&
    b2.checked == true &&
    c2.checked == true &&
    d2.checked == true &&
    e2.checked == true &&
    f2.checked == true &&
    g2.checked == true &&
    h2.checked == true &&
    i2.checked == true &&
    j2.checked == true &&
    k2.checked == true &&
    l2.checked == true
  ) {
    swal({
      title: "Stay Home",
      text: "Stay Safe",
    });
  } else {
    swal({
      title: "Consult your Doctor",
      text: "Stay Safe",
    });
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}
function setErrorFor2(input, message) {
  const gen = input.parentElement;
  const small = gen.querySelector("small");
  gen.className = "gen error";
  small.innerText = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function setSuccessFor2(input) {
  const gen = input.parentElement;
  gen.className = "gen success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
