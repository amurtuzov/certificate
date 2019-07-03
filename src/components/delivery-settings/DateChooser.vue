<template>
	<div class="date-chooser">
    <h2 class="date__chooser-title">Когда отправить<br>сертификат?</h2>
    <button @click="instantlyDelivery">Моментально</button>
    <button id="show-modal" @click="showModal = true">Выбрать дату и время</button>
    <DatePickerModal v-if="showModal" @close="showModal = false"/>
</div>
</template>

<script>
import DatePickerModal from './DatePickerModal.vue';
export default {
	name: 'DateChooser',
  components: {
    DatePickerModal,
  },
	data: function() {
    return {
      showModal: false,
    };
  },
  methods: {
    instantlyDelivery() {
      this.$store.commit('SELECT_INSTANTLY_DELIVERY');
    }
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
  @import '../../scss/date-chooser.scss';
</style>
