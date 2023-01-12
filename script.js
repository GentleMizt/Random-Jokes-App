    let btn = document.querySelector('.click');
    let container = document.querySelector('.container')

    const getJoke = async() =>{
        try{
            let data = await (await fetch('https://api.chucknorris.io/jokes/random')).json();
            let joke = data.value;
           
        } catch(error){
            console.log(error);
        }
    }

    btn.addEventListener('click', getJoke);

    