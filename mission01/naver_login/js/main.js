const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* element */

const emailInput = document.querySelector(".user-email-input");
const pwInput = document.querySelector(".user-password-input");
const loginForm = document.querySelector(".login-form");
const loginErrorMsg = document.querySelector(".login-error-message");

/* input event */

function handleEmailInput() {
  checkEmailValidation(emailInput.value);
}
emailInput.addEventListener("input", handleEmailInput);

function handlePwInput() {
  checkPasswordValidation(pwInput.value);
}
pwInput.addEventListener("input", handlePwInput);

/* check email validation */

function checkEmailValidation(email) {
  if (email == "") {
    emailInput.classList.remove("is--invalid");
  } else if (emailReg(email) == true) {
    emailInput.classList.remove("is--invalid");
  } else if (emailReg(email) == false) {
    emailInput.classList.add("is--invalid");
  }
}

/* check password validation */

function checkPasswordValidation(pwd) {
  if (pwd == "") {
    pwInput.classList.remove("is--invalid");
  } else if (pwReg(pwd) == true) {
    pwInput.classList.remove("is--invalid");
  } else if (pwReg(pwd) == false) {
    pwInput.classList.add("is--invalid");
  }
}

/* login */

function login(event) {
  event.preventDefault();
  if (emailInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = "welcome.html";
  } else if (emailInput.value !== user.id && pwInput.value !== user.pw) {
    loginErrorMsg.classList.remove("hidden");
  }
}
loginForm.addEventListener("submit", login);
