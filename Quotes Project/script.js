var quotes = [
    {
        name: 'ემერსონი',
        quote: 'დაიწყეთ საქმის კეთება და ძალა თანდათან მოვა.'
    },

    {
        name: 'ემილ ზოლა',
        quote: 'ერთადერთი სიამოვნება ცხოვრებაში ესაა – განუწყვეტელი მისწრაფება წინ.'
    },

    {
        name: 'აბრაჰამ მასლოუ',
        quote: 'ცხოვრება რისკსა და უსაფრთხოებას შორის არჩევანის გაკეთების უწყვეტი პროცესია. შენ თავად ირჩევ უკან დაიხიო და უსაფრთხოდ იყო, თუ გარისკო და წინ იარო. თუ გინდა გაიზარდო წინსვლა და შიშის დაძლევა შენი მუდმივი არჩევანი უნდა იყოს ყოველდღე, დღეში ათასჯერ მთელი ცხოვრების განმავლობაში.'
    },

    {
        name: 'ბლეზ პასკალი',
        quote: 'ყველაზე დიდი პრივილეგია, რომელიც სამყაროსგან ენიჭება ადამიანს არის – გახდე სასიკეთო ცვლილებების მიზეზი სხვის ცხოვრებაში.'
    },

    {
        name: 'ნაპოლეონ ჰილი',
        quote: 'რაც უფრო დიდი ხნის განმავლობაში მიდიხართ წარმატებისკენ, მით უფრო ახლოსაა იგი. ძალიან ბევრი, თავს ანებებს საქმეს მაშინ, როცა გამარჯვებამდე ერთი ნაბიჯია დარჩენილი. დაიმახსოვრეთ, ამ ნაბიჯს სხვები გადადგამენ.'
    }
]

var quoteBtn = document.querySelector('#quoteBtn');
var quoteAuthor = document.querySelector('#quoteAuthor');
var quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () { 
    var number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

 }