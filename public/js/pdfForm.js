var element = document.getElementById('dbtForm');
var date = $("#pdfDate").text()
var button = $("#printBtn")
var opt = {
    margin:       1,
    filename:     `dbtCard-${date}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
  };

  button.on("click",()=>{

      html2pdf(element,opt);

  })