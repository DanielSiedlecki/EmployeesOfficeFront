<template>
  <div class="animate__animated animate__fadeIn">
  <waiting-components v-if="!VisibilityWaiting"></waiting-components>
<div v-if="VisibilityWaiting" class="container" style="width: 100vw;">
  <page-header>Lista Pracowników</page-header>
<div class="table-responsive mt-3" style="height: 60vh; min-width: 80vw;">

  <table class="table" style="font-size: 2vw; font-weight: 600px;">
    <thead>
      <tr>
        
        <th>Imie</th>
        <th>Telefon</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in employeeData.EmployeesList" :key="index">
        
        <td>{{ employee.imie }}</td>
        <td>{{ employee.telefon }}</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import EmployeeData from '@/Interface/Employee';
import { fetchData } from '@/services/EmployeesService';
import PageHeader from './PageHeader.vue';

import WaitingComponents from './WaitingComponents.vue';
import { connect_socket, disconnect_socket, disconnect_tracking, getIsConnecting, listenRefreshPage, reconnect_socket } from '@/services/socket';



export default defineComponent ({
  components:{PageHeader, WaitingComponents},

  data() {
    return {
      imie: String,
      employeeData: {} as EmployeeData,
      columns: ['Inicjały', 'Numer Telefonu'],
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
        this.fetchEmployees()
      }
      catch {
        console.log('błąd')
        this.reconnect()
      }
    },

    disconnect(){
      disconnect_socket()
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
          this.fetchEmployees()
          this.$emit('RefreshPage', this.RefreshPageValue)
        }
      })

    },
    

    async fetchEmployees() {
      try {
      const data: EmployeeData = await fetchData();
        data.EmployeesList.forEach((element: any ) => {
          if(!element.telefon){
            element.telefon = 'brak'
          }
        }); 
        if(data){
          this.VisibilityWaiting = false
          this.employeeData = data
        }}
      catch(error){
        console.log(error)
      }
    },


    
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
  
}});
</script>

<style scoped lang="scss">
@import '../styles.scss';
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: white
}

*::-webkit-scrollbar-thumb {
  background-color: $primary-global-color;
  border-radius: 20px;
  border: 3px solid $primary-global-color;
}
</style>