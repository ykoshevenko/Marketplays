<template>
  <Hats/>
  <Navigation :TovarsBtn="TovarsBtn" :KorzinaBtn="KorzinaBtn" :UserBtn="UserBtn"/>
  <Tovars  :korzina_tovar="korzina_tovar" :korzina_sum="korzina_sum" v-if="!korzina && !user" :korzina="korzina"/>
  <Korzina :korzina_tovar="korzina_tovar" v-if="korzina && !user"/>
  <User :korzina_sum="korzina_sum" v-if="user && !korzina"/>
</template>

<script>
    import Hats from './assets/components/hats.vue'
    import Navigation from './assets/components/navigation.vue'
    import Tovars from './assets/components/tovars.vue'
    import Korzina from './assets/components/korzina.vue'
    import User from './assets/components/user.vue'

    export default {
        components: {
            Hats,
            Navigation,
            Tovars,
            Korzina,
            User
        },

        data() {
            return {
                korzina: false,
                tovars: true,
                user: false,
                korzina_sum: 0,
                korzina_tovar: []
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
                console.log(this.korzina_sum)
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
