<template>
  <div class="animate__animated animate__fadeIn">
  <waiting-components v-if="!VisibilityWaiting"></waiting-components> 

    <div v-if="VisibilityWaiting" class="container " style="height: 80vh;">
    <page-header>Liczba Pracowników</page-header>
    
    <div class="employessnumber d-flex justify-content-center align-items-center " style="font-size: 15vw; height: 60vh;">
        
        <p style="color: black">{{employeesNumber}}</p>   </div>

</div>
</div>


</template>

<script lang="ts">

import WaitingComponents from './WaitingComponents.vue';
import PageHeader from './PageHeader.vue';
import { fetchData } from '@/services/EmployeesService';
import { defineComponent } from 'vue';
import { connect_socket, disconnect_socket, disconnect_tracking, getIsConnecting, listenRefreshPage, reconnect_socket} from '@/services/socket';


export default defineComponent ({

components:{PageHeader, WaitingComponents,},

  data() {
    return {
      employeesNumber: 0 as any,
      toastVisiblity: false,
      socket: null as any,
      RefreshPageValue: null

     
    };
  },

  mounted(){
    this.connect()
    this.disconnect_tracking_socket()
    this.RefreshPage()
    
    
    
  },

  beforeUnmount(){
    this.disconnect()
  },

  methods: {
     async connect() {
    
      try {
        this.socket = await connect_socket()
        this.fetchEmployeesNumber()
        console.log("monted")
        
      }
      catch {
        console.log("blad")
        this.reconnect()
      }
  },

    disconnect(){
      disconnect_socket()
    },

   

    async fetchEmployeesNumber(){
      const data = await fetchData()
      this.VisibilityWaiting = false
      this.employeesNumber = data.EmployeesList
      this.employeesNumber = this.employeesNumber.length
      

    },

    reconnect(){
      reconnect_socket()
    },

    disconnect_tracking_socket(){
      disconnect_tracking()
    },
    RefreshPage(){
      listenRefreshPage((value:any) => {
        this.RefreshPageValue = value

        if(this.RefreshPageValue){
          this.fetchEmployeesNumber()
          this.$emit('RefreshPage', this.RefreshPageValue)
        }
      })
    }
    
  
  

  },

  
  computed: {
    VisibilityWaiting: {
      get() {
        return getIsConnecting();
      },
      set() {
        // 
      }
    }

  },
  
  


});






</script>