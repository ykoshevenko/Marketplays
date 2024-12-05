<template>
  <Hats/>
  <Navigation/>
  <Tovars/>
</template>

<script>
    import Hats from './assets/components/hats.vue'
    import Navigation from './assets/components/navigation.vue'
    import Tovars from './assets/components/tovars.vue'

    export default {
        components: {
            Hats,
            Navigation,
            Tovars,
        },

        data() {
            return {
                korzina: false,
                home: true,
                user: false
            }
        },

        components: {
            watchModuleCorzina() {
                this.korzina = !this.korzina
                if(this.home || this.user === true) {
                    this.home == !this.home
                    this.user == !this.user
                }
            }
        }
    }
</script>

<style scoped>

</style>
