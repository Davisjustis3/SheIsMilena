fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => {
                const dataDiv = document.getElementById('data');
                data.forEach(item => {
                    const p = document.createElement('p');
                    p.textContent = JSON.stringify(item);
                    dataDiv.appendChild(p);
                });
            })
            .catch(error => console.error('Error fetching data:', error));