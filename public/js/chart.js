const ctx = document.getElementById('myChart').getContext('2d');
const line = document.getElementById('myLine')

const createChart = async () => {
    const response = await fetch('/api/chart');
    const res = await response.json()
    selfHarmChart = 0
    shameChart = 0
    suicidalChart = 0
    angerChart = 0
    fearChart = 0
    sadnessChart = 0
    joyChart = 0
    compassionChart = 0
    selfAcceptChart = 0
    durationChart= 0
        for (i = 0; i < 7; i++) {
            if (res.length-1 >= i){
                selfHarmChart = selfHarmChart + ((res[i].selfharm_grade))
                shameChart = shameChart + ((res[i].shame_grade))
                suicidalChart = suicidalChart + ((res[i].suicidal_thoughts_grade))
                angerChart = angerChart + ((res[i].anger_grade))
                fearChart = fearChart + ((res[i].fear_grade))
                sadnessChart = sadnessChart + ((res[i].sadness_grade))
                joyChart = joyChart + ((res[i].joy_grade))
                compassionChart = compassionChart + ((res[i].ovrl_emotion_grade))
                selfAcceptChart = selfAcceptChart + ((res[i].self_accept_grade))
                durationChart++
            }
    }
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Self Harm', 'Anger', 'Fear', 'Joy', 'Compassion', 'Sadness', 'Self Accept', 'Shame', 'Suicical Thoughts'],
            datasets: [{
                label: `Choice out of 5 for the last ${durationChart} days`,
                data: [selfHarmChart/durationChart, angerChart/durationChart, fearChart/durationChart, joyChart/durationChart, compassionChart/durationChart, sadnessChart/durationChart, selfAcceptChart/durationChart, shameChart/durationChart, suicidalChart/durationChart],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 159, 64, 0.2)',
                    'rgba(50, 50, 64, 0.2)',
                    'rgba(255, 50, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 159, 64, 1)',
                    'rgba(50, 20, 64, 1)',
                    'rgba(255, 50, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
const createUrge = async () => {
    selfHarm = []
    shame = []
    suicidal = []
    urgeDays= []
    const response = await fetch('/api/chart');
    const res = await response.json()
    for (i = 0; i < res.length; i++) {
        selfHarm.push(res[i].selfharm_grade)
        shame.push(res[i].shame_grade)
        suicidal.push(res[i].suicidal_thoughts_grade)
        urgeDays.push('day ' + i)
    }
    const data = {
        labels: urgeDays,
        datasets: [{
            label: 'selfHarm',
            data: selfHarm,
            fill: false,
            borderColor: 'rgb(255, 99, 132, 1)',
            tension: 0.1
        },{
            label: 'shame',
            data: shame,
            fill: false,
            borderColor: 'rgb(50, 20, 64, 1)',
            tension: 0.1
        },{
            label: 'suicidal',
            data: suicidal,
            fill: false,
            borderColor: 'rgb(255, 50, 255, 1)',
            tension: 0.1
        }]
    }
    const config = {
        type: 'line',
        data: data,
      };
      
    const myLine = new Chart(
        document.getElementById('myLine'),
        config
    )
}
const createStresses = async () => {
    anger = []
    fear = []
    sadness = []
    stressDays= []
    const response = await fetch('/api/chart');
    const res = await response.json()
    for (i = 0; i < res.length; i++) {
        anger.push(res[i].anger_grade)
        fear.push(res[i].fear_grade)
        sadness.push(res[i].sadness_grade)
        stressDays.push('day ' + i)
    }
    const data = {
        labels: stressDays,
        datasets: [{
            label: 'anger',
            data: anger,
            fill: false,
            borderColor: 'rgb(54, 162, 235, 1)',
            tension: 0.1
        },{
            label: 'sadness',
            data: sadness,
            fill: false,
            borderColor: 'rgb(255, 159, 64, 1)',
            tension: 0.1
        },{
            label: 'fear',
            data: fear,
            fill: false,
            borderColor: 'rgb(255, 206, 86, 1)',
            tension: 0.1
        }]
    }
    const config = {
        type: 'line',
        data: data,
      };
      
    const myLine = new Chart(
        document.getElementById('myLine2'),
        config
    )
}
const createAcceptable = async () => {
    joy = []
    compassion = []
    selfAccept = []
    accpetableDays = []
    const response = await fetch('/api/chart');
    const res = await response.json()
    for (i = 0; i < res.length; i++) {
        joy.push(res[i].joy_grade)
        compassion.push(res[i].ovrl_emotion_grade)
        selfAccept.push(res[i].self_accept_grade)
        accpetableDays.push('day ' + i)
    }
    const data = {
        labels: accpetableDays,
        datasets: [{
            label: 'joy',
            data: joy,
            fill: false,
            borderColor: 'rgb(75, 192, 192, 1)',
            tension: 0.1
        },{
            label: 'compassion',
            data: compassion,
            fill: false,
            borderColor: 'rgb(153, 102, 255, 1)',
            tension: 0.1
        },{
            label: 'Self Accept',
            data: selfAccept,
            fill: false,
            borderColor: 'rgb(0, 159, 64, 1)',
            tension: 0.1
        }]
    }
    const config = {
        type: 'line',
        data: data,
      };
      
    const myLine = new Chart(
        document.getElementById('myLine3'),
        config
    )
}
createUrge();
createStresses();
createAcceptable();
createChart();