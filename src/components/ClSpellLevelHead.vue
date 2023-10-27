<template>
  <tr>
    <td colspan="8">
      <table>
        <tr>
          <th></th>
          <th>{{ $t('spell-knows') }}</th>
          <th v-if="spellLevel">{{ $t('spell-per-day') }}</th>
          <th v-if="spellLevel">{{ $t('spell-slot-used') }}</th>
        </tr>
        <tr>
          <td>{{spellLevel}}lvl</td>
          <td><cl-value-input /></td>
          <td v-if="spellLevel"><cl-value-input /></td>
          <td v-if="spellLevel"><cl-value-input /></td>
        </tr>
      </table>
    </td>
  </tr>
</template>

<script>
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClSpellLevelHead',
  components: { ClValueInput },
  props: {
    spellLevel: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss">
th {
  font-size: 8px;
  text-transform: uppercase;
}
td {
  width: 40px;
  padding: 0 4px;
}
table {
  margin-top: 12px;
}
</style>
