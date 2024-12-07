<template>
    <div className="test_tovars">
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
        <div className="test_tovar"></div>
    </div>
</template>
  
<script>
    export default {
        props: {
            korzina: {
                type: Boolean,
                required: true,
            }
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

    .test_tovar {
        background-color: chartreuse;
        width: 200px;
        height: 200px;
    }
</style>