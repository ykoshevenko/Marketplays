<template>
  <div className="Hats_Object">
    <h1>Интернет Магазин</h1>
    <input v-model="searchQuery" type="text"/>
    <button @click="filteredUsers">
      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </button>
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
        },

        searchTovar: {
          type: Array,
          required: true
        }
      },

      date() {
        return {
          searchQuery: '',
          searched: false
        }
      },

      methods: {
        filteredUsers() {
          this.searched = true

          // this.searchTovar = []

          for(let obj of this.tovare) {
            if(obj.title.includes(this.searchQuery)) {
              this.searchTovar.push(obj)
              console.log('кто убил марка?')
              console.log(this.searchTovar.length)
            } else {
              console.error('что то пошло не по плану')
            }
          }
          console.log(this.searchTovar)
          console.log(this.tovare)
        }
      },
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
        height: 56%;
        margin-top: -35px;
        margin-right: 10em;
        font-size: 130%;
        background-color: rgb(44, 44, 45);
        color: white;
        border: 0;
    }

    button {
      float: right;
      margin-top: -35px;
      background-color: rgb(44, 44, 45);
      color: white;
      border: 0;
    }
</style>
