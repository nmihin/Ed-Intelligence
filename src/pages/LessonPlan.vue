 <template> 
      <!-- Main Content -->
      <div class="main-content">
        <div class="container-fluid">
          <div class="row">
              <div class="col-xs-12 col-md-12">
                <Sidemenu />
              </div>
          </div>
        </div>
       </div>
</template>

<script>
import Sidemenu from '../components/navigation/sidemenu/Sidemenu.vue'

export default {
  name: 'App',
  components: {
    Sidemenu
  }
}
</script>