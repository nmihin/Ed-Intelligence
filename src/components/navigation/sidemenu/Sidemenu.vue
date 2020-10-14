 <template>          
      <!-- Side Menu -->
                  <div class="side-menu">
                    <div class="col-12 col-md-4 side-menu-header">
                        <div class="side-menu-profile">
                            <img src="../../../assets/img/users/avatar-1.jpg" alt="User">
                            <h2>Reanna Gulgowski Oberbrunerhoffman von Düsseldorf</h2>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 side-menu-content">
                        <ul>
                            <li class="active">
                              <a href="#">
                                <i class="icon icon-lesson"></i>
                                <p>My Lesson Plan</p>
                                <i class="icon icon-arrow-gray right"></i>
                              </a>
                                <ul class="side-menu__results card-boxes lessons">
                                    <li>
                                        <div class="swiper-container">
                                          <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                              <CardLesson />
                                            </div>
                                          </div>
                                          <div class="swiper-scrollbar"></div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icon icon-add-lesson"></i>
                                <p>Add / View Lesson Plan</p>
                                <i class="icon icon-arrow-gray right"></i>
                              </a>
                              <ul class="side-menu__results card-boxes lessons">
                                <li><CardLesson /></li>
                            </ul>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icon icon-follow"></i>
                                <p>Follow Lesson Plan</p>
                                <i class="icon icon-arrow-gray right"></i>
                              </a>
                              <ul class="side-menu__results card-boxes lessons">
                                <li><CardLesson /></li>
                              </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4 side-menu-footer">
                        <a href="#" class="left"><i class="icon icon-profile"></i></a>
                        <a href="#" class="left"><i class="icon icon-m-settings"></i></a>
                        <a href="#" class="right"><i class="icon icon-logout"></i></a>
                    </div>
                  </div>
      <!-- Side Menu-END -->
 </template>

<script>
    import $ from "jquery";
    import CardLesson from '../../../components/cards/lessons/CardLesson.vue'
    import Swiper from '../../../assets/js/swiper.min.js'
    import '../../../assets/css/swiper.min.css';
    
    export default {
        name: 'sidemenu',
        components: {
          CardLesson
        },
        mounted: function() {
              // TOGGLER
              $(".side-menu-content li a").on("click", function(e){
                e.preventDefault();
                $(".side-menu-content li").each(function(){
                  $(this).removeClass("active");
                })
                $(this).parent().addClass("active");
              });
              // SWIPER
              // eslint-disable-next-line no-unused-vars
              const swiper = new Swiper('.swiper-container', {
                  direction: 'vertical',
                  slidesPerView: 'auto',
                  freeMode: true,
                  scrollbar: {
                    el: '.swiper-scrollbar',
                  },
                  mousewheel: true
              });
        } 
    }

</script>