<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label class="wrapper">
    <input type="text"/>
    <div class="subLabel">{{ label }}</div>
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
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0 4px;
  flex-grow: 1;
}
input {
  border: none;
  border-bottom: 1px solid #333;
  outline:none;
  height: 28px;
  line-height: 28px;
  font-size: 16px;
  width: 100%;
  border-radius: 0;
  padding: 0 8px;
  box-sizing: border-box;
}
.subLabel {
  font-size: 12px;
  line-height: 12px;
  text-align: left;
  text-transform: uppercase;
}
</style>
