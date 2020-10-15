 <template>
   <div>
             <!-- Box -->
             <div class="card-box">
               <div class="card-title">
                 <h2>My Test Lesson - English 1</h2>
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
             <!-- Box -->
             <div class="card-box">
               <div class="card-title">
                 <h2>My Test Lesson - English 2</h2>
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
             <!-- Box -->
             <div class="card-box">
               <div class="card-title">
                 <h2>My Test Lesson - English 3</h2>
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
             <!-- Box -->
             <div class="card-box">
               <div class="card-title">
                 <h2>My Test Lesson - English 4</h2>
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
   </div>
 </template>

 <script>
    import $ from "jquery";
    import Swiper from '../../../assets/js/swiper.min.js'
    import '../../../assets/css/swiper.min.css';
    
    export default {
        name: 'sidemenu',
        components: {
          $,
          Swiper
        },
        mounted: function() {
              // SWIPER
              // eslint-disable-next-line no-unused-vars
              const swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
                mousewheel: true,
              });
        } 
    }

</script>