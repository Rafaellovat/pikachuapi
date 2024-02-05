const getPikachuData = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Dados do Pikachu:', data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do Pikachu:', error);
      });
  };
  
  export default getPikachuData;