<template>
<cl-card class="wrapperArmorClass" :label="$t('armor-class')">
  <table class="armorClass">
    <tr>
      <th></th>
      <th v-html="$t('total')"></th>
      <th></th>
      <th v-html="$t('armor-bonus')"></th>
      <th></th>
      <th v-html="$t('dex-mod')"></th>
      <th></th>
      <th v-html="$t('misc-mod')"></th>
    </tr>
    <tr>
      <td class="label">
        <div class="bLabel">{{ $t('EAC') }}</div>
        <div class="desLabel" v-html="$t('energy-armor-class')"></div>
      </td>
      <td class="inputCell"><cl-value-input /></td>
      <td class="staticMod">= 10 +</td>
      <td class="inputCell"><cl-value-input /></td>
      <td class="plusCell">+</td>
      <td class="inputCell"><cl-value-input /></td>
      <td class="plusCell">+</td>
      <td class="inputCell"><cl-value-input /></td>
    </tr>
    <tr>
      <td class="label">
        <div class="bLabel">{{ $t('KAC') }}</div>
        <div class="desLabel" v-html="$t('kinetic-armor-class')"></div>
      </td>
      <td class="inputCell"><cl-value-input /></td>
      <td class="staticMod">= 10 +</td>
      <td class="inputCell"><cl-value-input /></td>
      <td class="plusCell">+</td>
      <td class="inputCell"><cl-value-input /></td>
      <td class="plusCell">+</td>
      <td class="inputCell"><cl-value-input /></td>
    </tr>
    <tr>
      <td class="label">
        <div class="desLabel" v-html="$t('ac-vs-combat-maneuvers')"></div>
      </td>
      <td><cl-value-input /></td>
      <td>= 8 +</td>
      <td colspan="2"><div class="bLabel">{{ $t('KAC') }}</div></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><label for="dr">{{ $t('dr') }} <input type="text" id="dr"/></label></td>
      <td colspan="7"><label for="resistabces">
        {{ $t('resistances') }} <input type="text" id="resistabces"/>
      </label></td>
    </tr>
  </table>
</cl-card>
</template>

<script>
import ClCard from '@/components/ClCard.vue';
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClComputedPropsArmorClass',
  components: { ClValueInput, ClCard },
};
</script>

<style>
.wrapperArmorClass .card {
  padding: 0;
}
</style>
<style lang="scss" scoped>
.wrapperArmorClass {
  margin-top: 6px;
  .bLabel {
    color: white;
    background: #333;
    line-height: 20px;
    padding: 0 4px;
    text-transform: uppercase;
    font-weight: bold;
    width: 30px;
  }
  table.armorClass {
    tr {
      border-bottom: 1px solid #333;
      &:last-child, &:first-child {
        border-bottom: none;
      }
      &:nth-of-type(2) {
        td {
          padding-top: 0;

          &.staticMod {
            padding: 0 0 2px 0;
          }
        }
      }
      &:last-of-type {
        td {
          padding: 2px 0 0 4px;
          text-align: left;
          font-size: 10px;
          vertical-align: bottom;
          line-height: 12px;

          input {
            font-family: 'Neucha', 'Exo 2', sans-serif;
            display: inline;
            border: none;
            line-height: 12px;
            font-size: 10px;
            position: relative;
            z-index: -1;
            &#dr {
              width: 105px;
            }
            &#resistabces {
              width: 130px;
            }
          }
        }
      }
      th {
        vertical-align: bottom;
        &:last-child {
          padding-right: 6px;
        }
      }
      td {
        padding: 2px 2px;
        line-height: 20px;
        vertical-align: top;
        font-size: 14px;
        &:last-child {
          padding-right: 6px;
        }
        &.label {
          display: flex;
          width: auto;
          .desLabel {
            line-height: 10px;
            font-size: 10px;
            text-align: left;
            text-transform: uppercase;
            padding-left: 4px;
          }
        }
        &.staticMod {
          width: 45px;
          padding: 2px 0;
        }
        &.inputCell {
          width: 40px;
        }
        &.plusCell {
          padding: 2px 0;
        }
      }
    }
  }
}
</style>
