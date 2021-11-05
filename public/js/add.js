const emailSearch = $('#emailSearch').val()
const searchForm = document.getElementById('patientSearch')

searchForm.addEventListener("submit",async(event)=>{
    event.preventDefault()
    if(emailSearch){
        const resp = await fetch('/prof/login', {
            method: 'POST',
            body: JSON.stringify({ email: emailSearch}),
            headers: { 'Content-Type': 'application/json' }
        })
        if(resp.ok){
            const search = await fetch(`/lookup/${emailSearch}`)
            console.log(search)
        }
    }
})

