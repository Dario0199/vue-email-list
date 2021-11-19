//enerare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue({
    el: '#app',
    data:{
        email:'',
    },
    created() {
        this.getRandomEmail();
    },
    methods: {

        getRandomEmail(){


            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response);                
                
                this.email = response.data.response;
            })
            .catch((error) =>{
                
            })
        }
    }
})