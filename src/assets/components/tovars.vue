<template>
    <h1>Главная страница</h1>
    <div className="test_tovars">
        <div className="test_tovar" v-for="tovar in tovares" id="tovar.id">
            {{ tovar.title }}
            <button :class="{ButtonClass: button_cl}" @click="BtnClassFunc(tovar)" id="tovar.id">В корзину</button>
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
            },

            korzina_sum: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                tovares: [],
                button_cl: false,
                local_korzina_sum: this.korzina_sum,
            }
        },

        watch: {
            korzina_sum(newVal) {
                if(newVal !== this.local_korzina_sum) {
                this.local_korzina_sum = newVal
                this.korzina_sum = this.local_korzina_sum
                }
            },
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
            },

            BtnClassFunc(tovar) {
                // this.button_cl = !this.button_cl

                console.log(tovar.id)

                if(this.button_cl == true) {
                    this.local_korzina_sum++
                    console.log(this.local_korzina_sum)
                    
                } else {
                    this.local_korzina_sum--
                    console.log(this.local_korzina_sum)
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
        grid-template-columns: 200px 200px 200px;
        justify-content: center;
        gap: 50px;
    }

    .test_tovar {
        background-color: rgb(44, 44, 45);
        width: 200px;
        height: 200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        padding: 25px 20px;
    }

    h1 {
        text-align: center;
        margin-bottom: 25px;
    }

    button {
        background-color: rgb(64, 182, 129);
        color: white;
        border: 0;
        width: 200px;
        height: 30px;
    }

    .ButtonClass {
        background-color: aqua;
    }

</style>