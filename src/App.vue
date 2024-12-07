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
            Tovars
        },

        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
