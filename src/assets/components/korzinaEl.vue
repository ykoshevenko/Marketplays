<template>
    <div id="el">
        <p>{{korzinaMasEl}}</p>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        props: {
        
        },

        el: '#app',

        data() {
            return {
                korzinaMasEl: [],
                post: '',
            }
        },

        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/photos')

            .then(response => {
                this.korzinaMasEl = response.data
                console.log(response.data)
            })
        }
    }
  
</script>
  
<style scoped>
    
</style>