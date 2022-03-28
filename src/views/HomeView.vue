<template>
  <div class="home">
    <ClA4Page>
      <ClHead />
      <ClCharacterDescription />
    </ClA4Page>
  </div>
</template>

<script>
// @ is an alias to /src

import ClA4Page from '@/components/ClA4Page.vue';
import ClHead from '@/components/ClHead.vue';
import ClCharacterDescription from '@/components/ClCharacterDescription.vue';

export default {
  name: 'HomeView',
  components: {
    ClCharacterDescription,
    ClHead,
    ClA4Page,
  },
};
</script>
