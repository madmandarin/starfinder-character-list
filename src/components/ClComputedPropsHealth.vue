<template>
  <ClCard class="healthAndResolve" :label="$t('health-and-resolve')">
    <table>
      <tr>
        <th colspan="2" style="text-align: right">{{ $t('stamina-points') }}</th>
        <th>{{ $t('hit-points') }}</th>
        <th>{{ $t('resolve-points') }}</th>
      </tr>
      <tr>
        <td class="label">{{ $t('total') }}</td>
        <td><cl-value-input size="big" class="input"/></td>
        <td><cl-value-input size="big" class="input"/></td>
        <td><cl-value-input size="big" class="input"/></td>
      </tr>
      <tr>
        <td class="label">{{ $t('current') }}</td>
        <td><cl-value-input size="big" class="input"/></td>
        <td><cl-value-input size="big" class="input"/></td>
        <td><cl-value-input size="big" class="input"/></td>
      </tr>
    </table>
  </ClCard>
</template>

<script>
import ClCard from '@/components/ClCard.vue';
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClComputedPropsHealth',
  components: { ClValueInput, ClCard },
};
</script>

<style lang="scss" scoped>
.healthAndResolve {
  margin-top: 6px;
  table {
    margin: 2px auto 0 auto;
    td {
      width: 110px;

      .input {
        width: 70px;
        margin: 1px auto;
      }
      &.label {
        font-size: 14px;
        text-transform: uppercase;
        text-align: right;
        line-height: 30px;
        width: 80px;
      }
    }
  }
}
</style>
