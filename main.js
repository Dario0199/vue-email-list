//enerare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue({
    el: '#app',
    data:{
        list: [],
    },
    created() {
        this.getRandomEmail();
    },
    methods: {

        getRandomEmail(){

            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response);                
                
                this.list.push(response.data.response);
            })
            .catch((error) =>{

            });
            }
        }
    }
    
})
