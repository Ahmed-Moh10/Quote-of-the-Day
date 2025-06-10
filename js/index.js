
function randomText() {

    var names = ["Oscar Wilde" , "Elbert Hubbard" , "Frank Sinatra" , "Wayne Gretzy" , "Nelson Mandela" , "Elbert Hubbard"]
    var text = ["Always forgive your enemies; nothing annoys them so much." , "A friend is someone who knows all about you and still loves you." , "Live as if you were to die tomorrow. Learn as if you were to live forever." , "You only live once, but if you do it right, once is enough." , "So many books, so little time." , "There is no friend as loyal as a book."]


    var random = Math.floor(  Math.random() * names.length  ) 

    document.getElementById("quote").innerHTML = names[random]
    document.getElementById("author").innerHTML = text[random]

}

