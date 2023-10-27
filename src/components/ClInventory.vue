<template>
  <div class="inventory">
    <cl-main-label class="label">{{ $t('inventory') }}</cl-main-label>
    <table>
      <tr>
        <th></th>
        <th>{{ $t('level') }}</th>
        <th>{{ $t('bulk') }}</th>
      </tr>
      <tr class="line" v-for="i in 50" v-bind:key="`inventory-${i}`">
        <td class="name">
          <cl-text-input size="tiny"/>
        </td>
        <td>
          <cl-text-input size="tiny" text-position="center"/>
        </td>
        <td>
          <cl-text-input size="tiny" text-position="center"/>
        </td>
      </tr>
    </table>
    <div class="credits">
      <span class="label">{{ $t('credits') }}</span>
      <cl-value-input class="creditsValue" size="big" />
      <span class="label">{{ $t('total-bulk') }}</span>
      <cl-value-input class="totalBulkValue" size="big" />
    </div>
    <cl-main-label class="capacityLabel label">{{ $t('capacity') }}</cl-main-label>
    <table class="capacity">
      <tr>
        <th>{{ $t('unencumbered') }}</th>
        <th>{{ $t('encumbered') }}</th>
        <th>{{ $t('overburdened') }}</th>
      </tr>
      <tr>
        <td>
          <cl-value-input size="big" />
        </td>
        <td>
          <cl-value-input size="big" />
        </td>
        <td>
          <cl-value-input size="big" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';
import ClTextInput from '@/components/ClTextInput.vue';
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClInventory',
  components: { ClValueInput, ClTextInput, ClMainLabel },
};
</script>

<style scoped lang="scss">
.inventory {
  margin-top: 12px;
  margin-left: 6px;
  width: 260px;
  .label {
    width: 100px;
  }
  table {
    margin-top: -14px;
    td {
      padding: 0 2px;
      padding-top: 3px;
      &:nth-child(2) {
        padding-top: 2px;
      }
    }
    .name {
      width: 190px;
    }
  }
  .credits {
    margin-top: 6px;
    display: flex;
    .label {
      font-size: 14px;
      text-transform: uppercase;
      text-align: right;
    }
    .creditsValue {
      margin: 0 4px;
      width: 440px;
    }
    .totalBulkValue {
      margin-left: 4px;
    }
  }
  .capacityLabel {
    margin-top: 8px;
  }
  .capacity {
    margin-top: 2px;
    th {
      font-size: 10px;
    }
  }
}
</style>
