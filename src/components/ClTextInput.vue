<template>
  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
  <label class="wrapper">
    <input type="text" :class="[size, textPosition, borderLess ? 'borderLess':'']"/>
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
    borderLess: {
      type: Boolean,
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['tiny', 'medium'].includes(value);
      },
    },
    textPosition: {
      type: String,
      default: 'start',
      validator(value) {
        return ['start', 'center', 'end'].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
input {
  font-family: 'Neucha', 'Exo 2', sans-serif;
  border: none;
  border-bottom: 1px solid #333;
  outline:none;
  height: 21px;
  line-height: 18px;
  font-size: 16px;
  width: 100%;
  border-radius: 0;
  padding: 0 4px;
  box-sizing: border-box;
  &.tiny {
    font-size: 12px;
    line-height: 14px;
    height: 15px;
  }
  &.borderLess {
    border-bottom: none;
  }
  &.start {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.end {
    text-align: right;
  }
}
.subLabel {
  font-size: 8px;
  line-height: 8px;
  text-align: left;
  text-transform: uppercase;
}
</style>
