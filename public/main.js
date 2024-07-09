
$('.generation').click(function getNewExcuse(){
    axios.get('http://localhost:5000/excuse')
    .then(res=>{
        // console.log(res.data);
        let num=(Math.floor(Math.random()*res.data.length));
        $('.generatedExcuse').empty();
        $('.avtor').empty();
        $('.generatedExcuse').append(res.data[num].mesexcuse);
        $('.avtor').append(res.data[num].avtor);
        $('.excuses').append(`
            <div class="historicExcuse">
            <div class="historicMes">${res.data[num].mesexcuse}</div>
            <div class="historicAvtor">${res.data[num].avtor}</div>
            </div>
            `)
        
        
    })
  })
