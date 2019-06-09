<template>
  <div id="home">
    <waves />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Waves: () => import('@/components/home/Waves')
    }
  }
</script>
