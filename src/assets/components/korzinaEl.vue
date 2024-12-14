<template>
    <div v-for="korzine in korzina" id="korzine.id">
        {{ korzine.title }}
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        props: {
        
        },

        data() {
            return {
                korzina: [],
                data: null
            }
        },

       methods: {
            async DataMake() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                    this.korzina = response.data.map(korzina => ({
                        id: korzina.id,
                        title: korzina.title,
                    }));
                } catch(error) {
                    console.error(error)
                }
            }
       },

       mounted() {
            this.DataMake()
       }
    }

    // https://jsonplaceholder.typicode.com/photos
  
</script>
  
<style scoped>
    
</style>