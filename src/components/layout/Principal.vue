<template lang="pug">
  .row
    .col-md-1 
    .col-md-10
      .jumbotron
        h1.display-5 {{ datosprincipal.nombreEvaluacion }}
        p.lead {{ datosprincipal.instrucciones }}
        hr.my-4
      .row
        .col-md-3
          component-colaborador(tipo="Autoevaluación", :datoscolaborador="datosprincipal")
        .col-md-3(v-for="c in datosprincipal.subordinados")
          component-colaborador(tipo="Colaborador", :datoscolaborador="c")
        
    .col-md-1
    
</template>
<script>
import ComponentColaborador from '../colaborador.vue'

export default {
  components: {
    ComponentColaborador
  },
  props: {
    datosprincipal: {type: Object}
  }
}
</script>


