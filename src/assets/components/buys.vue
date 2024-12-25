<template>
    <h1>Лист ожиданий</h1>
    <div className="test_tovars">
        <div className="test_tovar" v-for="tovar in buyTovars" id="tovar.id">
            {{ tovar.title }}
            <button>Отменить заказ</button>
        </div>
    </div>
</template>
  
<script>
      export default {
        props: {
            buyTovars: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                
            }
        },
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
        height: 200px;
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

</style>