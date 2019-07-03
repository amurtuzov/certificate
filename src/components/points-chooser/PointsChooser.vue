<template>
  <div class="points__chooser">
    <h2 class="points__chooser-title">Выберите баллы</h2>
    <div class="points__chooser-variants">
      <button @click="selectCertificateId(point)" :class="{ 'active' : point.points === currentPoints}" v-for="point in points" :value="point.id" class="points__variant">
        <span class="points__variant-points">{{point.points}} Баллов</span>
        <span class="points__variant-price">{{point.roubles}} &#8381</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignChooser',
    data: function() {
    return {
      currentPoints: 30,
      points: [
        {
          points: 30,
          roubles: 2490,
          id: 1
        },
        {
          points: 60,
          roubles: 4490,
          id: 2
        },
        {
          points: 100,
          roubles: 6990,
          id: 3
        },
        {
          points: 200,
          roubles: 12490,
          id: 4
        },
        {
          points: 500,
          roubles: 28000,
          id: 5
        },
        {
          points: 1000,
          roubles: 50000,
          id: 6
        },
      ]
    };
  },
  methods: {
    selectCertificateId: function(value) {
      this.currentPoints = value.points;
      this.$store.commit('SELECT_CERTIFICATE_ID', value);
      this.$store.commit('UPDATE_TOTAL_AMOUNT');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../scss/points-chooser.scss';
</style>
