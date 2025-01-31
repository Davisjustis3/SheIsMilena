fetch('http://localhost:3001/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const dataContainer = document.getElementById('data');
      data.forEach(poem => {
      
          const poemCard = `
          <div class="poem-card">
            <h1 class="poem-name">${poem.poemName}</h1>
            <p class="poem-date">Published <span class="date-text">${poem.poemDate}</span></p>
            <hr>
            <p class="poem-text">${poem.poemText}</p>
          </div>  
          `;
          dataContainer.innerHTML += poemCard;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
