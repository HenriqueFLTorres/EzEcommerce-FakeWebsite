import axios from 'axios'

export const baseUrl = 'https://amazon24.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
    params: {country: 'US', page: '1', categoryID: 'aps', keyword: 'iphone'},
    headers: {
        'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
        'X-RapidAPI-Key': '18bae36b1dmsha36fdb2ce7dbf19p185b5ejsncdf5fffbc139'
        }
    })

    return data;
}