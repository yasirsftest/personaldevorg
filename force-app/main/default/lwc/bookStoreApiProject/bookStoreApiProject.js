import { LightningElement } from 'lwc';
const BOOK_API = 'https://www.googleapis.com/books/v1/volumes?q='

export default class BookStoreApiProject extends LightningElement {
    query='Horse'
    books
    connectedCallback(){
        this.fetchBookData()
    }

    fetchBookData(){
        fetch(BOOK_API+this.query)
        .then(response=>response.json())
        .then(data=>{
            if(data){
                this.books = data
                console.log(this.books)
            }
        }).catch(error=>console.error(error))
    }

    SearchBooks(event){
        let selectElementText = this.template.querySelector('.SearchBox')
        console.log(selectElementText)
        this.query = selectElementText.value
        this.fetchBookData()
    }

}