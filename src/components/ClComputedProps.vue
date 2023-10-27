<template>
  <div class="computedProps">
    <ClComputedPropsInitiative />
    <ClComputedPropsHealth />
    <ClComputedPropsArmorClass />
    <ClComputedPropsSavingThrows />
    <ClComputedPropsAttackBonuses />
  </div>
</template>

<script>
import ClComputedPropsInitiative from '@/components/ClComputedPropsInitiative.vue';
import ClComputedPropsHealth from '@/components/ClComputedPropsHealth.vue';
import ClComputedPropsArmorClass from '@/components/ClComputedPropsArmorClass.vue';
import ClComputedPropsSavingThrows from '@/components/ClComputedPropsSavingThrows.vue';
import ClComputedPropsAttackBonuses from '@/components/ClComputedPropsAttackBonuses.vue';

export default {
  name: 'ClComputedProps',
  components: {
    ClComputedPropsAttackBonuses,
    ClComputedPropsSavingThrows,
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
