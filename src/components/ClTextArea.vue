<template>
  <div class="wrapper">
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label v-if="!inlineLabel" >
      <ClMainLabel>{{ $t(label) }}</ClMainLabel>
      <textarea class="bordered" :rows="rows"></textarea>
    </label>
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label v-else>
      <textarea class="lined" name="" :rows="rows"></textarea>
    </label>
  </div>
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
  width: calc(100% - 18px);
  border: none;
  outline:none;
  resize: none;
  line-height: 18px;
  &.bordered {
    margin-left: 10px;
    border-radius: 4px;
    border: solid 1px #333;
  }
  &.lined {
    padding: 0 6px;
    margin: 2px 6px 0 6px;
    background-image: linear-gradient(transparent, transparent calc(18px - 1px), #333 0px);
    background-size: 100% 18px;
  }
}
</style>
