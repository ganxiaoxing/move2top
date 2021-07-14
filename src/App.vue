<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 
 * @Date: 2021-07-14 14:40:35
 * @LastEditors: gxx
 * @LastEditTime: 2021-07-14 15:05:50
-->
<template>
  <div id="app" class="main-app">
    <move2top />
  </div>
</template>

<script>
import move2top from '@/lib/move2top/move2top'
export default {
  name: "App",
  components: {
    move2top,
  },
};
</script>

<style>
.main-app{
  height: 3000px;
}

</style>
