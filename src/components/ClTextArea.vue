<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label class="wrapper">
    <ClMainLabel>{{ $t(label) }}</ClMainLabel>
    <textarea name="" rows="4"></textarea>
  </label>
</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';

export default {
  name: 'ClTextArea',
  components: { ClMainLabel },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}
textarea {
  margin: 2px 6px 0 6px;
  padding: 0 6px;
  width: calc(100% - 18px);
  border: none;
  outline:none;
  resize: none;
  line-height: 24px;
  background-image: linear-gradient(transparent, transparent calc(24px - 1px), #333 0px);
  background-size: 100% 24px;
}
</style>
