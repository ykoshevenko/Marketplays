<template>
    <div v-if="searchTovar.length == 0">
        <h1>Главная страница</h1>
        <div className="test_tovars">
            <div className="test_tovar" v-for="tovar in flatArray" id="tovar.id">
                <img :src='tovar.image'></img>
                {{ tovar.title }}
                <br>
                <h3>{{ tovar.price }}$</h3>
                <button :style="btnActive(tovar)" @click="BtnClassFunc(tovar)" id="tovar.id">{{ btnContent }}</button>
            </div>
        </div>
    </div>

    <div v-if="searchTovar.length > 0">
        <h1>По вашему запросу найдено:</h1>
        <div className="test_tovars">
            <div className="test_tovar" v-for="tovar in searchTovar" id="tovar.id">
                <img :src='tovar.image'></img>
                {{ tovar.title }}
                <br>
                <h3>{{ tovar.price }}$</h3>
                <button :style="btnActive(tovar)" @click="BtnClassFunc(tovar)" id="tovar.id">{{ btnContent }}</button>
            </div>
        </div>
    </div>

    <div v-if='flatArray.length == 0'>
        <h1>Товаров не найдено</h1>
    </div>

    <Modal :btn="btn" :title="title" v-show="watch == true" :CloseModal="CloseModal"/>
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

            filteredUsers: {
                type: Function,
                required: true
            },

            korzina_tovar: {
                type: Array,
                required: true
            },

            searchTovar: {
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
                title: 'Этот сайт не является работающим интернет магазином, поэтому не проводятся трангзации, но зайдя на сайт, вы соглашаетесь на cucky',
                btn: 'согласен',
                tovars: [],
                flatArray: [],
            }
        },


        methods: {

            async fetchData() {
                try {
                    const response = await axios.get('https://fakestoreapi.com/products');
                    // https://fakestoreapi.in/api/products
                    // https://fakestoreapi.com/products
                    
                    //Объединяем объекты в массив
                    this.tovars = Object.values(response.data);
                    this.tovars.splice(0,2)
                    this.tovars.flat()
                    this.flatArray = this.tovars.flat() 

                    flatArray.map(tovar => ({
                        id: tovar.id,
                        title: tovar.title,
                        image: tovar.image,
                        price: tovar.price
                    }))

                    console.log(this.tovars)
                } catch (error) {
                    console.error(error);
                }
                },

            BtnClassFunc(tovar) {
                this.activeId = tovar.id

                this.button_cl = !this.button_cl
                this.korzina_tovar.push(tovar)
                this.btnContent = 'В корзине'
                console.log(this.korzina_tovar)
                console.log(this.searchTovar)
            },

            btnActive(tovar) {
                if (tovar.id === this.activeId) {
                return { backgroundColor: 'rgb(69, 70, 79)' };
                }
                return {};
            },

            CloseModal() {
                this.watch = false
                this.$emit('array-castom', this.flatArray)
                console.log(this.tovares)
            }
       },

       mounted() {    

        this.fetchData()
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

    img{
        width: 200px;
        height: 200px
    }

    h3 {
        color: rgb(150, 220, 96);
    }

    .test_tovar {
        background-color: rgb(44, 44, 45);
        width: 200px;
        height: 400px;
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