<template>
	<div class="tab-wrapper">
    <div class="tab-header">
      <span class="tab-title">Кому</span>
    </div>
    <div class="tab-content tab-switchers">
      <button @click="toMySelf">Себе</button>
      <button @click="fromWhom">Другу</button>
    </div>
	</div>
</template>
<script>
export default {
  	name: 'ReceiverChooser',
    data: function() {
    return {
    };
  },
  methods: {
    toMySelf() {
      this.$store.commit('CHANGE_DELIVERY_SETTINGS_TAB', 'toMyself');
    },
    fromWhom() {
      this.$store.commit('CHANGE_DELIVERY_SETTINGS_TAB', 'fromWhom');
    }
  },
}
</script>
<style lang="scss">
  @import '../../../scss/tab.scss';
</style>