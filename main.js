const random_number = 'https://flynn.boolean.careers/exercises/api/random/mail'
const list = document.querySelector('ul')

for (let i = 0; i < 10; i++) {
    
    fetch(random_number)
    .then(response => response.json())
    .then(data => {
    const list_element =`<li> ${data.response} </li> `
        console.log(list_element);

        list.insertAdjacentHTML('beforeend', list_element)
        
    
    })

}
