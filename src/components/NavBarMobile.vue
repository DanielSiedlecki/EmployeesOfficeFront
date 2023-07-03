<template>
 

    <div class="nav-bar  border-top mb-1" style="width: 100vw ; height: 10vh;">
      <div class="row mx-auto  " style="width: 100vw" >
        <div class="icon-row d-flex ">
          <router-link  to="/" class="col-3  "><i class="fas fa-house fa-3x  mt-3 d-flex justify-content-center align-items-center"></i></router-link>
            <router-link to="/list" class="col-3  "><i class="fas fa-list-ol fa-3x mt-3 d-flex justify-content-center"></i> </router-link>
            <router-link to="/number" class="col-3  "><i class="fas fa-users fa-3x mt-3 d-flex justify-content-center"></i> </router-link>
            <router-link to="/settings" class="col-3  "><i class="fas fa-gear fa-3x mt-3 d-flex justify-content-center"></i></router-link>

          </div>
        </div>
    </div>


</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({


    
})
</script>

<style lang="scss" scoped>
@import '../styles.scss';
  
    i {
      color: black;
      
    }

    #app > div.nav-bar.border-top.bot > div > div > a.router-link-active.exact-active-link.col-3 > i  {
      color: $primary-global-color
    }
    

    
  
</style>