<template>
    <!-- <div className="test_tovars">
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
    </div> -->
    <h1>Главная страница</h1>
    <div className="test_tovars">
        <div className="test_tovar" v-for="tovar in tovares" id="tovar.id">
            {{ tovar.title }}
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        props: {
            korzina: {
                type: Boolean,
                required: true,
            }
        },

        data() {
            return {
                tovares: []
            }
        },

        methods: {
            async DataMake() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                    this.tovares = response.data.map(tovar => ({
                        id: tovar.id,
                        title: tovar.title,
                        url: tovar.url
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
  
</script>
  
<style scoped>
    .test_tovars {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 200px 200px 200px 200px;
        justify-content: center;
        gap: 50px;
    }

    .test_tovar {
        background-color: rgb(44, 44, 45);
        width: 200px;
        height: 200px;
        text-align: center;
        
    }

    h1 {
        text-align: center;
        margin-bottom: 25px;
    }

</style>