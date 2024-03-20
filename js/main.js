const {createApp} = Vue;

createApp({

    data(){
        return{
            
        }

    },

    mounted() {
        
        axios.get('./server.php').then(res => {
            console.log(res)
        });
    },

}).mount('#app');