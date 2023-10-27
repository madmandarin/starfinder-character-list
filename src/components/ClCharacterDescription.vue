<template>
  <section>
    <div class="master">
      <div class="row">
        <ClMainLabel>{{ $t('name') }}</ClMainLabel>
        <ClTextInput class="text" v-model="name"/>
      </div>
      <div class="row">
        <ClTextInput class="text master" v-model="name" :label="$t('class-level')"/>
        <ClTextInput class="text" v-model="name" :label="$t('race')"/>
        <ClTextInput class="text" v-model="name" :label="$t('theme')"/>
      </div>
      <div class="row">
        <ClTextInput class="text" v-model="name" :label="$t('size')"/>
        <ClTextInput class="text" v-model="name" :label="$t('speed')"/>
        <ClTextInput class="text slave" v-model="name" :label="$t('gender')"/>
        <ClTextInput class="text master" v-model="name" :label="$t('home-world')"/>
      </div>
      <div class="row">
        <ClTextInput class="text" v-model="name" :label="$t('alignment')"/>
        <ClTextInput class="text master" v-model="name" :label="$t('deity')"/>
        <ClTextInput class="text master" v-model="name" :label="$t('player')"/>
      </div>
    </div>
    <ClTextArea class="description" :label="$t('description')" rows="4"/>
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
  display: flex;
}
.text {
  margin: 0 4px;
}
.master {
  flex-basis: 70%;
}
.slave {
  flex-basis: 10%;
}
.row {
  flex-grow: 1;
  display: flex;
}
.description {
  margin-top: 6px;
}
</style>
