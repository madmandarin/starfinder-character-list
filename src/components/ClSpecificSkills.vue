<template>
  <div class="specificSkills">
    <cl-text-area rows="31" :label="$t('abilities')"/>
  </div>
</template>

<script>
import ClTextArea from '@/components/ClTextArea.vue';

export default {
  name: 'ClSpecificSkills',
  components: { ClTextArea },
};
</script>

<style scoped lang="scss">
.specificSkills {
  width: 100%;
  margin-top: 12px;
}
</style>
