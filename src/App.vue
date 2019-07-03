<template>
  <div id="app">
    <CertificateBuilder/>
    <CertificateResult/>
  </div>
</template>

<script>
import CertificateBuilder from './components/CertificateBuilder.vue';
import CertificateResult from './components/CertificateResult.vue';

export default {
  name: 'app',
  components: {
    CertificateBuilder,
    CertificateResult
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  @media (min-width: 1280px) {
    #app {
      display: flex;
    }
  }
</style>
