<template>
    <h1>Лист ожиданий</h1>
    <div className="test_tovars">
        <div className="test_tovar" v-for="tovar in buyTovars" id="tovar.id">
                <img :src='tovar.image'></img>
                {{ tovar.title }}
                <br>
                <h3>{{ tovar.price }}$</h3>
            <button @click="OpenModal(tovar)">Отменить заказ</button>
        </div>
    </div>

    <Modal :btn="btn" :title="title" :CloseModal="CloseModal" v-show="watch == true"/>
</template>
  
<script>
    import Modal from './modal.vue';

      export default {
        props: {
            buyTovars: {
                type: Array,
                required: true
            },

            title: {
                type: String,
                required: true
            },

            btn: {
                type: String,
                required: true
            },
        },

        components: {
            Modal
        },

        data() {
            return {
                watch: false,
                title: 'Заказ отменен',
                btn: 'Мы заботамся о вас'
            }
        },

        methods: {
            OpenModal(tovar) {
                this.watch = !this.watch
                this.buyTovars.splice(tovar, 1)
                console.log(tovar)
            },

            CloseModal() {
                this.watch = false
                console.log(this.watch)
            }
        }
      }
</script>
  
<style scoped>
    h1 {
        text-align: center;
        margin-bottom: 25px;
    }

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
        height: 400px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        padding: 25px 20px;
    }

    button {
        align-self: center;
        margin-bottom: 10px;
        color: white;
        border: 0;
        width: 200px;
        height: 30px;
        background-color: rgb(64, 182, 129)
    }

    img{
        width: 200px;
        height: 200px
    }

    h3 {
        color: rgb(150, 220, 96);
    }

</style>