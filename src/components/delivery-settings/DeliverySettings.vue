<template>
	<div class="delivery-settings">
		<keep-alive>
			<component v-bind:is="currentTab"></component>
		</keep-alive>
    <DateChooser/>
	</div>
</template>
<script>
import ReceiverChooser from './tabs/ReceiverChooser.vue';
import ToMyself from './tabs/ToMyself.vue';
import FromWhom from './tabs/FromWhom.vue';
import ToWhom from './tabs/ToWhom.vue';
import DateChooser from './DateChooser.vue';
import { mapState } from 'vuex';
export default {
	name: 'DeliverySettings',
	components: {
    ReceiverChooser,
    ToMyself,
    FromWhom,
    ToWhom,
    DateChooser
  	},
	data: function() {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapState({
      currentTab: function(state) {
        return state.deliverySettingsTab;
      }
    })
  },
}
</script>
<style lang="scss">
	@import '../../scss/delivery-settings.scss';
</style>