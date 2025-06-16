const random_number = 'https://flynn.boolean.careers/exercises/api/random/mail'


for (let i = 0; i < 10; i++) {
    
    fetch(random_number)
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
    
})

}