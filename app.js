document.querySelector('.get-info').addEventListener('click', getInfo);
const infoDiv = document.querySelector('.info');

function getInfo(e){
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://ghibliapi.herokuapp.com/films`, true);

    xhr.onload = function(){
        if(this.status >= 200 && this.status < 400){
            const response = JSON.parse(this.response);
            response.forEach(element => {

                const card = document.createElement('div');
                card.classList.add('card');
                const ul = document.createElement('ul');
                const liTitle = document.createElement('li');
                const liDesc = document.createElement('li');
                const liDir = document.createElement('li');
                const liProd = document.createElement('li');
                const liDate = document.createElement('li');
                const liScore = document.createElement('li');
                
                // title
                liTitle.classList.add('title');
                liTitle.textContent = element.title;
                ul.appendChild(liTitle);
                
                // description
                liDesc.classList.add('description');
                liDesc.textContent = `${element.description.substring(0, 300)} ...`;
                ul.appendChild(liDesc);

                // director
                liDir.classList.add('director');
                liDir.textContent = element.director;
                ul.appendChild(liDir);

                // producer
                liProd.classList.add('producer');
                liProd.textContent = element.producer;
                ul.appendChild(liProd);

                // date
                liDate.classList.add('date');
                liDate.textContent = element.release_date;
                ul.appendChild(liDate);

                // score
                liScore.classList.add('score');
                liScore.textContent = element.rt_score;
                ul.appendChild(liScore);

                card.appendChild(ul);

                infoDiv.appendChild(card);
                console.log(card);
            });

        }
    }
        xhr.send();
        e.preventDefault();
    }
