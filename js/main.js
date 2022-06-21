document.querySelector('button').addEventListener('click', getPic)

function getPic(){
    const dateInput = document.querySelector('.dateInput').value;
    const url = (`https://api.nasa.gov/planetary/apod?api_key=key_from_nasa=${dateInput}`)
    console.log(dateInput);
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.media_type === 'image') {
            document.querySelector('h2').innerText = data.title
            document.querySelector('.dateImg').src = data.hdurl;
            document.querySelector('.dateImg').classList.remove('hidden');
            document.querySelector('h3').innerText = data.explanation;
            document.querySelector('iframe').classList.add('hidden');
        } else if(data.media_type === 'video') {
            document.querySelector('h2').innerText = data.title
            document.querySelector('iframe').src = data.url;
            document.querySelector('.dateImg').classList.add('hidden');
            document.querySelector('h3').innerText = data.explanation;
            document.querySelector('.dateImg').src = '';
            document.querySelector('iframe').classList.toggle('hidden');
        }
    })
    .catch(error => console.log(`error: ${error}`))

}

// prev version
// document.querySelector('.today').addEventListener('click', getTPic)
// function getTPic(){
//     let today = new Date().toISOString().slice(0, 10)

//     console.log(today)

//     fetch(`https://api.nasa.gov/planetary/apod?api_key=PlaULcJgKNsfFtiTN6OjmghePhrRRgLu8gh5Cvmx&date=${today}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('h2').innerText = data.title
//         document.querySelector('h3').innerText = data.explanation
//         document.querySelector('img').src = data.hdurl
//     })
//     .catch(err => {
//         console.log(`Error ${err}`)
//     })
    
// }
