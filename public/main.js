function getAllExcuses(){
    axios.get('http://localhost:5000/excuse')
    .then(res=>{
        console.log(res.data);
        for(let el of res.data){
            $('.excuseBox').append(`
                <div class="excuse">${el.mesexcuse}</div>
            `)
        }
    })
}
getAllExcuses()