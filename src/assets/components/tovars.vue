<template>
    <h1>Главная страница</h1>
    <div className="test_tovars">
        <div className="test_tovar" v-for="tovar in tovares" id="tovar.id">
            {{ tovar.title }}
            <button :style="btnActive(tovar)" @click="BtnClassFunc(tovar)" id="tovar.id">{{ btnContent }}</button>
        </div>
    </div>

    <Modal v-show="watch == true" :CloseModal="CloseModal"/>
</template>
  
<script>
    import axios from 'axios';
    import hats from './hats.vue';
    import Modal from './modal.vue';

    export default {
        props: {
            korzina: {
                type: Boolean,
                required: true,
            },

            korzina_tovar: {
                type: Array,
                required: true
            },

            tovare: Array
        },

        components: {
            hats,
            Modal
        },

        data() {
            return {
                tovares: [...this.tovare],
                activeId: null,
                btnContent: 'В корзину',
                hatsActive: false,
                watch: true,
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
            },

            BtnClassFunc(tovar) {
                this.activeId = tovar.id

                this.button_cl = !this.button_cl
                this.korzina_tovar.push(tovar)
                this.btnContent = 'В корзине'
                console.log(this.korzina_tovar)
            },

            btnActive(tovar) {
                if (tovar.id === this.activeId) {
                return { backgroundColor: 'rgb(69, 70, 79)' };
                }
                return {};
            },

            CloseModal() {
                this.watch = false
                this.$emit('array-castom', this.tovares)
                console.log(this.tovares)
            }
       },

       mounted() {    
        this.DataMake()
       },

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