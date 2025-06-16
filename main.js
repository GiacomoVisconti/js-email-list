//! FUNCTIONS

function generate_email(list, repeat){
    for (let i = 0; i < repeat; i++) {

        //interrogo il server richiedendo le mail random
        fetch(random_number)
        .then(response => response.json())
        .then(data => {
    
        //creo un elemento della dom appoggiandolo in una variabile
        const list_element =`<li class="list-group-item"> ${data.response} </li> `
            console.log(list_element);
    
            //aggiungo l'elemento dopo quello inserito precedentemente
            list.insertAdjacentHTML('beforeend', list_element)
            
        
        })
    }
}

//! END FUNCTIONS




//Dichiaro le costanti 
const random_number = 'https://flynn.boolean.careers/exercises/api/random/mail'
const list = document.querySelector('ul')
const email_button_El = document.getElementById('button_mail')

//con il ciclo for ripeto l'iterazione 10 volte al caricamento della pagina


generate_email(list, 10)


//all'evento click del bottone, ripeto le iterazioni andando a sostituire gli elementi precedenti creati
email_button_El.addEventListener('click', (e) => {
    e.preventDefault()
    list.innerHTML = ''
    
    generate_email(list, 10)

})

