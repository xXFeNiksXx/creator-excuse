document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addBtn').addEventListener('click', function() {
        const excuseText = document.getElementById('excuseText').value;

        fetch('http://localhost:3000/add-excuse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: excuseText })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert('Excuse added successfully!');
            } else {
                alert('Error: ' + data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
