<template>
  <div class="wrCard">
    <ClMainLabel>{{label}}</ClMainLabel>
    <div class="card">
      <slot />
    </div>
  </div>

</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';

export default {
  name: 'ClCard',
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
.wrCard {
  display: flex;
  flex-direction: column;
}
.card {
  border-radius: 0 4px 4px 4px;
  border: 1px solid #333;
  margin-left: 12px;
  padding: 4px 8px;
}
</style>
