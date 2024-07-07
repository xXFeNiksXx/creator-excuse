// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('addBtn').addEventListener('click', function() {
//         const excuseText = document.getElementById('excuseText').value;

//         fetch('http://localhost:5000/add-excuse', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: excuseText })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.message) {
//                 alert('Excuse added successfully!');
//             } else {
//                 alert('Error: ' + data.error);
//             }
//         })
//         .catch(error => console.error('Error:', error));
//     });
// });
$('#addBtn').click(function(){
    axios.post('http://localhost:5000/add-excuse', {
        mesexcuse:$('#excuseText').val(),
        avtor:$('#avtor').val()
    })
    .then(response => {
      console.log( response.data);
    })
    .catch(error => {
      console.error('Помилка при відправці даних:', error);
    });
})

function getAllExcuses(){
  axios.get('http://localhost:5000/excuse')
  .then(res=>{
      console.log(res.data);
      for(let el of res.data){
          $('.allExcuses').append(`
            <div class="excuse">
            <div class="text">${el.mesexcuse}</div>
               <div class="avtor">${el.avtor}</div>
            </div>
              
          `)
      }
  })
}
getAllExcuses()
