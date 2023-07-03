<template>
    <div class="custom-container d-flex">
  <p style="font-size: 26px; " class=" my-auto mx-auto">{{ currentTime }}</p>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent ({
    data() {
    return {
      currentTime: ''
    };
  },
  mounted() {
    this.updateTime()

    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      
    }
  }
})






</script>

<style lang="scss" scoped>
@import '../styles.scss';

.custom-container{
    border: 4px solid $primary-global-color;
    width: 150%;
    height: 100%;
    border-radius: 20px;
}

</style>