<template>
  <Hats/>
  <Navigation :KorzinaBtn="KorzinaBtn" :UserBtn="UserBtn"/>
  <Tovars v-if="!korzina && !user" :korzina="korzina"/>
  <Korzina v-if="korzina && !user"/>
  <User v-if="user && !korzina"/>
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
                user: false
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
            }
        }
    }
</script>

<style scoped>

</style>
