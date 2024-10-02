// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote : '"the best way to find your self is to lose yourself in the service of otheres "',
        person : 'mahanta gandi'
    },

    {
        quote : '"if you want to live a happy life tie it to a goal , not to peoples or things "',
        person : 'albert einshtein'
    },
    {
        quote : '"Your time is limited so dont waste it living somone elses life "',
        person : 'Steve jobs'
    },
    {
        quote : '"the jorney of a thousands miles begin with a feet "',
        person : 'Lao Tzu'
    },
    {
        quote :'"I do the very best I know how - the very best i can , ans I mean to keep on doing it until the end "',
        person : 'Ibrahim Lincoln'
    },
    {
        quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        person: 'Winston Churchill'
    },
    {
        quote: '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."',
        person: 'Buddha'
    },
    {
        quote: '"In the end, it’s not the years in your life that count. It’s the life in your years."',
        person: 'Abraham Lincoln'
    },
    {
        quote: '"The only impossible journey is the one you never begin."',
        person: 'Tony Robbins'
    },
    {
        quote: '"Life is what happens when you’re busy making other plans."',
        person: 'John Lennon'
    },
    {
        quote: '"It is never too late to be what you might have been."',
        person: 'George Eliot'
    },
    {
        quote: '"The future belongs to those who believe in the beauty of their dreams."',
        person: 'Eleanor Roosevelt'
    },
    {
        quote: '"Don’t watch the clock; do what it does. Keep going."',
        person: 'Sam Levenson'
    },
    {
        quote: '"You only live once, but if you do it right, once is enough."',
        person: 'Mae West'
    },
    {
        quote: '"Believe you can and you’re halfway there."',
        person: 'Theodore Roosevelt'
    },
    {
        quote: '"Go confidently in the direction of your dreams. Live the life you have imagined."',
        person: 'Henry David Thoreau'
    },
    {
        quote: '"It does not matter how slowly you go as long as you do not stop."',
        person: 'Confucius'
    },
    {
        quote: '"Life is really simple, but we insist on making it complicated."',
        person: 'Confucius'
    },
    {
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person: 'Nelson Mandela'
    },
    {
        quote: '"The purpose of our lives is to be happy."',
        person: 'Dalai Lama'
    },
    {
        quote: '"The journey of a thousand miles begins with a single step."',
        person: 'You'
    }
];

console.log('person');

btn.addEventListener('click', function(){
    let random = Math.floor( Math.random() * quotes.length );

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
