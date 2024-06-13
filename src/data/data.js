export const links = [
    {
        title: 'Главная',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: 'Покупать',
        url: '/products',
        cName: 'nav-links'
    },
    {
        title: 'Контакты',
        url: '/contact',
        cName: 'nav-links'
    },
    {
        title: 'Новости',
        url: '/blog',
        cName: 'nav-links'
    },
    {
        title: 'Адресс',
        url: '/address',
        cName: 'nav-links'
    },
]

import bannerImage01 from '../images/banner/bannerImage01.jpg'
import bannerImage02 from '../images/banner/bannerImage02.jpg'
import bannerImage03 from '../images/banner/bannerImage03.jpg'
import bannerImage04 from '../images/banner/bannerImage04.jpg'
import bannerImage05 from '../images/banner/bannerImage05.jpg'

export const banners = [
    {
        title: 'ООО «Кумир Таъминот»  филиал Республики Каракалпакистан.',
        image: bannerImage01
    },
    {
        title: 'Есть шесть складов',
        image: bannerImage02
    },
    {
        title: 'Поставка угля по всей территории Республики.',
        image: bannerImage03
    },
    {
        title: 'От  шахты к покупателю',
        image: bannerImage04
    },
    {
        title: 'Марка 2БР',
        image: bannerImage05
    },
]

import productImage01 from '../images/products/product01.png'  
import productImage02 from '../images/products/product02.png'  


export const products = [
    {
        id:1,
        image: productImage01,
        price: 309800,
        size: '0-300 mm',
        kcal: 2800,
        ash: 17,
        count: 1,
        mark: '2БР' 
    },
    {
        id:2,
        image: productImage02,
        price: 431400,
        size: '0-300 mm',
        kcal: 2800,
        ash: 17,
        count: 1,
        mark: '2БЗР' 
    },
]

import teamImage01 from '../images/team/aybek.jpg'
import teamImage02 from '../images/team/hurliman.jpg'
import teamImage03 from '../images/team/murat.jpg'
import teamImage04 from '../images/team/shayda.jpg'
import teamImage05 from '../images/team/ulmas.jpg'
import teamImage06 from '../images/team/arziw.jpg'
import teamImage07 from '../images/team/mansur.jpg'
import teamImage08 from '../images/team/tilepbay.jpg'
import teamImage09 from '../images/team/xitjan.jpg'


export const team = [
    {
        id: 1,
        image: teamImage01,
        name: 'Бекимбетов Айбек Ильясович',
        title: 'Руководитель филиала',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 2,
        image: teamImage02,
        name: 'Хурлиман',
        title: 'Помощьница гл.бухгалтера ',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 3,
        image: teamImage03,
        name: 'Кошетеров Муратбай Хожабаевич',
        title: 'Экономист',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 4,
        image: teamImage04,
        name: 'Раззаков Шайдабек Саттарович',
        title: 'Начальник склад Турткулского района ',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 5,
        image: teamImage05,
        name: 'Купалов Улмас',
        title: 'Начальник склад Элликкалинский района ',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 6,
        image: teamImage06,
        name: 'Арзыу',
        title: 'Начальник склад город Нукусского ',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 7,
        image: teamImage07,
        name: 'Бекмуратов Мансур',
        title: 'Начальник склад Кунградского склада ',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 8,
        image: teamImage08,
        name: 'Менликулов Тилепбай',
        title: 'Начальник склад Чимбайского склада ',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
    {
        id: 9,
        image: teamImage09,
        name: 'Матекеев Хитжан',
        title: 'Главный бухгальтер филиала',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloribus unde laborum dolor facilis accusantium corrupti, mollitia tempore esse rerum."
    },
]

import partnerImage01 from '../images/partner/school.png'
import partnerImage02 from '../images/partner/inno.svg'
// import partnerImage03 from '../images/partner/sogliq.png'
import partnerImage04 from '../images/partner/sport.jpg'
import partnerImage05 from '../images/partner/madaniyat.png'

export const partner = [
    {
        id:1,
        image: partnerImage01,
        title: 'Мактаб ва мактабгача талим вазирлиги',
    },
    {
        id:2,
        image: partnerImage02,
        title: 'Юкори таълим, фан ва инновация вазирлиги',
    },
    {
        id:4,
        image: partnerImage04,
        title: 'Спорт  вазирлиги',
    },
    {
        id:5,
        image: partnerImage05,
        title: 'Маданият вазирлиги',
    },
]

// import LocTurtlul from 'https://maps.app.goo.gl/WYBjYpECHR5zgCr16'

export const adresses = [
    {
        id: 1,
        // location: LocTurtlul,
        adress: 'Турткулский район, Пахтачи ССГ',
        boss: 'Раззаков Шайдабек Саттарович',
        phone: "+998973569111",
        text: '',
        image: teamImage04
    },
    {
        id: 2,
        // location: LocTurtlul,
        adress: 'Элликкальа район, Думанкальа ССГ',
        boss: 'Купалов Улмас',
        phone: "+998934514333",
        image: teamImage05,
        text: ''
    },
    {
        id: 3,
        // location: LocTurtlul,
        adress: 'город Нукус, Промыщленного зона',
        boss: 'Арзыу',
        phone: "+998934511917",
        image: teamImage06,
        text: ''
    },
    {
        id: 4,
        // location: LocTurtlul,
        adress: 'Чимбайского район, Тагжап ССГ',
        boss: 'Менликулов Тилепбай',
        phone: "+998934516768",
        image: teamImage08,
        text: ''
    },
    {
        id: 5,
        // location: LocTurtlul,
        adress: 'Кунградского район, Санаат ССГ',
        boss: 'Бекмуратов Мансур',
        phone: "+998934519333",
        image: teamImage07,
        text: ''
    },
    {
        id: 6,
        // location: LocTurtlul,
        adress: 'Амударинского район, Куюк-купир ССГ',
        boss: 'Файзирахман',
        phone: "+998934511579",
        image: teamImage04,
        text: ''
    },
]