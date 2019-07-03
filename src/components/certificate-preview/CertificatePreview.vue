<template>
  <div class="preview-wrapper">
    <div class="certificate-preview" :class="setCurrentCertificate">
      <img :src="require('../../assets/' + setCurrentDesign + '.jpg')"/>
      <div class="certificate-preview__header">
        <span class="header-title">FITMOST</span>
        <span class="header-subtitle">Единый фитнес-абонемент в сотни<br>фитнес-студий и спортивных центров</span>
      </div>
      <div class="certificate-preview__body">
        <p class="body-content">Сертификат<br>
          <span class="body-content__value">{{currentCertificatePoints}}</span>
          баллов
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CertificatePreview',
  components: {
  },
  data: function() {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapState({
      currentDesign: function(state) {
        return state.certificate.designId;
      },
      currentCertificate: function(state) {
        return state.certificate.certificateId;
      },
      currentCertificatePoints: function(state) {
        return state.currentCertificatePoints;
      }
    }),
    setCurrentDesign() {
      switch (parseInt(this.currentDesign, 10)) {
        case 1:
          return 'design-1';
          break;
        case 2:
          return 'design-2';
          break;
        case 3:
          return 'design-3';
          break;
      }
    },
    setCurrentCertificate() {
      switch (parseInt(this.currentCertificate)) {
        case 1:
        case 4:
          return 'green';
          break;
        case 2:
        case 5:
          return 'blue';
          break;
        case 3:
        case 6:
          return 'pink'
          break;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../scss/certificate-preview.scss';
</style>
