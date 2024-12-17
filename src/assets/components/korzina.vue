<template>
    <div className="all_korzina">
        <h1>Ваша Корзина</h1>
        <div className="korziza_all-el">
            <korzinaEl/>
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
           
       }
    }
</script>
  
<style scoped>
    .all_korzina {
        text-align: center;
    }

</style>
  