<template>
  <div class="languages">
    <cl-text-area rows="4" :label="$t('language')"/>
  </div>
</template>

<script>
import ClTextArea from '@/components/ClTextArea.vue';

export default {
  name: 'ClLanguage',
  components: { ClTextArea },
};
</script>

<style scoped lang="scss">
.languages {
  margin-top: 13px;
  width: 100%;
}
</style>
