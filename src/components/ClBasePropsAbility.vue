<template>
  <ClCard class="abilityBlock" :label="$t('ability-scores')">
    <table>
      <tr>
        <th></th>
        <th>{{ $t('score') }}</th>
        <th>{{ $t('modifier') }}</th>
        <th>{{ $t('upgraded-score') }}</th>
        <th>{{ $t('upgraded-modifier') }}</th>
      </tr>
      <tr v-for="item in abilityList" v-bind:key="item.keyName">
        <td class="stat">
          <div class="statLabel">{{ $t(`${item.keyName}.label`) }}</div>
          <div class="statFullName">{{ $t(`${item.keyName}.name`) }}</div>
        </td>
        <td><cl-value-input class="inputCell" v-model="item.score" primary/></td>
        <td>
          <cl-value-input
            class="inputCell"
            :modelValue="item.score ? Math.floor((item.score-10)/2):''"
            primary disabled />
        </td>
        <td><cl-value-input class="inputCell" v-model="item.tempScore"/></td>
        <td>
          <cl-value-input
            class="inputCell"
            :modelValue="item.tempScore ? Math.floor((item.tempScore-10)/2):''" disabled />
        </td>
      </tr>
    </table>
  </ClCard>
</template>

<script>
import ClCard from '@/components/ClCard.vue';
import ClValueInput from '@/components/ClValueInput.vue';

export default {
  name: 'ClBasePropsAbility',
  components: { ClValueInput, ClCard },
  data: () => ({
    test: '',
    abilityList: [
      {
        keyName: 'str',
        score: undefined,
        tempScore: undefined,
      },
      {
        keyName: 'dex',
        score: undefined,
        tempScore: undefined,
      },
      {
        keyName: 'con',
        score: undefined,
        tempScore: undefined,
      },
      {
        keyName: 'int',
        score: undefined,
        tempScore: undefined,
      },
      {
        keyName: 'wis',
        score: undefined,
        tempScore: undefined,
      },
      {
        keyName: 'cha',
        score: undefined,
        tempScore: undefined,
      },
    ],
  }),
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.abilityBlock {
  margin-top: 8px;
  margin-right: 10px;
  * {
    text-transform: uppercase;
  }
}
.statLabel {
  background: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  width: 50px;
}
.statFullName {
  font-size: 8px;
  text-align: left;
}
table {
  width: calc(100% - 10px);
  margin: 1px 4px 1px 2px;
}
th {
  font-size: 9px;
  text-align: center;
  vertical-align: bottom;
  padding-bottom: 1px;
}
td {
  width: 70px;
  &.stat {
    text-align: left;
    width: 80px;
  }
  .inputCell {
    width: 55px;
    display: inline-block;
  }
}
</style>
