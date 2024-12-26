<template>
    <h1 className="title">Добро пожаловать, Name</h1>
    <div className="info">
        <h2>Имя: Name Famil Otchestvo</h2>
        <h2>Возраст: Number</h2>
        <h2>Колличество заказов: {{ buyTovars.length || 0 }}</h2>
        <h2>Товаров в карзине: {{ korzina_tovar.length || 0 }}</h2>
    </div>

    <Buys :btn="btn" :title="title" :buyTovars="buyTovars"/>
</template>
  
<script>
    import Buys from './buys.vue';

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
            Buys,
        },

        data() {
            return {
                
            }
        },
      }
</script>
  
<style scoped>
    .title {
        text-align: center;
    }

    .info {
        background-color: rgb(44, 44, 45);
        margin: 0 auto;
        width: 450px;
        height: auto;
        margin-top: 2em;
        line-height: 1.5;
        margin-bottom: 3em;
    }
</style>