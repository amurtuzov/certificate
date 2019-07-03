<template>
  <div class="result-wrapper">
    <CertificatePreview/>
    <CertificatePayment/>
  </div>
</template>

<script>
import CertificatePreview from './certificate-preview/CertificatePreview.vue';
import CertificatePayment from './certificate-payment/CertificatePayment.vue';
export default {
  name: 'CertificateResult',
  components: {
    CertificatePreview,
    CertificatePayment
  },
  data: function() {
    return {
    };
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/certificate-result.scss';
</style>
