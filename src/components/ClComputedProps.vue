<template>
  <div class="computedProps">
    <ClComputedPropsInitiative />
    <ClComputedPropsHealth />
    <ClComputedPropsArmorClass />
  </div>
</template>

<script>
import ClComputedPropsInitiative from '@/components/ClComputedPropsInitiative.vue';
import ClComputedPropsHealth from '@/components/ClComputedPropsHealth.vue';
import ClComputedPropsArmorClass from '@/components/ClComputedPropsArmorClass.vue';

export default {
  name: 'ClComputedProps',
  components: {
    ClComputedPropsArmorClass,
    ClComputedPropsHealth,
    ClComputedPropsInitiative,
  },
};
</script>

<style lang="scss">
.computedProps {
  table {
      th {
        font-size: 9px;
        vertical-align: bottom;
        text-transform: uppercase;
      }
      td {
        vertical-align: bottom;
        line-height: 22px;
        text-align: center;

        .input {
          display: block;
        }
      }
    }
  .row {
    display: flex;
    align-items: flex-end;
  }
}
</style>
