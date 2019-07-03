<template>
	<div class="tab-wrapper">
		<div class="tab-header">
			<button @click="toReceiverChooser" class="back-btn"></button>
			<button @click="toWhom" class="tab-switcher">От Кого</button>
			<span class="tab-title">Кому</span>
		</div>
		<div class="tab-info">
      <input v-model="receiverName" type="text" placeholder="Имя*" required/>
      <input v-model="receiverEmail" type="email" placeholder="Email*" required/>
      <input v-model="receiverPhone" type="text" placeholder="Телефон*" required/>
    </div>
	</div>
</template>
<script>
export default {
  name: 'ToWhom',
    data: function() {
    return {
    };
  },
  methods: {
    toReceiverChooser() {
      this.$store.commit('CHANGE_DELIVERY_SETTINGS_TAB', 'ReceiverChooser');
    },
    toWhom() {
      this.$store.commit('CHANGE_DELIVERY_SETTINGS_TAB', 'fromWhom');
    }
  },
  computed: {
    receiverName: {
      get () {
        return this.$store.state.certificate.receiver.name
      },
      set (value) {
        this.$store.commit('UPDATE_RECEIVER_NAME', value)
      }
    },
    receiverEmail: {
      get () {
        return this.$store.state.certificate.receiver.email
      },
      set (value) {
        this.$store.commit('UPDATE_RECEIVER_EMAIL', value)
      }
    },
    receiverPhone: {
      get () {
        return this.$store.state.certificate.receiver.phone
      },
      set (value) {
        this.$store.commit('UPDATE_RECEIVER_PHONE', value)
      }
    },
  }
}
</script>
<style lang="scss">
	@import '../../../scss/tab.scss';
</style>