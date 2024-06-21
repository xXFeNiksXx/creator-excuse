function getAllExcuses(){
    axios.get('http://localhost:5000/excuse')
    .then(res=>{
        for(let el of res.data){
            $('.excuseBox').append(`
                <div class="excuse">${el.excuse}</div>
            `)
        }
        console.log(res.data)
    })
}
getAllExcuses()