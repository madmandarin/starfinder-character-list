<template>
  <div class="wrapperAttackBonuses">
    <cl-card class="" :label="$t('attack-bonuses')">
      <table>
        <tr>
          <th></th>
          <th>{{$t('total')}}</th>
          <th></th>
          <th>{{$t('bab.label')}}</th>
          <th></th>
          <th>{{$t('mod-label')}} {{$t('str.label')}}</th>
          <th></th>
          <th>{{$t('misc-mod')}}</th>
        </tr>
        <tr>
          <td class="label">
            {{$t('melee-attack')}}
          </td>
          <td><cl-value-input size="big" /></td>
          <td>=</td>
          <td><cl-value-input size="big" /></td>
          <td>+</td>
          <td><cl-value-input size="big" /></td>
          <td>+</td>
          <td><cl-value-input size="big" /></td>
        </tr>
      </table>
      <table>
        <tr>
          <th></th>
          <th>{{$t('total')}}</th>
          <th></th>
          <th>{{$t('bab.label')}}</th>
          <th></th>
          <th>{{$t('mod-label')}} {{$t('str.label')}}</th>
          <th></th>
          <th>{{$t('misc-mod')}}</th>
        </tr>
        <tr>
          <td class="label">
            {{$t('ranger-attack')}}
          </td>
          <td><cl-value-input size="big" /></td>
          <td>=</td>
          <td><cl-value-input size="big" /></td>
          <td>+</td>
          <td><cl-value-input size="big" /></td>
          <td>+</td>
          <td><cl-value-input size="big" /></td>
        </tr>
      </table>
      <table>
        <tr>
          <th></th>
          <th>{{$t('total')}}</th>
          <th></th>
          <th>{{$t('bab.label')}}</th>
          <th></th>
          <th>{{$t('mod-label')}} {{$t('str.label')}}</th>
          <th></th>
          <th>{{$t('misc-mod')}}</th>
        </tr>
        <tr>
          <td class="label">
            {{$t('thrown-attack')}}
          </td>
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
    <div class="babBlock">
      <div class="label">
        {{$t('bab.name')}} ({{$t('bab.label')}})
      </div>
      <cl-value-input class="babInput"/>
    </div>
  </div>
</template>

<script>
import ClCard from '@/components/ClCard.vue';
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClComputedPropsAttackBonuses',
  components: { ClValueInput, ClCard },
};
</script>
<style>
.wrapperAttackBonuses .wrCard .card {
  padding: 0 0 2px;
}
</style>
<style lang="scss" scoped>
.wrapperAttackBonuses {
  margin-top: 10px;
  position: relative;
  .wrCard .card {
    padding-left: 2px;
  }
  .babBlock {
    position: absolute;
    top: -6px;
    right: 0;
    font-size: 8px;
    display: flex;
    flex-direction: row;
    .label {
      width: 120px;
      text-align: right;
      padding-right: 6px;
      padding-top: 3px;
    }
    .babInput {
      width: 50px;
      margin-right: 10px;
    }
  }
  table {
    border-bottom: solid 1px black;
    margin-top: 2px;
    &:last-child {
      border-bottom: none
    }
    td {
      line-height: 30px;
      padding-bottom: 2px;
      &:last-child {
        padding-right: 10px;
      }
    }
    th:last-child {
      padding-right: 10px;
    }
    .label {
      padding-left: 4px;
      font-size: 12px;
      line-height: 1;
      text-transform: uppercase;
      width: 105px;
      vertical-align: middle;
      text-align: left;
    }
  }
}
</style>
