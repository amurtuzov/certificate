<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <div class="selected-date">
              <span class="title">Дата</span>
              <span class="subtitle">{{this.formatPickedDate}}</span>
            </div>
            <div class="selected-time">
              <span class="title">Время</span>
              <span class="subtitle">{{this.pickedTime}}</span>
            </div>
          </div>
          <div class="modal-body">
            <v-app id="inspire">
              <div v-if="showDatePicker">
                <v-date-picker
                  class="mt-3"
                  first-day-of-week="1"
                  locale="ru"
                  width="280"
                  :no-title="true"
                  :allowed-dates="allowedDates"
                  v-model="pickedDate"
                  :min="minDate"
                  :max="maxDate">
                </v-date-picker>
              </div>
              <div v-if="showTimePicker" class="time-picker">
                <div class="available-times">
                  <button @click="selectTime" :class="{'active' : availableTime.hours === pickedTime}" v-for="availableTime in availableTimes" :value="availableTime.hours">{{availableTime.hours}}</button>
                </div>
              </div>
            </v-app>
          </div>
          <div class="modal-footer">
              <button v-if="!showTimePicker" class="modal-default-button modal-cancel" @click="$emit('close')">Отмена</button>
              <button @click="switchToTimePicker" v-if="showDatePicker" class="modal-default-button modal-next-step">Выбрать время</button>
              <button @click="switchToDatePicker" v-if="showTimePicker" class="modal-default-button modal-prev-step">Выбрать дату</button>
              <button v-if="showTimePicker" class="modal-default-button modal-closer" @click="$emit('close')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DatePickerModal',
  data: function() {
    return {
      pickedDate: minDate.toISOString().split('T')[0],
      minDate: minDate.toISOString().split('T')[0],
      maxDate: maxDate.toISOString().split('T')[0],
      showDatePicker: true,
      showTimePicker: false,
      availableTimes: deliveryTimes,
      pickedTime: '19:00',
    };
  },
  methods: {
    allowedDates: val => getNextWeekEnd().indexOf(val) == -1,
    switchToTimePicker: function() {
      this.showDatePicker = false;
      this.showTimePicker = true;
    },
    switchToDatePicker: function() {
      this.showDatePicker = true;
      this.showTimePicker = false;
    },
    selectTime: function(e) {
      this.pickedTime = e.target.value;
      this.$store.commit('UPDATE_PICKED_TIME', e.target.value);
    },
  },
  watch: {
    pickedDate: function(value) {
      this.$store.commit('UPDATE_PICKED_DATE', value)
    },
  },
  computed: {
    formatPickedDate() {
      let pickedDate = new Date(this.pickedDate);
      let months = [ "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ];
      return `${pickedDate.getDate()} ${months[pickedDate.getMonth()]}`;
    }
  }
}

//  Настройки календаря
let today = new Date();
// today.setDate(today.getDate() + 2)
let minDate = new Date(today.setDate(today.getDate() + 1))
let maxDate = new Date(today.setDate(today.getDate() + 730))
function getNextWeekEnd() {
  let currentDate = new Date();
  // currentDate.setDate(currentDate.getDate() + 2);
  let nextWeekend = [];
  if (currentDate.getDay() === 6) {
    let nextSaturday = new Date();
    nextSaturday.setDate(currentDate.getDate());
    let nextSunday = new Date();
    nextSunday.setDate(currentDate.getDate() + 1);
    nextWeekend = [nextSaturday.toISOString().split('T')[0],nextSunday.toISOString().split('T')[0]];
    return nextWeekend;
  } else if (currentDate.getDay() === 0) {
      let nextSunday = new Date();
      nextSunday.setDate(currentDate.getDate());
      nextWeekend = [nextSunday.toISOString().split('T')[0]];
      return nextWeekend;
  } else {
      return nextWeekend;
  }
};

// Настройки выбора времени
let deliveryTimes = [];
for (let i = 0; i < 24; i++) {
  deliveryTimes.push({
    hours: i + ':00',
  })
};
</script>
<style lang="scss">
    @import '../../scss/datepicker-modal.scss'
</style>