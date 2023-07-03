<template>
 <div class="animate__animated animate__fadeIn">
<waiting-components v-if="VisibilityWaiting"></waiting-components>
<employees-number @RefreshPage="FetchVisbility()"  v-if="!VisibilityList && !VisibilityWaiting "></employees-number>
<employees-list @RefreshPage="FetchVisbility()" v-if="VisibilityList && !VisibilityWaiting"></employees-list>
</div>





</template>

<script lang="ts">


import WaitingComponents from './WaitingComponents.vue';
import EmployeesNumber from './EmployeesNumber.vue';
import EmployeesList from './EmployeesList.vue';
import { defineComponent } from 'vue';
import { fetchData } from '@/services/EmployeesService';


export default defineComponent ({
    data(){
        return {
            
            state:null,
            VisibilityList: false,
            VisibilityWaiting: true,
            ReconectedStatus: true
        }
    },
    components:{
        EmployeesNumber,
        EmployeesList,
        WaitingComponents,
        
        
       
    },
    mounted(){
        this.FetchVisbility()
    },
    


  methods: {
    async FetchVisbility(){
        const data = await fetchData()
        console.log("emituje")

        if(data){
            this.VisibilityWaiting = false
        
        this.VisibilityList = data.visibilitylist}
        

    }

  }

   

  










   
});
</script>

<style lang="scss" scoped>

</style>
