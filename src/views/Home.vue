<template>
  <div id="home">
    <waves />
  </div>
</template>

<script>
  // import * as THREE from 'three'
  export default {
    name: 'Home',

    components: {
      Waves: () => import('@/components/home/Waves')
    }
  }
</script>
