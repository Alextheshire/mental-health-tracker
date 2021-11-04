const ctx = document.getElementById('myChart').getContext('2d');
const line = document.getElementById('myLine')

const createChart = async () => {
    const response = await fetch('/api/user');
    const res = await response.json()
    console.log(res.Data)
    console.log(res.Data[0].selfharm_grade)
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Self Harm', 'anger_grade', 'fear_grade', 'joy_grade', 'ovrl_emotion_grade', 'sadness_grade', 'self_accept_grade', 'shame_grade', 'suicidal_thoughts_grade'],
            datasets: [{
                label: '# of Votes',
                data: [null, res.Data[1].anger_grade, res.Data[1].fear_grade, res.Data[1].joy_grade, res.Data[1].ovrl_emotion_grade, res.Data[1].sadness_grade, res.Data[1].self_accept_grade, res.Data[1].shame_grade, res.Data[1].suicidal_thoughts_grade],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
const createLine = async () => {
    selfHarm = []
    shame = []
    suicidal = []
    week= []
    const response = await fetch('/api/user');
    const res = await response.json()
    for (i = 0; i < res.Data.length; i++) {
        selfHarm.push(res.Data[i].selfharm_grade)
        shame.push(res.Data[i].shame_grade)
        suicidal.push(res.Data[i].suicidal_thoughts_grade)
        week.push('week ' + i)
    }
    const data = {
        labels: week,
        datasets: [{
            label: 'selfHarm',
            data: selfHarm,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: anger,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: fear,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
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
const createLine = async () => {
    anger = []
    fear = []
    sadness = []
    const response = await fetch('/api/user');
    const res = await response.json()
    for (i = 0; i < res.Data.length; i++) {
        anger.push(res.Data[i].anger_grade)
        fear.push(res.Data[i].fear_grade)
        sadness.push(res.Data[i].sadness_grade)
    }
    const data = {
        labels: ['week1', 'week2', 'week3'],
        datasets: [{
            label: 'selfHarm',
            data: selfHarm,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: anger,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: fear,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: joy,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: overall,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: sadness,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: selfAccept,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: shame,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: suicidal,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
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
const createLine = async () => {
    selfHarm = []
    anger = []
    fear = []
    joy = []
    compassion = []
    sadness = []
    selfAccept = []
    shame = []
    suicidal = []
    const response = await fetch('/api/user');
    const res = await response.json()
    for (i = 0; i < res.Data.length; i++) {
        selfHarm.push(res.Data[i].selfharm_grade)
        anger.push(res.Data[i].anger_grade)
        fear.push(res.Data[i].fear_grade)
        joy.push(res.Data[i].joy_grade)
        compassion.push(res.Data[i].ovrl_emotion_grade)
        sadness.push(res.Data[i].sadness_grade)
        selfAccept.push(res.Data[i].self_accept_grade)
        shame.push(res.Data[i].shame_grade)
        suicidal.push(res.Data[i].suicidal_thoughts_grade)
    }
    const data = {
        labels: ['week1', 'week2', 'week3'],
        datasets: [{
            label: 'selfHarm',
            data: selfHarm,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: anger,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: fear,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: joy,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: overall,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: sadness,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: selfAccept,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: shame,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'selfHarm',
            data: suicidal,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
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
createLine();
createChart();