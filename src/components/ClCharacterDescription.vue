<template>
  <section>
    <div class="master">
      <div class="row">
        <ClMainLabel>{{ $t('name') }}</ClMainLabel>
        <ClTextInput v-model="name"/>
      </div>
      <div class="row">
        <ClTextInput class="master" v-model="name" :label="$t('class-level')"/>
        <ClTextInput v-model="name" :label="$t('race')"/>
        <ClTextInput v-model="name" :label="$t('theme')"/>
      </div>
      <div class="row">
        <ClTextInput v-model="name" :label="$t('size')"/>
        <ClTextInput v-model="name" :label="$t('speed')"/>
        <ClTextInput class="slave" v-model="name" :label="$t('gender')"/>
        <ClTextInput class="master" v-model="name" :label="$t('home-world')"/>
      </div>
      <div class="row">
        <ClTextInput v-model="name" :label="$t('alignment')"/>
        <ClTextInput class="master" v-model="name" :label="$t('deity')"/>
        <ClTextInput class="master" v-model="name" :label="$t('player')"/>
      </div>
    </div>
    <ClTextArea class="description" :label="$t('description')"/>
  </section>
</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';
import ClTextInput from '@/components/ClTextInput.vue';
import ClTextArea from '@/components/ClTextArea.vue';

export default {
  name: 'ClCharacterDescription',
  components: { ClTextArea, ClTextInput, ClMainLabel },
  data: () => ({
    name: '',
  }),
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 20px;
  display: flex;
}
.master {
  flex-basis: 90%;
}
.slave {
  flex-basis: 10%;
}
.row {
  flex-grow: 1;
  display: flex;
}
.description {
  margin-top: 14px;
}
</style>
