<template>
  <div class="feats">
    <cl-text-area rows="16" :label="$t('feats')"/>
  </div>
</template>

<script>
import ClTextArea from '@/components/ClTextArea.vue';

export default {
  name: 'ClFeats',
  components: { ClTextArea },
};
</script>

<style scoped lang="scss">
.feats {
  margin-top: 13px;
  width: 100%;
}
</style>
