<template>     
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
          <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 ed_card-boxes lessons">
                <CardPlan />
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ed_card-boxes aside">
                <div class="row">
                  <!-- Box -->
                  <Swiper />
                </div>
                <div class="row">
                  <!-- Box -->
                  <DateTimePicker />
                </div>
              </div>
          </div>
        </div>
      </div>
      <!-- main-content-END -->
</template>     

<script>
import CardPlan from '../components/cards/plans/CardPlan.vue'
import DateTimePicker from '../components/features/datetimepicker/DateTimePicker.vue'
import Swiper from '../components/features/swiper/Swiper.vue'

export default {
  name: 'App',
  components: {
    CardPlan,
    DateTimePicker,
    Swiper
  }
}
</script>