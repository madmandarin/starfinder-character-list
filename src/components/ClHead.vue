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
  height: 24px;
  display: flex;
  justify-content: flex-end;

}
.title {
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  margin-top: 6px;
  margin-right: 8px;
  text-transform: uppercase;
}
.logo {
  height: 24px;
}
</style>
