<template>
    <transition >
        <div className="Modal-back">
            <div className="Modal">
                <h1>{{ title }}</h1>
                <button @click="CloseModal()" className="close">{{btn}}</button>
            </div>
        </div>
    </transition>
</template>
  
<script>
    export default {
          props: {
            CloseModal: {
                type: Function,
                required: true,
            },

            title: {
                type: String,
                required: true
            },

            btn: {
                type: String,
                required: true
            },
          },
    }

</script>
  
<style scoped>
    .Modal-back {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Modal {
        background: rgb(64, 64, 64);
        box-shadow: 0px 0px 48px 48px rgba(34, 60, 80, 0.22);
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 25em;
        height: 25em;
        animation-name: ModalAnimation;
        animation-duration: 1s;
    }

    .close {
        cursor: pointer;
        padding: 5px;;
        top: 8px;
        right: 8px;
    }

    button {
        background-color: rgb(64, 182, 129);
        color: white;
        border: 0;
        width: 300px;
        height: 40px;
        margin-left: 4em;
        margin-top: 2em;
    }

    @keyframes ModalAnimation {
        0% {
            transform: scale(0.1);
        }

        50% {
            transform: scale(1.2);
        }

        100% {
            transform: scale(1);
        }
    }

    h1 {
        text-align: center;
    }
    
</style>