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
        <cl-computed-props class="col" />
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

export default {
  name: 'HomeView',
  components: {
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
