<template>
    <div className="KorzineEl" v-for="korzine in korzina" id="korzine.id">
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
                data: null,
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

                    console.log(this.korzina)
                } catch(error) {
                    console.error(error)
                }
            },

            BtnClassFunc() {
                this.button_cl = !this.button_cl
            }
       },

       mounted() {
            this.DataMake()
       }
    }

    // https://jsonplaceholder.typicode.com/photos
  
</script>
  
<style scoped>
    .KorzineEl {
        width: 40em;
        height: 5em;
        background-color: rgb(44, 44, 45);
        margin-bottom: 10px;
    }
</style>