const {createApp} = Vue;

createApp({

    data(){
        return{
            
            disksList: [],

        }

    },

    mounted() {
        
        axios.get('./server.php').then(res => {
            console.log(res.data);
            this.disksList = res.data;
        });
    },

}).mount('#app');