<template>
  <div class="home">
    <ClA4Page>
      <ClHead />
      <ClCharacterDescription />
      <div class="row">
        <div class="col">
          <ClBasePropsAbility />
          <ClBasePropsSkills />
        </div>
        <div class="col">
          <ClComputedProps/>
          <ClWeapons />
        </div>

      </div>
    </ClA4Page>
    <ClA4Page>
      <ClHead />
      <div class="row">
        <div class="col">
          <ClSpecificSkills />
          <ClFeats />
          <ClLanguage />
        </div>
        <div>
          <ClInventory />
        </div>
      </div>
    </ClA4Page>
  </div>
</template>

<script>
// @ is an alias to /src

import ClA4Page from '@/components/ClA4Page.vue';
import ClHead from '@/components/ClHead.vue';
import ClCharacterDescription from '@/components/ClCharacterDescription.vue';
import ClComputedProps from '@/components/ClComputedProps.vue';
import ClBasePropsAbility from '@/components/ClBasePropsAbility.vue';
import ClBasePropsSkills from '@/components/ClBasePropsSkills.vue';
import ClWeapons from '@/components/ClWeapons.vue';
import ClSpecificSkills from '@/components/ClSpecificSkills.vue';
import ClFeats from '@/components/ClFeats.vue';
import ClLanguage from '@/components/ClLanguage.vue';
import ClInventory from '@/components/ClInventory.vue';

export default {
  name: 'HomeView',
  components: {
    ClInventory,
    ClLanguage,
    ClFeats,
    ClSpecificSkills,
    ClWeapons,
    ClBasePropsAbility,
    ClBasePropsSkills,
    ClComputedProps,
    ClCharacterDescription,
    ClHead,
    ClA4Page,
  },
};
</script>

<style scoped>
.row {
  display: flex;
}
.col {
  flex-basis: 100%;
}
</style>
