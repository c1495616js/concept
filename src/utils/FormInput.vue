<template>

<b-form-group
    :label="label"
    :label-for="key"
    label-cols="3"
    :horizontal="true">
    <b-form-input :id="id" type="text" v-model="form[id]"></b-form-input>
  </b-form-group>


</template>


<script>
  export default {
    props: ['label', 'id','form']
  }
</script>
