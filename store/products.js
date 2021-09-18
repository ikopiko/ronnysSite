const state = () => ({
    all: [
        {
            id: 1,
            name: 'Papa Ronny',
            price: 18.20,
            offer: true,
            offerPrice: 3,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img1.jpg'),
            imageHover: require('../assets/img/img-hover1.jpg'),
            timePeriod: true,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 2,
            name: 'Driftin’',
            price: 24.30,
            offer: false,
            offerPrice: 3,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img2.jpg'),
            imageHover: require('../assets/img/img-hover2.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 3,
            name: '4X4',
            price: 26.80,
            offer: true,
            offerPrice: 5,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img3.jpg'),
            imageHover: require('../assets/img/img-hover3.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 4,
            name: 'Supreme',
            price: 26.80,
            offer: false,
            offerPrice: 7,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img4.jpg'),
            imageHover: require('../assets/img/img-hover4.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 5,
            name: 'Hot Rod',
            price: 26.80,
            offer: true,
            offerPrice: 7,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img5.jpg'),
            imageHover: require('../assets/img/img-hover5.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 6,
            name: 'Cheesy Veggie',
            price: 22.80,
            offer: false,
            offerPrice: 7,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img6.jpg'),
            imageHover: require('../assets/img/img-hover6.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 7,
            name: 'Smokin’',
            price: 23.60,
            offer: true,
            offerPrice: 4,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img7.jpg'),
            imageHover: require('../assets/img/img-hover7.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
        {
            id: 8,
            name: 'Cruiser',
            price: 23.60,
            offer: false,
            offerPrice: 4,
            latest: true,
            bestSellers: false,
            trending: false,
            image: require('../assets/img/img8.jpg'),
            imageHover: require('../assets/img/img-hover8.jpg'),
            timePeriod: false,
            dateTime: new Date("December 19, 2020 17:00:00 PDT")
        },
       
    ]
});

export default {
    state
};