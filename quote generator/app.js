let quotes = [
    'You are the shuckiest shuck faced shuck in the world!” ― James Dashner, The Maze Runner',
    'Adversity causes some men to break, others to break records.” – William A. Ward',
    'Accept challenges, so that you may feel the exhilaration of victory.” – George S. Patton ',
    'The gem cannot be polished without friction, nor man be perfected without trials.” – Danish Proverb ',
    'Don’t give up at half time. Concentrate on winning the second half.” – Paul “Bear” Bryant ',
    'The difference between the impossible and the possible lies in a person’s determination.” – Tommy Lasorda ',
    'Defeat is not the worst of failures. Not to have tried is the true failure.” – George Edward Woodberry '
    ]


    //selecting the button on which operation needs to be performed
    const quotesBtn= document.querySelector('.btn');
    
        //adding event listener to the button

        //made a random quote function and used math methods 
    // to get random numbers for getting quotes at random no assigned to it

    quotesBtn.addEventListener('click',function randomQuote() {
        let randomNumber= Math.floor(Math.random() * (quotes.length));
        quotesBtn.innerHTML=quotes[randomNumber]

    })

        