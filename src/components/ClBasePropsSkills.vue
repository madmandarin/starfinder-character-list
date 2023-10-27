<template>
  <div class="skillsBlock">
    <div class="row">
      <ClMainLabel class="mLabel">{{ $t('skills') }}</ClMainLabel>
      <div class="skillPerLevel">
        <div class="label" v-html="$t('skill-ranks-per-level')"></div>
        <cl-value-input class="input" />
      </div>
    </div>
    <table class="skills">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th colspan="5">
          <div>
            <span class="total">{{ $t('total') }}</span>
            <span class="ranks">{{ $t('ranks') }}</span>
            <span class="class-bonus">{{ $t('class-bonus') }}</span>
            <span class="ability-mod">{{ $t('ability-mod') }}</span>
            <span class="misc-mod">{{ $t('misc-mod') }}</span>
          </div>
        </th>
      </tr>
      <tr v-for="skill in trSkills" v-bind:key="skills[skill.id].trTag">
        <td><div class="cross" v-if="skills[skill.id].trainedOnly"></div></td>
        <td><cl-check-box v-model="skills[skill.id].classLearn"/></td>
        <td class="label" :class="[skills[skill.id].trTag === 'profession' ? 'variable':'']">
          <span v-html="skill.label"></span>
          <cl-text-input
            class="skillNameInput"
            size="tiny"
            v-if="skills[skill.id].trTag === 'profession'" disableSubLabel/>
        </td>
        <td colspan="5">
          <div class="calc">
            <cl-value-input class="input" size="small" />
            =<cl-value-input class="input" size="small" />+
            <cl-value-input class="input" size="small" disabled />
            +<cl-value-input class="input" size="small" disabled />+
            <cl-value-input class="input" size="small" />
          </div>
        </td>
      </tr>
    </table>
    <div class="legend">
      <div class="cross"></div> {{ $t('trained-only') }}
      <cl-check-box :model-value="true"/>{{ $t('class-skill') }}
      *{{ $t('armor-check') }}
    </div>
    <cl-text-area :label="$t('skill-notes')" rows="3" inline-label/>
  </div>
</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';
import ClValueInput from '@/components/ClValueInput.vue';
import ClTextInput from '@/components/ClTextInput.vue';
import ClCheckBox from '@/components/ClCheckBox.vue';
import ClTextArea from '@/components/ClTextArea.vue';

export default {
  name: 'ClBasePropsSkills',
  components: {
    ClTextArea,
    ClCheckBox,
    ClTextInput,
    ClValueInput,
    ClMainLabel,
  },
  computed: {
    trSkills() {
      return this.skills.map((item, id) => ({
        label: this.$t(`${item.trTag}`),
        id,
      })).sort((a, b) => {
        const nameA = a.label.toUpperCase();
        const nameB = b.label.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },
  },
  data: () => ({
    skills: [
      {
        trTag: 'acrobatics',
        trainedOnly: false,
        classLearn: true,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'athletics',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'bluff',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'computers',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'culture',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'diplomacy',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'disguise',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'engineering',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'intimidate',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'life-science',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'medicine',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'mysticism',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'perception',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'physical-science',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'piloting',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'profession',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'profession',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'sense-motive',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'sleight-of-hand',
        trainedOnly: true,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'stealth',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
      {
        trTag: 'survival',
        trainedOnly: false,
        classLearn: false,
        ranks: undefined,
        classBonus: undefined,
        abilityMod: undefined,
        miscMod: undefined,
      },
    ],
  }),
};
</script>
<style>
</style>
<style lang="scss" scoped>
.skillsBlock {
  box-sizing: border-box;
  margin-top: 6px;
  margin-right: 10px;
  .row {
    display: flex;
    justify-content: space-between;
    .mLabel {
      align-self: flex-start;
      margin-top: 4px;
    }
    .skillPerLevel {
      display: flex;
      justify-content: right;
      .label {
        font-size: 10px;
        line-height: 10px;
        text-transform: uppercase;
        width: 120px;
        text-align: right;
        padding-right: 8px;
      }
      .input {
        width: 40px;
      }
    }
  }
  .skills {
    margin-top: 2px;
    width: 100%;
    th {
      font-size: 8px;
      vertical-align: bottom;
      padding-bottom: 2px;
      text-transform: uppercase;
      div {
        display: flex;
        justify-content: space-between;
        vertical-align: bottom;
        align-items: flex-end;
        .total {
          padding-left: 7px;
        }
        .ranks {
          margin-right: 10px;
        }
        .class-bonus {
          padding-left: 8px;
          margin-left: -25px;
        }
        .ability-mod {
          flex-basis: 10%;
          margin-left: -10px;
        }
        .misc-mod {
          flex-basis: 10%;
          margin-right: 7px;
        }
      }
    }
    td {
      &.label {
        text-align: left;
        font-size: 10px;
        text-transform: uppercase;
        vertical-align: middle;
        &.variable {
          padding-bottom: 4px;
        }
      }
      .calc {
        display: flex;
        justify-content: center;
        margin-bottom: 2px;
        .input {
          box-sizing: border-box;
          width: 36px;
          padding: 0 1px;
        }
      }
    }
  }
}
.cross {
  width: 10px;
  height: 10px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 3px;
    width: 1px;
    height: 8px;
    background: #333;
  }
  &:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 5px;
    width: 5px;
    height: 1px;
    background: #333;
  }
}
.legend {
  text-align: left;
  font-size: 8px;
  .cross {
    display: inline-block;
  }
}
</style>
