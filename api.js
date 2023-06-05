function fetchSimpsonsData() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
     .then(response => response.json())
      .then(data => {

    const imageUrl = data[0].image;
      const characterName = data[0].character;
      const quote = data[0].quote;

      // Afficher les informations récupérées
      console.log('Image URL:', imageUrl);
      console.log('Character Name:', characterName);
      console.log('Quote:', quote);

      })

  }

  fetchSimpsonsData();