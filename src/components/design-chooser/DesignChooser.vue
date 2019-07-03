<template>
  <div class="design__chooser">
    <h2 class="design__chooser-title">Выберите дизайн</h2>
    <div class="design__chooser-variants ">
      <div v-for="design in designs" class="design__variant" :class="{ 'added': design.added }">
        <img @click="chooseDesign(design.id)" :src="require('../../assets/' + design.name + '.jpg')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignChooser',
    data: function() {
    return {
      designs: [
        {
          name: 'design-1',
          id: 1,
          added: true,
        },
        {
          name: 'design-2',
          id: 2,
          added: false,
        },
        {
          name: 'design-3',
          id: 3,
          added: false,
        }
      ],
    };
  },
  methods: {
    chooseDesign(designId) {
      this.$store.commit('SELECT_DESIGN_ID', designId);
      this.designs.forEach((design) => {
        if(design.id === designId) {
          design.added = true;
        } else {
          design.added = false;
        };
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../scss/design-chooser.scss';
</style>
