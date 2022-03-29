<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label class="wrapper">
    <ClMainLabel v-if="!inlineLabel">{{ $t(label) }}</ClMainLabel>
    <textarea name="" :rows="rows"></textarea>
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
    rows: {
      type: Number,
      default: 4,
    },
    inlineLabel: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}
textarea {
  font-family: 'Neucha', 'Exo 2', sans-serif;
  margin: 2px 6px 0 6px;
  padding: 0 6px;
  width: calc(100% - 18px);
  border: none;
  outline:none;
  resize: none;
  line-height: 18px;
  background-image: linear-gradient(transparent, transparent calc(18px - 1px), #333 0px);
  background-size: 100% 18px;
}
</style>
