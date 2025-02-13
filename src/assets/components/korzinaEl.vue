<template>
    <div v-if="korzina_tovar != 0" className="KorzineEl" v-for="korzine in korzina_tovar" id="korzine.id">
        {{ korzine.title }}
        <button @click="OpenModal(korzine)" className="bye_funk_btn">Заказать</button>
        <button @click="DeleteTovars(korzine)" className="cancel_funk_btn">Удалить из казины</button>
    </div>

    <h1 className="ZeroTovar" v-if="korzina_tovar == 0">Товары отсудсвтуют</h1>

    <Modal :btn="btn" :title="title" :CloseModal="CloseModal" v-show="watch == true"/>
</template>
  
<script>
    import Modal from './modal.vue';

    export default {
        props: {
            korzina_tovar: {
                type: Array,
                required: true
            },

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
                data: null,
                watch: false,
            }
        },

        methods: {
            DeleteTovars(tovar) {
                this.korzina_tovar.splice(tovar, 1)
            },
            
            OpenModal(tovar) {
                this.watch = !this.watch
                this.korzina_tovar.splice(tovar, 1)
                this.buyTovars.push(tovar)
                console.log(tovar)
                this.title == 'Заказ оформлен'
                this.btn == 'Спасибо за покупку'
            },

            CloseModal() {
                this.watch = false
                console.log(this.watch)
            }
        }
            
    }

    // https://jsonplaceholder.typicode.com/photos
  
</script>
  
<style scoped>
    .KorzineEl {
        width: 40em;
        height: 8em;
        background-color: rgb(44, 44, 45);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 20px;
    }

    button {
        align-self: center;
        margin-bottom: 10px;
        color: white;
        border: 0;
        width: 200px;
        height: 30px;
    }

    .bye_funk_btn {
        background-color: rgb(64, 182, 129);
        margin-top: 10px;
    }

    .cancel_funk_btn {
        background-color: rgb(234, 63, 97);
    }

    .ZeroTovar {
        background-color: rgb(44, 44, 45);
        width: 20em;
        height: 3em;
        margin-bottom: 20px;
    }

    .ModalStyle-bg {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 99998;
        background-color: rgba(0, 0, 0, .3);
        display: grid;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
        transition: opasity .4, visibility .4s;
    }

    .ModalStyle {
        position: relative;
        max-width: 500px;
        padding: 45px;
        z-index: 1;
        background-color: white;
        box-shadow: 0px 0px 77px 61px rgba(34, 60, 80, 0.2);
        transform: scale(0);
        transition: transform .8s;
        text-align: center;
    }

</style>