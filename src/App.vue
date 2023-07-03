<template>
<div v-if="clockVisibility"  class="clock ms-2 mt-2 " ><local-clock></local-clock></div>
<router-view></router-view>
<nav-bar-desktop v-if="navbarDesktop" class="bot"></nav-bar-desktop>
<nav-bar-mobile v-if="!navbarDesktop" class="bot"></nav-bar-mobile>
</template>

<script lang="ts">
import NavBarMobile from './components/NavBarMobile.vue';
import NavBarDesktop from './components/NavBarDesktop.vue';
import LocalClock from './components/LocalClock.vue';
import { defineComponent } from 'vue';





export default defineComponent({


    components:{
      NavBarDesktop, LocalClock, NavBarMobile
    },
    data() {
        return{
          clockVisibility: false,
          navbarDesktop: true
        }
    },
    
    mounted(){
      this.clockVisibilityCheck()
      this.NavbarType()
      window.addEventListener('resize', this.NavbarType)


    },

    
   
    methods:{
      getCookie(name:any){
        return this.$cookies.get(name)
        
      },

      clockVisibilityCheck(){
        this.clockVisibility = this.getCookie('clockVisibility') === 'true';



      },

      NavbarType(){
        const width = window.innerWidth

        if(width <= 860){
          this.navbarDesktop = false
        }
        else(this.navbarDesktop = true)
      }

      




      
    },



})
</script>

<style lang="scss">
@import '~@/../mdb/scss/index.free.scss';


    .bot {

    position: fixed;
    bottom: 0;
    }

   .clock {
    position: fixed;
    top: 0;
   }

   @media  screen and (max-width: 650px) {
    .clock {
      position: relative;
      bottom: 0;
      max-width: 20vw;
      
      
    }
    
   }
      
    


    
   

</style>
