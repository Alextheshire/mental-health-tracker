const loginFormPro = document.getElementById('login')
const signupFormPro = document.getElementById('signupFormPro')

console.log('hi');

loginFormPro.addEventListener('enter', async (e) => {
    console.log('hey');
    e.preventDefault()
    const loginEmail = document.getElementById('email').value
    const loginPassword = document.getElementById('password').value

    if(loginEmail && loginPassword){
        const resp = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            location.href = '/profProfile'
        } else {
            alert('Incorrect information')
        }
    }
});

signupFormPro.addEventListener('enter2', async (e) => {
   console.log('hello');
    e.preventDefault()
    const signupemailpro = document.getElementById('healthsignupemail').value
    const signupPasswordpro = document.getElementById('healthsignuppassword').value
    const signupfirstnamepro = document.getElementById('healthsignupfirstname').value
    const signuplastnamepro = document.getElementById('healthsignuplastname').value
    const signuptitle = document.getElementById('healthsignuptitle').value
    const signupinst = document.getElementById('healthsignupinst').value
    console.log("HEllO");
    if(signupPasswordpro.length < 8){
        alert("Please make your password at least 8 characters.")
        return
    }
    if(signupemailpro && signupPasswordpro && signupfirstnamepro && signuplastnamepro && signuptitle && signupinst){
        const resp = await fetch('/profsignup', {
            method: 'POST',
            body: JSON.stringify({ email:signupemailpro, password:signupPasswordpro, first_name:signupfirstnamepro, last_name:signuplastnamepro,
             title:signuptitle,
            institution:signupinst}),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            location.href = '/profile'
        } else {
            alert("signup fail")
        }
    }
});

