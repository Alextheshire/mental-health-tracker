const loginForm = document.getElementById('login')
const signupForm = document.getElementById('signup')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const loginEmail = document.getElementById('email').value
    const loginPassword = document.getElementById('password').value

    if(loginEmail && loginPassword){
        const resp = await fetch('/login', 
        {
            method: 'POST',
            body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            console.log(resp);
            location.replace('/profile');
        } else {
            alert('Incorrect information')
        }
    }
});

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const signupEmail = document.getElementById('signupemail').value
    const signupPassword = document.getElementById('signuppassword').value
    const signupfirstname = document.getElementById('signupfirstname').value
    const signuplastname = document.getElementById('signuplastname').value

    if(signupEmail && signupPassword && signupfirstname && signuplastname){
        const resp = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ email:signupEmail, password:signupPassword, first_name:signupfirstname, last_name:signuplastname }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            location.href = '/profile'
        } else {
            alert("signup fail")
        }
    }
});