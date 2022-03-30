let a = [
    {
        "id": 1,
        "title": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad",
        "image": "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
        "price": 979,
        "amount": 1
    },
    {
        "id": 2,
        "title": "2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray",
        "image": "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg",
        "price": 1999,
        "amount": 1
    },
    {
        "id": 1,
        "title": "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad",
        "image": "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
        "price": 979,
        "amount": 1
    }
]


// if ( Object.values(a) )
// let b = Object.values(a).filter((item) => item.id === 1 && item.amount++)
Object.values(a).map(item => console.log(item))
console.log(Object.values(a).map(item => item));