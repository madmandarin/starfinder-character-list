<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label class="wrapper">
    <input type="text"/>
    <div class="subLabel" v-if="!disableSubLabel">{{ label }}</div>
  </label>
</template>

<script>
export default {
  name: 'ClTextInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    disableSubLabel: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0 4px;
  flex-grow: 1;
}
input {
  font-family: 'Neucha', 'Exo 2', sans-serif;
  border: none;
  border-bottom: 1px solid #333;
  outline:none;
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  width: 100%;
  border-radius: 0;
  padding: 0 8px;
  box-sizing: border-box;
}
.subLabel {
  font-size: 9px;
  line-height: 9px;
  text-align: left;
  text-transform: uppercase;
}
</style>
