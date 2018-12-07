<template lang="pug">
  .navbar.navbar-expand-lg.navbar-dark.bg-dark.fixed-top
    a.navbar-brand(href="#")
      img.d-inline-block.align-top(src="../../assets/user.png" width="30" height="30")
    a.navbar-brand(href="#") {{ datosnav.nombre }}
</template>

<script>
export default {
  props: {
    datosnav: {type: Object}
  }
}
</script>


