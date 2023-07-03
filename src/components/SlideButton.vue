<template>
    <div @click="toggleButton" class="container_button" :class="{'active': buttonClass}">
      <div class="circle" :class="activeButton ? 'transform-right' : 'transform-left'"></div>
    </div>
  </template>
  
  <script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeButton: true,
     
    }
  },

  created() {
    
    this.checkActivity()
    
    
  },

  methods: {
    toggleButton() {
      this.activeButton = !this.activeButton;

      this.$cookies.set('ActiveButton', this.activeButton);
      
      this.$emit('isActiveButton', this.activeButton)
      
    
    },

    checkActivity(){

        this.activeButton = this.$cookies.get('ActiveButton') === 'true'
        
        

        
    }
},

computed: {
    buttonClass(): string {
        return this.activeButton ? 'active' : ''
    }
}

});
  </script>

<style scoped lang="scss">
@import '../styles.scss';


.container_button {
    background-color: gray;
    width: 100px;
    border-radius: 30px;
    height: 50px;


    .circle {
        
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        display: inline-block;
      }

    .circle:hover {

        cursor: pointer;
    }



    .transform-right {
        transform: translateX(100%);
        transition: 0.3s ease-in;
    }

    .transform-left{
        transform: translateX();
        transition: 0.2s ease-in;
    }

    
}
.active {
    background-color: $primary-global-color;
}
</style>