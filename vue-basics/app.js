const app = Vue.createApp({
    data() {
        return {
            url: 'http://jorgeolivas.es',
            title: 'Las aventuras de Olivas',
            author: 'Arthur Conan Doyle',
            age: 32,
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'La comunidad del anillo', url: 'https://www.amazon.es/Anillos-Comunidad-Anillo-Biblioteca-Tolkien/dp/8445009591/ref=sr_1_1?crid=11767ONOMX4PL&keywords=la+comunidad+del+anillo&qid=1703807948&sprefix=la+comunidad+del+%2Caps%2C85&sr=8-1', img: '/img/lacomunidad.jpg', author: 'JRR Tolkien', isFav: true},
                {title: 'El cáliz de fuego', url: 'https://www.amazon.es/Harry-Potter-Caliz-Fuego-Rowling/dp/8478886451/ref=sr_1_1?crid=QZKNAL90YSD9&keywords=harry+potter+y+el+c%C3%A1liz+de+fuego&qid=1703807977&sprefix=el+c%C3%A1liz+de+fuego%2Caps%2C85&sr=8-1', author: 'JK Rowling', img: '/img/elcalizdefuego.jpg', isFav: false},
                {title: 'Manolito Gafotas', url: 'https://www.amazon.es/Manolito-Gafotas-Biblioteca-furtiva-Elvira/dp/843221423X/ref=sr_1_1?crid=FMQVIVK1ARY7&keywords=manolito+gafotas&qid=1703807995&sprefix=manolito+gafotas%2Caps%2C158&sr=8-1', author: 'Elvira Lindo', img: '/img/manolitogafotas.jpg', isFav: false}
            ]
        }
    },
    methods: {
        changeName(tt){
            // this = component itself
            this.title = tt
        },
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, n){
            console.log(e, e.type)
            if(n) console.info(n)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            console.log(this.x,this.y)
        },
        toogleFav(book){
            book.isFav = !book.isFav
        } 
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    },
})
app.mount('#app')