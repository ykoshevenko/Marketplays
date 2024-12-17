<template>
    <h1 className="title">Добро пожаловать, Name</h1>
    <div className="info">
        <h2>Имя: Name Famil Otchestvo</h2>
        <h2>Возраст: Number</h2>
        <h2>Колличество заказов: ...</h2>
        <h2>Товаров в карзине: {{ local_korzina_sum }}</h2>
    </div>
</template>
  
<script>
      export default {
        props: {
            korzina_sum: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                local_korzina_sum: this.korzina_sum
            }
        },

        watch: {
            korzina_sum(newVal) {
                if(newVal !== this.local_korzina_sum) {
                this.local_korzina_sum = newVal
                }
            },
        },

        methods: {
            BtnClassFunc() {
                this.button_cl = !this.button_cl

                if(this.button_cl == true) {
                    this.local_korzina_sum++
                    console.log(this.local_korzina_sum)
                    
                } else {
                    this.local_korzina_sum--
                    console.log(this.local_korzina_sum)
                }
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