<template>
  <Hats :searchTovar="searchTovar" :tovare="tovare"/>
  <Navigation :TovarsBtn="TovarsBtn" :KorzinaBtn="KorzinaBtn" :UserBtn="UserBtn"/>
  <Tovars :searchTovar="searchTovar" :tovare="tovare" @array-castom="UpdateArray" :korzina_tovar="korzina_tovar" :flatArray='flatArray' v-if="!korzina && !user" :korzina="korzina"/>
  <Korzina :btn="btn" :title="title" :buyTovars="buyTovars" :korzina_tovar="korzina_tovar" v-if="korzina && !user"/>
  <User :btn="btn" :title="title" :buyTovars="buyTovars" :korzina_tovar="korzina_tovar" v-if="user && !korzina"/>
</template>

<script>
    import Hats from './assets/components/hats.vue'
    import Navigation from './assets/components/navigation.vue'
    import Tovars from './assets/components/tovars.vue'
    import Korzina from './assets/components/korzina.vue'
    import User from './assets/components/user.vue'
    import Modal from './assets/components/modal.vue'

    export default {
        name: 'App',

        components: {
            Hats,
            Navigation,
            Tovars,
            Korzina,
            User,
            Modal
        },

        data() {
            return {
                korzina: false,
                tovars: true,
                user: false,
                korzina_tovar: [],
                buyTovars: [],
                title: 'Заказ оформлен',
                btn: 'Спасибо за покупку',
                searchConst: '',
                tovare: [],
                searchTovar: [],
            }
        },

        methods: {
            KorzinaBtn() {
                this.korzina = !this.korzina
                console.log(this.korzina)
                console.log(this.tovars)
            },

            UserBtn() {
                this.user = !this.user
            },

            TovarsBtn() {
                this.user = !this.user
                this.korzina = !this.korzina
            },

            UpdateArray(newArray) {
                this.tovare = newArray
            },

        },

        
    }
</script>

<style scoped>

</style>


<!-- filteredUsers() {
    const result = this.tovare.filter((tovar) => tovar.title === searchQuery)
    console.log(result)
  } -->