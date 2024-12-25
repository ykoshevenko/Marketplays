<template>
  <Hats/>
  <Navigation :TovarsBtn="TovarsBtn" :KorzinaBtn="KorzinaBtn" :UserBtn="UserBtn"/>
  <Tovars :korzina_tovar="korzina_tovar" :korzina_sum="korzina_sum" v-if="!korzina && !user" :korzina="korzina"/>
  <Korzina :buyTovars="buyTovars" :korzina_tovar="korzina_tovar" v-if="korzina && !user"/>
  <User :buyTovars="buyTovars" :korzina_tovar="korzina_tovar" v-if="user && !korzina"/>
</template>

<script>
    import Hats from './assets/components/hats.vue'
    import Navigation from './assets/components/navigation.vue'
    import Tovars from './assets/components/tovars.vue'
    import Korzina from './assets/components/korzina.vue'
    import User from './assets/components/user.vue'
    import Modal from './assets/components/modal.vue'

    export default {
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

        }
    }
</script>

<style scoped>

</style>
