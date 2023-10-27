<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label>
    <input
      type="text"
      :class="[primary ? 'primary':'', size]"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled"/>
  </label>
</template>

<script>
export default {
  name: 'ClValueInput',
  props: {
    primary: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['big', 'medium', 'small'].includes(value);
      },
    },
    type: {
      type: String,
      default: 'number',
    },
    modelValue: {},
  },
};
</script>

<style lang="scss" scoped>
input {
  font-family: 'Neucha', 'Exo 2', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  padding-top: 6px;
  border-radius: 4px;
  border: 1px solid #333;
  text-align: center;
  width: 100%;

  &.primary {
    border: 2px solid #333;
  }
  &.big {
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    padding-top: 3px;
  }
  &.medium {
    height: 22px;
    line-height: 24px;
  }
  &.small {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    padding-top: 1px;
    border-radius: 3px;
  }
  &:disabled {
    background: transparent;
  }
}
</style>
