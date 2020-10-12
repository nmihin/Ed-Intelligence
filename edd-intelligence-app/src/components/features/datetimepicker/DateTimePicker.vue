<template> 
    <div class="card-box">
        <div class="card-title">
            <h2>Calendar</h2>
        </div>
        <div class="card-content">
            <div id="datepicker-inline"></div>
            <date-picker v-model="date" :config="options"></date-picker>
        </div>
    </div> 
</template>

<script>
  // Import required dependencies 
  import '../../../assets/css/bootstrap-datetimepicker.min.css';
  import '../../../assets/css/pmd-datetimepicker.css';

  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';

   
  export default {    
    data () {
      return {
        date: new Date(),
        options: {
          format: 'YYYY-MM-DD hh:mm A',
          useCurrent: false,
          inline: true
        }       
      }
    },
    components: {
      datePicker
    }
  }
</script>