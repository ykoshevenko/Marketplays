<template>
    <div v-if="post in korzinaMasEl" :key="post.id">
        <h1>{{ post.title }}</h1>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        props: {
            korzinaMasEl: {
                type: Object,
                requires: true
            }
        },

        data() {
            return {
                korzinaMasEl: [],
                post: ''
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