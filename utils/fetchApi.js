// import axios from 'axios'

// export const baseUrl = 'https://amazon24.p.rapidapi.com'

// // const options = {
// //     method: 'GET',
// //     url: 'https://amazon24.p.rapidapi.com/api/product',
// //     params: {categoryID: 'aps', keyword: 'iphone', country: 'US', page: '1'},
    
// //   };
  
// //   axios.request(options).then(function (response) {
// //       console.log(response.data);
// //   }).catch(function (error) {
// //       console.error(error);
// //   });

// export const fetchApi = async (url) => {
//     const { data } = await axios.get((url), {
//     params: {country: 'BR', page: '1', categoryID: 'aps', keyword: 'iphone'},
//     headers: {
//         'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
//         'X-RapidAPI-Key': '18bae36b1dmsha36fdb2ce7dbf19p185b5ejsncdf5fffbc139'
//         }
//     })

//     return data;
// }