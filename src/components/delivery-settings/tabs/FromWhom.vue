<template>
	<div class="tab-wrapper">
		<div class="tab-header">
			<button @click="toReceiverChooser" class="back-btn"></button>
			<span class="tab-title">От кого</span>
			<button @click="fromWhom" class="tab-switcher">Кому</button>
		</div>
		<div class="tab-info">
      		<input v-model="buyerName" type="text" placeholder="Имя*" required/>
      		<input v-model="buyerEmail" type="email" placeholder="Email*" required/>
      		<input v-model="buyerPhone" type="text" placeholder="Телефон*" required/>
		</div>
	</div>
</template>
<script>
export default {
  name: 'FromWhom',
    data: function() {
    return {
    };
  },
  methods: {
	toReceiverChooser() {
		this.$store.commit('CHANGE_DELIVERY_SETTINGS_TAB', 'ReceiverChooser');
  	},
  	fromWhom() {
  		this.$store.commit('CHANGE_DELIVERY_SETTINGS_TAB', 'toWhom');
  	}
  },
  computed: {
  	 buyerName: {
      get () {
        return this.$store.state.certificate.buyer.name
      },
      set (value) {
        this.$store.commit('UPDATE_BUYER_NAME', value)
      }
    },
    buyerEmail: {
      get () {
        return this.$store.state.certificate.buyer.email
      },
      set (value) {
        this.$store.commit('UPDATE_BUYER_EMAIL', value)
      }
    },
    buyerPhone: {
      get () {
        return this.$store.state.certificate.buyer.phone
      },
      set (value) {
        this.$store.commit('UPDATE_BUYER_PHONE', value)
      }
    },
  }
}
</script>
<style lang="scss">
	@import '../../../scss/tab.scss';
</style>