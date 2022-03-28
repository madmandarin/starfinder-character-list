<template>
  <div class="head">
    <div class="title">{{ $t('main') }}</div>
    <img class="logo" alt="Starfinder Logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'ClHead',
};
</script>

<style scoped>
.head {
  height: 32px;
  display: flex;
  justify-content: flex-end;

}
.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  margin-top: 4px;
  margin-right: 12px;
  text-transform: uppercase;
}
.logo {
  height: 32px;
}
</style>
