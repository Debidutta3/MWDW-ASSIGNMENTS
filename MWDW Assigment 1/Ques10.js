//

class Book{

    constructor(title, author, pub_year){
        this.title = title;
        this.author = author;
        this.pub_year = pub_year;
    }

    display_details(){
        console.log("Title: "+this.title);
        console.log("Author: "+this.author);    
        console.log("Publication Year: "+this.pub_year);
    }
}

class ebook extends Book{

    constructor(title, author, pub_year, price){
        super(title, author, pub_year);
        this.price = price;
    }

    display_details(){
        super.display_details();
        console.log("Price: "+this.price);
    }
}

let object = new ebook("The Alchemist", "John Johnson", 1988, 200);
object.display_details();