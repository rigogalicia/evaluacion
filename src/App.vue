<template lang="pug">
  #app
    component-nav(:datosnav="info")
    #principal
      //component-principal(:datosprincipal="info")
      component-calificacion
</template>

<script>
import ComponentNav from '@/components/layout/Nav.vue'
import ComponentPrincipal from '@/components/layout/Principal.vue'
import ComponentCalificacion from '@/components/calificacion.vue'
import edService from '@/services/ed_service'

export default {
  name: 'app',
  components: {
    ComponentNav,
    ComponentPrincipal,
    ComponentCalificacion
  },
  data () {
    return {
      info: ''
    }
  },
  mounted () {
    // Inicia sesion y muestra los datos de evaluacion
    var url = window.location.href.split('/')
    var userConect = url[3]
    var claveUser = url[4]
    var ided = url[5]

    edService.datosEvaluacion(userConect, claveUser, ided)
    .then(res => (this.info = res))
  }
}
</script>

<style>
  @import './css/main.css';
</style>
