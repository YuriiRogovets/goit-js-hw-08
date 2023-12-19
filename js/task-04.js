const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleForm);

const obj = {};
function handleForm(event) {
    event.preventDefault();
    const emailEl = loginForm.elements.email.value;
    const psswordEl = loginForm.elements.password.value;
	if (emailEl === "" || psswordEl === "") {
       return alert ('All form fields must be filled in');
    }

    obj.email = emailEl.trim();
    obj.password = psswordEl.trim();
    console.log(obj);
    loginForm.reset();
};