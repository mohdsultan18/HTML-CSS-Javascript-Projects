function generate(){
    var quotes = {
         "- Jamie Ford" : '"The library is like a candy store where everything is free."',
         "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
         "- Pierce Brown" : '"Man cannot be freed by the same injustice that enslaved it."',
         "-  Madeline Miller" : '"Bury us, and mark our names above. Let us be free."',
         "-  Aaron Lauritsen" : '"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow."',
         "- Aaron Lauritsen" : '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
         "- Ludwig von Mises" : '"Socialism is an alternative to capitalism as potassium cyanide is an alternative to water."',
         "- Albert Borris" : '"the truth will set u free but first it will piss u off"',
         
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}

