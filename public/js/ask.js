

$("#datepicker").datepicker();
$("#datepicker").datepicker("option", "dateFormat", "yy-mm-dd");

$("#form-submit").on("click", async (event) => {
    event.preventDefault();
    const date = $("#datepicker").val();
    const selfharm_grade = $("#self-harm")[0];
    const use_grade = $("#use")[0];
    const suicidal_thoughts_grade = $("#suicidal-thoughts")[0];
    const ovrl_emotion_grade = $("#ovrl-emotion")[0];
    const self_accept_grade = $("#self-accept")[0];
    const anger_grade = $("#anger")[0];
    const joy_grade = $("#joy")[0];
    const shame_grade = $("#shame")[0];
    const sadness_grade = $("#sadness")[0];
    const fear_grade = $("#fear")[0];
    const notes = $("#notes-body").val();
    let selfharm;
    let use;
    let suicidal_thoughts;
    let ovrl_emotion;
    let self_accept;
    let anger;
    let joy;
    let shame;
    let sadness;
    let fear;

    for (const radio of selfharm_grade) {
        if(radio.checked){
            selfharm = parseInt(radio.value)
        }
    }
    for (const radio of use_grade) {
        if(radio.checked){
            use = parseInt(radio.value)
        }
    }
    for (const radio of suicidal_thoughts_grade) {
        if(radio.checked){
            suicidal_thoughts = parseInt(radio.value)
        }
    }
    for (const radio of ovrl_emotion_grade) {
        if(radio.checked){
            ovrl_emotion = parseInt(radio.value)
        }
    }
    for (const radio of self_accept_grade) {
        if(radio.checked){
            self_accept = parseInt(radio.value)
        }
    }
    for (const radio of anger_grade) {
        if(radio.checked){
            anger = parseInt(radio.value)
        }
    }
    for (const radio of joy_grade) {
        if(radio.checked){
            joy = parseInt(radio.value)
        }
    }
    for (const radio of shame_grade) {
        if(radio.checked){
            shame = parseInt(radio.value)
        }
    }
    for (const radio of sadness_grade) {
        if(radio.checked){
            sadness = parseInt(radio.value)
        }
    }
    for (const radio of fear_grade) {
        if(radio.checked){
            fear = parseInt(radio.value)
        }
    }
    // if(date&&selfharm&&use&&suicidal_thoughts&&ovrl_emotion&&self_accept&&anger&&joy&&sadness&&shame&&fear){
        
    // } else {
    //     alert("Please fill out every field.")
    // }
    const resp = await fetch('/newForm', {
        method: 'POST',
        body: JSON.stringify({
            date: date,
            selfharm_grade: selfharm,
            use_grade: use,
            suicidal_thoughts_grade:suicidal_thoughts,
            ovrl_emotion_grade:ovrl_emotion,
            self_accept_grade:self_accept,
            anger_grade:anger,
            joy_grade:joy,
            shame_grade:shame,
            sadness_grade:sadness,
            fear_grade:fear,
            notes:notes
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    
    if (resp.ok) {
        location.href = '/form'
    } else {
        alert('Error')
    }
    
})