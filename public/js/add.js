const emailSearch = $('#emailSearch').val()
const searchForm = document.getElementById('patientSearch')
var foundPatient

searchForm.addEventListener("submit",async(event)=>{
    event.preventDefault()
    const emailSearch = $('#emailSearch').val()
    console.log("works")
    console.log(emailSearch)
    if(emailSearch){   
        fetch(`/lookup/${emailSearch}`)
        .then(response => response.json())
        .then(data => {
            const name = data.first_name + ' ' + data.last_name
            $('#populate').text(name);
            foundPatient = data.id
        });
        }
    })
$("#add").on("click",async ()=>{
    console.log(foundPatient)
    fetch('/prof/add', {
        method: 'PUT',
        body: JSON.stringify({ id:foundPatient }),
        headers: { 'Content-Type': 'application/json' }
    }).then((response)=>{
        alert("User Added")
        location.href= '/prof/patients'
    })
})        