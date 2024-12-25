<template>
    <div className="all_korzina">
        <div className="korziza_all-el">
            <h1>Ваша корзина</h1>
            <korzinaEl :buyTovars="buyTovars" :korzina_tovar="korzina_tovar"/>
        </div>
    </div>
</template>
  
<script>
    import korzinaEl from './korzinaEl.vue';

    export default {
       components: {
            korzinaEl
       },

       props: {
            korzina_tovar: {
                type: Array,
                required: true
            },

            buyTovars: {
                type: Array,
                required: true
            }
       }
    }
</script>
  
<style scoped>
    .all_korzina {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    h1 {
       margin-bottom: 10px;
    }
</style>
  