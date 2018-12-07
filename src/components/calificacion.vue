<template lang="pug">
  .row
    .col-md-1
    .col-md-10
      .jumbotron
        h4 Autoevaluación
        p.lead Rigo Antonio Galicia Barrera
        .progress
          .progress-bar(role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 50%")
        hr.my-4
        h4.display-6 ¿Esta sera la interrogante que va a responder cuando este haciendo la evaluacion del desempeño?
        br
        form
          .form-row
            .form-group.col-md-2
              h5.form-check.form-check-inline
                input.form-check-input.form-control(type="radio" name="opcion" id="opcion1")
                label.form-check-label(for="opcion1") Excelente
            .form-group.col-md-2
              h5.form-check.form-check-inline
                input.form-check-input.form-control(type="radio" name="opcion" id="opcion2")
                label.form-check-label(for="opcion2") Bueno
            .form-group.col-md-2
              h5.form-check.form-check-inline
                input.form-check-input.form-control(type="radio" name="opcion" id="opcion3")
                label.form-check-label(for="opcion3") Malo
            .form-group.col-md-2
              h5.form-check.form-check-inline
                input.form-check-input.form-control(type="radio" name="opcion" id="opcion4")
                label.form-check-label(for="opcion4") Pesimo
        hr.my-4
        button.btn.btn-success.btn-lg Calificar
    .col-md-1
</template>
