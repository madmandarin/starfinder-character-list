<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ClA4Page',
};
</script>

<style scoped>
section {
  max-width: 768px;
  margin: 16px auto 0;
}
@media print {
  section {
    page-break-after: always;
  }
}
@media not print {
  section {
    margin-bottom: 60px;
  }
}
</style>
