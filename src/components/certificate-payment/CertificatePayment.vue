<template>
  <div class="payment-wrapper">
    <div class="gratters__wrapper">
    <textarea @input="getGrattersCount" v-model="gratters" class="preview-gratters" maxlength="140" placeholder="Напишите ваши поздравления"></textarea>
    <p class="preview-gratters__count">{{this.grattersCount}}/140</p>
    </div>
    <div class="quantity-toggler">
      <button class="decrementor" @click="decrementQuantity" :disabled="decrementButtonState">-</button>
      <span class="quantity-display">{{quantity}}</span>
      <button class="incrementor" @click="incrementQuantity">+</button>
    </div>
    <button class="make-payment">
      <span>Оплатить</span>
      <span>{{totalAmount}}</span>
    </button>
    <div class="payment-systems">
      <img class="payment-systems__visa" src="../../assets/visa-logo.png" alt="Visa"/>
      <img class="payment-systems__mc" src="../../assets/Mastercard-logo.png" alt="MasterCard"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CertificatePayment',
  components: {
  },
  data: function() {
    return {
      grattersCount: 0,
    };
  },
  methods: {
    getGrattersCount(e) {
      this.grattersCount = e.target.value.length
    },
    decrementQuantity() {
      this.$store.commit('DECREMENT_QUANTITY', 1);
      this.$store.commit('UPDATE_TOTAL_AMOUNT');
    },
    incrementQuantity() {
      this.$store.commit('INCREMENT_QUANTITY', 1);
      this.$store.commit('UPDATE_TOTAL_AMOUNT');
    },
  },
  computed: {
    ...mapState({
      totalAmount: function(state) {
        return state.certificate.totalAmount;
      },
      quantity: function(state) {
        return state.certificate.quantity;
      },
    }),
    decrementButtonState() {
      if(this.quantity > 1) {
        return false;
      } else {
        return true;
      }
    },
    gratters: {
      get () {
        return this.$store.state.certificate.gratters
      },
      set (value) {
        this.$store.commit('UPDATE_GRATTERS', value)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../scss/certificate-payment.scss';
</style>
