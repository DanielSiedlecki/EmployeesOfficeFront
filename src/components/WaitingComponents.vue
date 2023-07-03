<template>
  <div class="container d-flex justify-content-center align-items-center  flex-column" style="width: 100vw; height: 60vh; ">
    


    <div class="h1">Proszę czekać</div>
    <div class="lds-ring d-flex justify-content-center"><div></div><div></div><div></div><div></div></div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    components:{
        
    }



})






</script>

<style lang="scss" scoped>
@import '../styles.scss';

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 84px;
  height: 84px;
  margin: 8px;
  border: 8px solid $primary-global-color;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $primary-global-color transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>