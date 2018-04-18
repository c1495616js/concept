<template>
<div>
  <b-modal title="刪除" centered class="modal-danger" v-model="show"  cancel-title="取消" ok-title="確認"  @ok="submit"  ok-variant="danger">
      <slot>確認刪除？</slot>
  </b-modal>
</div>

</template>

<script>
  export default {
    name: 'DeleteModal',
    props: ['show'],
    methods: {
      close() {
        this.$emit('close');
      },
      submit() {
        this.$emit('doDelete');
      }
    },
  }
</script>
