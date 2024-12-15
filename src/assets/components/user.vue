<template>
    <h1 className="title">Добро пожаловать, Name</h1>
    <div className="info">
        <h2>Имя: Name Famil Otchestvo</h2>
        <h2>Возраст: Number</h2>
        <h2>Колличество заказов: ...</h2>
        <h2>Товаров в карзине: {{ korzina_sum }}</h2>
    </div>
</template>
  
<script>
      export default {
        props: {
            BtnClassFunc: {
                type: Function,
                required: true
            }
        }
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
    }
</style>