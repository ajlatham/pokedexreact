import axios from 'axios';




const Regions = {
  getRegionsList: function() {
    return axios.get('http://pokeapi.co/api/v2/region')
    .then(function (response) {
      console.log('getRegionsList', response);
      return response.data;

    })
    .catch(function (error) {
      console.log(error);

    });
  }
};

export default Regions;
