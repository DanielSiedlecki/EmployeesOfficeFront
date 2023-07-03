<template>
   <div class="custom-container  justify-content-center" style="width: 100vw; height: 20vh;"> 
       <div class="navbar-container " style="width: 90vw;">

        <div class="row align-items-center  " style="height: 20vh; width: 100%;">
        
            
            <div class="col-3">

            <div class="col-3  d-flex " ><img  src="../assets/LogoNavBar.png" alt="LogoZeto" ></div>
        </div>


            <div class="col-9 ">
            <div class=" row d-flex align-items-center justify-content-between ms-2" style="height: 20vh;">
                
           <router-link  to="/" class="col-3  d-flex justify-content-center align-items-center  flex-column mt-2 ms-3 me-2 size "><i class="fas fa-house fa-3x  mt-3"></i> <p>Strona Główna</p></router-link>
            <router-link to="/list" class="col-3  d-flex  justify-content-center align-items-center flex-column mt-2 me-2  size"><i class="fas fa-list-ol fa-3x mt-3"></i> <p>Lista Pracowników</p></router-link>
            <router-link to="/number" class="col-3  d-flex  justify-content-center align-items-center flex-column mt-2 me-2 size "><i class="fas fa-users fa-3x mt-3"></i> <p>Liczba Pracowników</p></router-link>
            <router-link to="/settings" class="col-3  d-flex  justify-content-center align-items-center flex-column mt-2 me-2 size "><i class="fas fa-gear fa-3x mt-3"></i> <p>Ustawienia</p></router-link>
            
        </div>
        </div>
        </div>
    </div>

</div>





</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
export default class NavBar extends Vue {
   
}
</script>

<style lang="scss" scoped>

@import '../styles.scss';
.custom-container{
    background-color: white;
    display: flex;

   
        
    }
    
    
    .navbar-container {
        border: 4px solid $primary-global-color;
        border-radius: 20px;


        .row {
            
            p {
                font-size: 1.5vw;
                white-space: nowrap;
                color: black;
            }

            @media screen and ( max-width: 1000px) {
                p{  
                    
                    text-align: center;
                    font-size: 2vw;
                    white-space: normal;
                }
                
            }
            i {
                color: black;
            }

            img{
                height: 15vh; 
                width: 25vw;
            }

            @media screen and (max-width: 1250px){
                
                img {
                    height: 12vh;
                    width: 22vw;
                }


            }


            .size{
                height: 70%;
                width: 22%;
                


            }

            .router-link-active {
                background-color: rgba(255, 157, 30, 0.50);
                opacity: 100%;
                height: 70%;
                border-radius: 20px;
                width: 25%;
            }
        }
    }
    

    
</style>