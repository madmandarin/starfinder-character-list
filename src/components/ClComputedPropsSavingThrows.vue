<template>
  <cl-card class="wrapperSavingThrows" :label="$t('saving-throws')">
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>{{$t('total')}}</th>
        <th></th>
        <th>{{$t('base')}}</th>
        <th></th>
        <th>{{$t('ability-mod')}}</th>
        <th></th>
        <th>{{$t('misc-mod')}}</th>
      </tr>
      <tr>
        <td>
          <div class="stLabel">
            <div class="bLabel">{{$t('fortitude')}}</div>
            <div class="desc">({{$t('con.name')}})</div>
          </div>
        </td>
        <td>&nbsp;</td>
        <td><cl-value-input size="big" /></td>
        <td>=</td>
        <td><cl-value-input size="big" /></td>
        <td>+</td>
        <td><cl-value-input size="big" /></td>
        <td>+</td>
        <td><cl-value-input size="big" /></td>
      </tr>
      <tr>
        <td>
          <div class="stLabel">
            <div class="bLabel">{{$t('reflex')}}</div>
            <div class="desc">({{$t('dex.name')}})</div>
          </div>
        </td>
        <td>&nbsp;</td>
        <td><cl-value-input size="big" /></td>
        <td>=</td>
        <td><cl-value-input size="big" /></td>
        <td>+</td>
        <td><cl-value-input size="big" /></td>
        <td>+</td>
        <td><cl-value-input size="big" /></td>
      </tr>
      <tr>
        <td>
          <div class="stLabel">
            <div class="bLabel">{{$t('will')}}</div>
            <div class="desc">({{$t('wis.name')}})</div>
          </div>
        </td>
        <td>&nbsp;</td>
        <td><cl-value-input size="big" /></td>
        <td>=</td>
        <td><cl-value-input size="big" /></td>
        <td>+</td>
        <td><cl-value-input size="big" /></td>
        <td>+</td>
        <td><cl-value-input size="big" /></td>
      </tr>
    </table>
  </cl-card>
</template>

<script>
import ClCard from '@/components/ClCard.vue';
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClComputedPropsSavingThrows',
  components: { ClValueInput, ClCard },
};
</script>

<style lang="scss" scoped>
.wrapperSavingThrows {
  margin-top: 6px;
  table {
    th {
      text-transform: uppercase;
    }
    td {
      line-height: 28px;
    }
  }
  .stLabel {
    .bLabel {
      color: white;
      background: #333;
      line-height: 18px;
      padding: 0;
      text-transform: uppercase;
      font-weight: bold;
    }
    .desc {
      font-size: 8px;
      line-height: 1;
      text-transform: uppercase;
    }
  }
}
</style>
