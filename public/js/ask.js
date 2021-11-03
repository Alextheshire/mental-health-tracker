

$("#datepicker").datepicker();
$("#datepicker").datepicker("option", "dateFormat", "yy-mm-dd");

$("#form-submit").on("click", async (event) => {
    event.preventDefault();
    const date = $("#datepicker").val();
    const selfharm_grade = parseInt($("#s-h-select").val());
    const use_grade = parseInt($("#use-select").val());
    const suicidal_thoughts_grade = parseInt($("#s-t-select").val());
    const ovrl_emotion_grade = parseInt($("#ovrl-select").val());
    const self_accept_grade = parseInt($("#accept-select").val());
    const anger_grade = parseInt($("#anger-select").val());
    const joy_grade = parseInt($("#joy-select").val());
    const shame_grade = parseInt($("#shame-select").val());
    const sadness_grade = parseInt($("#sad-select").val());
    const fear_grade = parseInt($("#fear-select").val());
    const notes = $("#notes-body").val()

    const resp = await fetch('/newForm', {
        method: 'POST',
        body: JSON.stringify({
            date: date,
            selfharm_grade: selfharm_grade,
            use_grade: use_grade,
            suicidal_thoughts_grade:suicidal_thoughts_grade,
            ovrl_emotion_grade:ovrl_emotion_grade,
            self_accept_grade:self_accept_grade,
            anger_grade:anger_grade,
            joy_grade:joy_grade,
            shame_grade:shame_grade,
            sadness_grade:sadness_grade,
            fear_grade:fear_grade,
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
