const random_number = 'https://flynn.boolean.careers/exercises/api/random/mail'
const list = document.querySelector('ul')
const email_button_El = document.getElementById('button_mail')


for (let i = 0; i < 10; i++) {
        
    fetch(random_number)
    .then(response => response.json())
    .then(data => {
    const list_element =`<li class="list-group-item"> ${data.response} </li> `
        console.log(list_element);

        list.insertAdjacentHTML('beforeend', list_element)
        
    
    })

}

email_button_El.addEventListener('click', (e) => {
    e.preventDefault()
    list.innerHTML = ''
    list
    for (let i = 0; i < 10; i++) {
        
        fetch(random_number)
        .then(response => response.json())
        .then(data => {
        const list_element =`<li class="list-group-item"> ${data.response} </li> `
            console.log(list_element);
    
            list.insertAdjacentHTML('beforeend', list_element)
            
        
        })
    
    }
})

