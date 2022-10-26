const products = [

    { 
        id: '1', 
        name: 'Recorrido Yungas', 
        price: 38000, 
        category: 'yungas', 
        img:'https://resizer.glanacion.com/resizer/qAEix2uAUg1QJFpj_x2Xzuj1wws=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/27B6OPJ7DZDNVCWAZ5TYWY4YPQ.jpg', 
        stock: 10, 
        description:'Partiendo desde capital, incluye traslado en camioneta hasta la localidad de San Francisco. Recorreremos el Parque Nacional Calilegua y las Termas de Jordán, con hospedaje incluído en cercanías a ellas'
    },
    { 
        id: '2', 
        name: 'Recorrido Norte', 
        price: 45000, 
        category: 'norte', 
        img:'https://descubrir.online/wp-content/uploads/2022/03/purmamarca-jujuy-13.jpg', 
        stock: 5, 
        description:'Incluye traslado desde capital hasta la localidad de Purmamarca, visita a los cerros de siete colores, pucará de Tilcara y Humahuaca. Hospedaje de dos noches en hostal "quebrada de humahuaca"'
    },
    { 
        id: '3', 
        name: 'Circuito de los diques, Termas de Reyes y Yala', 
        price: 25000, 
        category: 'valles', 
        img:'https://media-cdn.tripadvisor.com/media/photo-s/0c/40/be/f4/fuimos-un-domingo-que.jpg', 
        stock: 11, 
        description:'Partiremos hacia la Localidad de "El carmen" pasando por el "dique las maderas" para luego continuar el recorrido hasta el "Dique de las ciénagas" donde almorzaremos en el restaurante con vista al mismo. Continuaremos el recorrido hasta llegar a las "Lagunas de Yala" para finalizar en "Termas de Reyes" donde pasaremos la noche en el hotel homónimo con aguas termales, spa y cena incluída'
    },
    { 
        id: '4', 
        name: 'Salinas Grandes y Cerro Huancar', 
        price: 15000, 
        category: 'norte', 
        img:'https://us.cdn.eltribuno.com/092019/1567351238773.jpg?&cw=720', 
        stock: 35, 
        description:'Nos dirigiremos desde San Salvador de Jujuy hacia las Salinas Grandes, donde realizaremos un pequeño recorrido y tomaremos las típicas fotos del lugar, continuaremos por ruta n°9 hacia el "cerro huancar" donde luego de almorzar realizaremos Sandboard. Almuerzo y alquiler de tablas incluído.'
    },
    { 
        id: '5', 
        name: 'Paso Valle Colorado Santa Ana', 
        price: 40000, 
        category: 'yungas', 
        img:'https://www.cultura.gob.ar/media/uploads/qhapac_%C3%B1an.jpg', 
        stock: 8, 
        description:'Por la tarde partiremos hacia la localidad de "Valle Colorado" donde cenaremos y nos hospedaremos para pasar la noche. Por la mañana iniciaremos el recorrido a cargo de dos guías, de ocho horas aproximadamente, donde experimentaremos el magnífico cambio de flora y fauna entre las regiones de yungas y puna que nos ofrece el "camino del inca", al llegar a Santa Ana, degustaremos comidas típicas del lugar y pasaremos la noche.'
    },
    { 
        id: '6', 
        name: 'Jujuy Histórico y city tour', 
        price: 6500, 
        category: 'valles', 
        img:'https://us.cdn.eltribuno.com/042018/1523799019404.jpg', 
        stock: 25, 
        description:'En este recorrido conoceremos los principales centros históricos de Jujuy y, a su vez, los principales centros interactivos de la ciudad para luego finalizar el recorrido almorzando en un restaurante de comidas típicas.'
    }
]

export const getProducts = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products.find(product => product.id === id) )
        }, 2000)
    })
}

