    let btn = document.querySelector('.click');
    let container = document.querySelector('.container')

    const getJoke = async() =>{
        try{
            fetch('https://api.chucknorris.io/jokes/random');
            
        } catch(error){
            console.log(error);
        }
    }

    btn.addEventListener('click', );

    