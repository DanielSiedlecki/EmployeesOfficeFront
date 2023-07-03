<template>
    

<div class="PageHeader d-flex justify-content-center mt-3" style="width: 100%;">
    <div class="flex-column">

        
    <h1> <slot>Default</slot></h1>
    <div class="line mx-auto"></div>
</div>


</div>






</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
export default class PageHeader extends Vue {


}
</script>


<style scoped lang="scss">

@import '../styles.scss';
    .PageHeader{
        h1 {
            color: black;
        }
        
        .line {
            background-color: $primary-global-color;
            width: 50%;
            height: 4px;
            transform: translateY(-1vh)
            
            
        }
}


</style>