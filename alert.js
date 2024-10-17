fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=10.5276&lon=76.2140&exclude=minutely,hourly&appid=db9f4d27f8c57be4e56cde588bd866ca`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Check if data is being received
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
