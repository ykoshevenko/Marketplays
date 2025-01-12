<template>
  <div className="Hats_Object">
    <h1>Интернет Магазин</h1>
    <input v-model="searchQuery" @input="Search" type="text"/>
    <button @click="filteredUsers">найти</button>
  </div>
</template>

<script>
    export default {
      props: {
        Search: {
          type: Function,
          required: true
        },

        tovare: {
          type: Array,
          required: true
        },

        btnContent: {
          type: Array,
          required: true,
        }
      },

      date() {
        return {
          searchQuery: ''
        }
      },

      computed: {
        
      },

      methods: {
        Search(tovar) {
           console.log(this.searchQuery) 
        },

        filteredUsers() {
          const results = this.tovare.filter(user => user.title.includes(this.searchQuery));
      
          // Вывод результатов в консоль
          console.log('Результаты поиска:', results);
        }
      }
    }
</script>

<style scoped>
    .Hats_Object {
        max-width: 1910px;
        height: 75px;
        background-color: rgb(64, 182, 129);
        color: white;
    }

    h1 {
       margin-left: 4em;
       font-size: 35px;
    }

    input {
        float: right;
        width: 30%;
        height: 50%;
        margin-top: -35px;
        margin-right: 10em;
        font-size: 130%;
    }
</style>
