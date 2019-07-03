<template>
  <div class="builder-wrapper">
    <DesignChooser/>
    <PointsChooser/>
    <DeliverySettings/>
  </div>
</template>

<script>
import DesignChooser from './design-chooser/DesignChooser.vue';
import PointsChooser from './points-chooser/PointsChooser.vue';
import DeliverySettings from './delivery-settings/DeliverySettings.vue';
export default {
  name: 'CertificateBuilder',
  components: {
    DesignChooser,
    PointsChooser,
    DeliverySettings
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
  @import '../scss/certificate-builder.scss';
</style>
