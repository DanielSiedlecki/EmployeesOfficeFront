<template>
    
    <div class="container animate__animated animate__fadeIn " style="height: 80vh; max-width: 100vw;">
        <PageHeader>Ustawienia</PageHeader>
        <div class="settings-container  mx-auto mt-5 d-flex flex-column align-items-center " style="height: 60vh; max-width: 80vw;">
            
            
            <div class="button  d-flex flex-column  flex-md-row justify-content-center align-items-center  mt-3 " style="width: 60%; height: 15%;"><p style=" white-space: nowrap ;" class="mt-2" >Pokaż zegar</p><slide-button-vue class="ms-3" @isActiveButton="ChangeOption"></slide-button-vue></div>
                    
            
            <div v-if="SaveButtonVisibility" class="d-flex flex-grow-1 align-items-end mb-3"><button @click="refreshPage">Zapisz zmiany</button></div>
        </div>



    </div>
</template>

<script lang="ts">
import PageHeader from './PageHeader.vue';
import { defineComponent } from 'vue';
import SlideButtonVue from './SlideButton.vue';
export default defineComponent ({

    components:{PageHeader, SlideButtonVue},
        
    data(){return{
        ClockVisibility: true,
        SaveButtonVisibility: false

    }},

    methods: {
        ClockVisibilitySet(value:any){
           this.ClockVisibility = value
           console.log(this.ClockVisibility)
           this.$cookies.set('clockVisibility', this.ClockVisibility)
          
        },

       
        refreshPage() {
        location.reload(); 
    },
    ChangeOption(value: any){
        this.ClockVisibilitySet(value)
        this.SaveButtonVisibility = true
        
    }
        
    }
})
</script>
<style lang="scss" scoped>
@import '../styles.scss';

.container {
    .settings-container{

        border-radius: 20px;
        border: 6px solid $primary-global-color;
    }

    p{
        font-size: 36px;
    }
    @media  screen and (max-width: 630px) {
        p {
            margin-top: 4%;
            font-size: 25px;
        }
        
    }
    @media  screen and (max-width: 390px) {
        p {
            margin-top: 10%;
            font-size: 16px;
        }
        
    }


    button {
        border: 4px solid $primary-global-color;
        background-color: white;
        border-radius: 30px;
        font-size: 2vw;
        width: 20vw;
        height: 10vh;
       
        

    }

    @media  screen and (max-width: 820px) {
        button{
            font-size: 3vw;
            width: 25vw;
               
        }
        
    }


    button:hover{
        background-color: $secondary-global-color;
    }
}
</style>