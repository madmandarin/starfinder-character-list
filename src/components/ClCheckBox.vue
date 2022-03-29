<template>
  <button
    class="checkbox"
    :class="{checked: modelValue}"
    @click="$emit('update:modelValue', !modelValue)"></button>
</template>

<script>
export default {
  name: 'ClCheckBox',
  props: {
    modelValue: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  background: transparent;
  padding: 0;
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border: 1px solid #333;
  position: relative;
  margin-right: 2px;
  top: -3px;
  &:after {
    visibility: hidden;
    content: '';
    position: absolute;
    width: 1px;
    height: 8px;
    background: #333;
    transform: rotate(30deg);
    top: -2px;
    right: 0;
  }
  &:before {
    visibility: hidden;
    content: '';
    position: absolute;
    width: 1px;
    height: 6px;
    background: #333;
    transform: rotate(-30deg);
    bottom: -1px;
    left: 1px;
  }
  &.checked {
    &:after {
      visibility: visible;
    }
    &:before {
      visibility: visible;
    }
  }
}
</style>
