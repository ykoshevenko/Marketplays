<template>
    <h1>Ваша Корзина</h1>
    <korzinaEl/>
</template>
  
<script>
    import korzinaEl from './korzinaEl.vue';

    export default {
       components: {
            korzinaEl
       },

       props: {
           
       }
    }
</script>
  
<style scoped>
    h1 {
        text-align: center;
    }
</style>
  