<template>
  <div class="spells">
    <cl-main-label class="label">{{ $t('spells') }}</cl-main-label>
    <table>
      <tr>
        <th></th>
        <th>{{ $t('spell-school') }}</th>
        <th>{{ $t('spell-casting-time') }}</th>
        <th>{{ $t('spell-range') }}</th>
        <th>{{ $t('spell-targets') }}</th>
        <th>{{ $t('spell-duration') }}</th>
        <th>{{ $t('spell-saving-throw') }}</th>
        <th>{{ $t('spell-resistance') }}</th>
      </tr>
      <template v-for="spellLvl in 7" v-bind:key="`spells-level-${spellLvl}`">
        <cl-spell-level-head :spell-level="spellLvl-1" />
        <tr v-for="i in 6" v-bind:key="`spells-level-${spellLvl}-${i}`">
          <td class="spellInput spellName"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
          <td class="spellInput"><cl-text-input size="tiny" text-position="left"/></td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';
import ClSpellLevelHead from '@/components/ClSpellLevelHead.vue';
import ClTextInput from '@/components/ClTextInput.vue';

export default {
  name: 'ClSpells',
  components: { ClTextInput, ClSpellLevelHead, ClMainLabel },
};
</script>

<style scoped lang="scss">
.spells {
  tr {
    th {
      font-size: 10px;
      line-height: 1;
      width: 75px;
    }
  }
}
.spellInput {
  padding: 0 2px;
}
.spellName {
  width: 400px;
}
</style>
