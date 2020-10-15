 <template>
   <div class="row">
     <div class="col-12">
     <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
                <!-- Box -->
            <div class="card-box">
              <div class="card-title">
                <h2>My Test Lesson - English</h2>
              </div>
              <div class="card-element">
                <a href="#" class="edit">
                  <i class="icon icon-edit"></i>
                </a>
                <a href="#" class="delete">
                  <i class="icon icon-delete"></i>
                </a>
              </div>
              <ul class="card-breadcrumb">
                <li>
                  Four
                </li>
                <li>
                  English
                </li>
                <li>
                  <a title="Language" href="#">Language</a>
                </li>
              </ul>
              <div class="card-content">
                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                <button class="button medium ed-btn__primary">CC.4.L.1</button>
              </div>
              <div class="card-footer">
                <i class="icon icon-lesson"></i><span>0 Resources</span>
              </div>
            </div>
        </swiper-slide>
        <swiper-slide>
                <!-- Box -->
            <div class="card-box">
              <div class="card-title">
                <h2>My Test Lesson - English</h2>
              </div>
              <div class="card-element">
                <a href="#" class="edit">
                  <i class="icon icon-edit"></i>
                </a>
                <a href="#" class="delete">
                  <i class="icon icon-delete"></i>
                </a>
              </div>
              <ul class="card-breadcrumb">
                <li>
                  Four
                </li>
                <li>
                  English
                </li>
                <li>
                  <a title="Language" href="#">Language</a>
                </li>
              </ul>
              <div class="card-content">
                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                <button class="button medium ed-btn__primary">CC.4.L.1</button>
              </div>
              <div class="card-footer">
                <i class="icon icon-lesson"></i><span>0 Resources</span>
              </div>
            </div>
        </swiper-slide>
        <swiper-slide>
                <!-- Box -->
            <div class="card-box">
              <div class="card-title">
                <h2>My Test Lesson - English</h2>
              </div>
              <div class="card-element">
                <a href="#" class="edit">
                  <i class="icon icon-edit"></i>
                </a>
                <a href="#" class="delete">
                  <i class="icon icon-delete"></i>
                </a>
              </div>
              <ul class="card-breadcrumb">
                <li>
                  Four
                </li>
                <li>
                  English
                </li>
                <li>
                  <a title="Language" href="#">Language</a>
                </li>
              </ul>
              <div class="card-content">
                <p>Conventions of standard English: Demostrate command of the conventions of the standard English grammar and usage when writing or speaking.</p>
                <button class="button medium ed-btn__primary">CC.4.L.1</button>
              </div>
              <div class="card-footer">
                <i class="icon icon-lesson"></i><span>0 Resources</span>
              </div>
            </div>
        </swiper-slide>
      </swiper>
     </div>
   </div>
 </template>

 <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import '../../../assets/css/swiper.min.css';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      },
    },
  };
</script>