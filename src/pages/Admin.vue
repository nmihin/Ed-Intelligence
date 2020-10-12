<template>   
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
        <div class="row">
          <div class="col-12">
          <CardAdmin />
          </div>
          <div class="col-12">
            <div class="card-boxes">
              <div class="container-fluid">
                <div class="row d-flex justify-content-around flex-nowrap">
                  <CardLesson />
                  <Chart />
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
      <!-- main-content-END -->
</template>


<script>
import CardAdmin from '../components/cards/admin/CardAdmin.vue'
import CardLesson from '../components/cards/lessons/CardLesson.vue'
import Chart from '../components/features/chart/Chart.vue'

export default {
  name: 'App',
  components: {
    CardAdmin,
    CardLesson,
    Chart
  }
}
</script>