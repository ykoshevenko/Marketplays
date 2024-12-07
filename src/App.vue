<template>
  <Hats/>
  <Navigation :KorzinaBtn="KorzinaBtn"/>
  <Tovars v-if="!korzina" :korzina="korzina"/>
  <Korzina v-else/>
</template>

<script>
    import Hats from './assets/components/hats.vue'
    import Navigation from './assets/components/navigation.vue'
    import Tovars from './assets/components/tovars.vue'
    import Korzina from './assets/components/korzina.vue'

    export default {
        components: {
            Hats,
            Navigation,
            Tovars,
            Korzina
        },

        data() {
            return {
                korzina: false,
                tovars: true,
            }
        },

        methods: {
            KorzinaBtn() {
                this.korzina = !this.korzina
                console.log(this.korzina)
                console.log(this.tovars)
            }
        }
    }
</script>

<style scoped>

</style>
