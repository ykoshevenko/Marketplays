<template>
    <div v-if="korzina_tovar != 0" className="KorzineEl" v-for="korzine in korzina_tovar" id="korzine.id">
        {{ korzine.title }}
        <button className="bye_funk_btn">Заказать</button>
        <button @click="DeleteTovars(korzine)" className="cancel_funk_btn">Удалить из казины</button>
    </div>

    <h1 className="ZeroTovar" v-else>Товары отсудсвтуют</h1>
</template>
  
<script>

    export default {
        props: {
            korzina_tovar: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                korzina: this.korzina_tovar,
                data: null,
            }
        },

        methods: {
            DeleteTovars(tovar) {
                this.korzina_tovar.splice(tovar, 1)
            }
        }
            
    }

    // https://jsonplaceholder.typicode.com/photos
  
</script>
  
<style scoped>
    .KorzineEl {
        width: 40em;
        height: 6em;
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

</style>