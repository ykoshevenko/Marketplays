<template>
    <div className="KorzineEl" v-for="korzine in korzina" id="korzine.id">
        {{ korzine.title }}
        <button className="bye_funk_btn">Заказать</button>
        <button className="cancel_funk_btn">Удалить из казины</button>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        props: {
        
        },

        data() {
            return {
                korzina: [],
                data: null,
            }
        },

       methods: {
            async DataMake() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                    this.korzina = response.data.map(korzina => ({
                        id: korzina.id,
                        title: korzina.title,
                    }));

                    console.log(this.korzina)
                } catch(error) {
                    console.error(error)
                }
            },

            BtnClassFunc() {
                this.button_cl = !this.button_cl
            }
       },

       mounted() {
            this.DataMake()
       }
    }

    // https://jsonplaceholder.typicode.com/photos
  
</script>
  
<style scoped>
    .KorzineEl {
        width: 40em;
        height: 6em;
        background-color: rgb(44, 44, 45);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 20px;
    }

    button {
        align-self: center;
        margin-bottom: 10px;
        color: white;
        border: 0;
        width: 200px;
        height: 30px;
    }

    .bye_funk_btn {
        background-color: rgb(64, 182, 129);
        margin-top: 10px;
    }

    .cancel_funk_btn {
        background-color: rgb(234, 63, 97);
    }

</style>