import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deliverySettingsTab: 'ReceiverChooser',
    currentCertificatePoints: 30,
    currentCertificateAmount: 2490,
    certificate: {
      // deliveryType: 'electronic',
      designId: 1,
      certificateId: 1,
      gift: true,
      receiver: {
        name: '',
        email: '',
        adress: '',
        comment: '',
        phone: '',
      },
      buyer: {
        name: '',
        email: '',
        phone: '',
      },
      instantly: false,
      deliveryDate: '',
      deliveryTime: '',
      gratters: '',
      quantity: 1,
      totalAmount: 2490,
    }
  },
  mutations: {
    CHANGE_DELIVERY_SETTINGS_TAB(state, tabname) {
      state.deliverySettingsTab = tabname;
    },
    UPDATE_RECEIVER_NAME(state, value) {
      state.certificate.receiver.name = value;
    },
    UPDATE_RECEIVER_EMAIL(state, value) {
      state.certificate.receiver.email = value;
    },
    UPDATE_RECEIVER_PHONE(state, value) {
      state.certificate.receiver.phone = value;
    },
    UPDATE_BUYER_NAME(state, value) {
      state.certificate.buyer.name = value;
    },
    UPDATE_BUYER_EMAIL(state, value) {
      state.certificate.buyer.email = value;
    },
    UPDATE_BUYER_PHONE(state, value) {
      state.certificate.buyer.phone = value;
    },
    SELECT_DESIGN_ID(state, value) {
      state.certificate.designId = value;
    },
    SELECT_CERTIFICATE_ID(state, value) {
      state.certificate.certificateId = value.id;
      state.currentCertificatePoints = value.points;
      state.currentCertificateAmount = value.roubles;
    },
    UPDATE_PICKED_DATE(state, value) {
      state.certificate.deliveryDate = value;
      state.certificate.instantly = false;
    },
    UPDATE_PICKED_TIME(state, value) {
      state.certificate.deliveryTime = value;
      state.certificate.instantly = false;
    },
    UPDATE_GRATTERS(state, value) {
      state.certificate.gratters = value;
    },
    DECREMENT_QUANTITY(state, value) {
      state.certificate.quantity = state.certificate.quantity - value;
    },
    INCREMENT_QUANTITY(state, value) {
      state.certificate.quantity = state.certificate.quantity + value;
    },
    UPDATE_TOTAL_AMOUNT(state) {
      state.certificate.totalAmount = state.currentCertificateAmount * state.certificate.quantity;
    },
    SELECT_INSTANTLY_DELIVERY(state) {
      state.certificate.instantly = true;
      state.certificate.deliveryTime = '';
      state.certificate.deliveryDate = '';
    }
  },
  actions: {

  }
})