<template lang="pug">
  .card.card-colaborador(style="widht: 18rem;")
    img.card-img-top.img-thumbnail(src="../assets/colaborador.png")
    .card-body
        h5.card-title(align="center") {{ tipo }}
        p.card-text.small {{ datoscolaborador.nombre }}
        .btn.btn-danger.btn-block Evaluar
</template>

<script>
export default {
  props: {
    tipo: String,
    datoscolaborador: Object
  }
}
</script>

