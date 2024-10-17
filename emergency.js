document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const requestData = {
        name: document.getElementById('name').value,
        location: document.getElementById('location').value,
        assistance: document.getElementById('assistance').value,
        urgency: document.getElementById('urgency').value
    };

    // Send request data to the server/database
    fetch('/submit-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Request submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
