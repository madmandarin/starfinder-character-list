<template>
  <div class="row initiative">
    <cl-main-label class="label">{{ $t('initiative') }}</cl-main-label>
    <table>
      <tr>
        <th>{{ $t('total') }}</th>
        <th v-html="$t('dex-modifier')"></th>
        <th v-html="$t('misc-modifier')"></th>
      </tr>
      <tr>
        <td><cl-value-input class="input" disable /></td>
        <td class="row">=<cl-value-input  class="input"/> + </td>
        <td><cl-value-input  class="input"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
import ClValueInput from '@/components/ClValueInput.vue';
import ClMainLabel from '@/components/ClMainLabel.vue';

export default {
  name: 'ClComputedPropsInitiative',
  components: { ClMainLabel, ClValueInput },
};
</script>

<style lang="scss" scoped>
.initiative {
  .label {
    align-self: flex-end;
  }
  table {
    margin-left: 10px;
    td {
      width: 70px;

      .input {
        width: 45px;
        margin: 0 auto;
      }
      &.row {
        width: 80px;
        justify-content: space-between;
      }
    }
  }
}
</style>
