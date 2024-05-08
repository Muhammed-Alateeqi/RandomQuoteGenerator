
//Use an array to hold the value of the quotes
var quotes = [
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Oscar Wilde,', 
     'quote': "I am so clever that sometimes I don't understand a single word of what I am saying."
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Larry Niven,', 
     'quote': 'He figured that if a bodily part hurt, he still had it.'
    },
    {'author': 'Albert Schweitzer', 
    'quote': 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.'
   },
   {'author': 'Winston Churchill', 
    'quote': 'Success consists of going from failure to failure without loss of enthusiasm.'
   },
   {'author': 'Vince Lombardi', 
    'quote': 'The only place where success comes before work is in the dictionary.'
   },
   {'author': 'Earl Nightingale', 
    'quote': 'Success is the progressive realization of a worthy ideal.'
   },
   {'author': 'Colin Powell', 
    'quote': 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.'
   },
   {'author': 'Henry Ford', 
    'quote': 'Failure is simply the opportunity to begin again, this time more intelligently.'
   },
   {'author': 'Bill Gates', 
   'quote': 'It\'s fine to celebrate success, but it is more important to heed the lessons of failure.'
  },
  {'author': 'Linus Torvalds', 
   'quote': 'Software is like sex: it\'s better when it\'s free.'
  },
  {'author': 'Steve Jobs', 
   'quote': 'Everyone should know how to program a computer because it teaches you how to think.'
  },
  {'author': 'Larry Wall', 
   'quote': 'The three chief virtues of a programmer are: Laziness, Impatience and Hubris.'
  },
  {'author': 'Grace Hopper', 
   'quote': 'The most dangerous phrase in the language is, "We\'ve always done it this way."'
  },
  {'author': 'Alan Kay', 
   'quote': 'The best way to predict the future is to invent it.'
  },
];
    let random;
console.log(random)
function getRandomQuote(){
    let prevNumber = random;
    console.log(prevNumber)
    random = Number(parseInt(Math.random()*quotes.length))// 10
    console.log(random)

    while(random === prevNumber){
        random = Number(parseInt(Math.random()*quotes.length))
    }
    document.getElementById('quoteOutput').innerHTML = `“${quotes[random].quote}”`;
    document.getElementById('authorOutput').innerHTML = `-${quotes[random].author}`;
}

