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
                                <ul class="side-menu__results">
                                  <li><h2>Math</h2>
                                    <ul>
                                      <li><h3>Kindergarten</h3>
                                        <ul class="esquerda">
                                          <li><a href="#">Counting & Cardinality</a></li>
                                          <li><a href="#">Operations & Algebric Thinking</a></li>
                                          <li><a href="#">Number & Operations in Base Ten</a></li>
                                          <li><a href="#">Measurement & Data</a></li>
                                          <li><a href="#">Geometry</a></li>
                                        </ul>
                                      </li>
                                      <li><h3>First Grade</h3>
                                        <ul class="esquerda">
                                          <li><a href="#">Operations & Algebric Thinking</a></li>
                                          <li><a href="#">Number & Operations in Base Ten</a></li>
                                          <li><a href="#">Measurement & Data</a></li>
                                          <li><a href="#">Geometry</a></li>
                                        </ul>
                                      </li>
                                      <li><h3>Fourth Grade</h3>
                                        <ul class="esquerda">
                                          <li><a href="#">Counting & Cardinality</a></li>
                                          <li><a href="#">Operations & Algebric Thinking</a></li>
                                          <li><a href="#">Number & Operations in Base Ten</a></li>
                                          <li><a href="#">Measurement & Data</a></li>
                                          <li><a href="#">Geometry</a></li>
                                        </ul>
                                      </li>
                                      <li><h3>Fifth Grade</h3>
                                        <ul class="esquerda">
                                          <li><a href="#">Counting & Cardinality</a></li>
                                          <li><a href="#">Operations & Algebric Thinking</a></li>
                                          <li><a href="#">Number & Operations in Base Ten</a></li>
                                          <li><a href="#">Measurement & Data</a></li>
                                          <li><a href="#">Geometry</a></li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icon icon-add-lesson"></i>
                                <p>Add / View Lesson Plan</p>
                                <i class="icon icon-arrow-gray right"></i>
                              </a>
                              <ul class="side-menu__results">
                                <li><h2>Math</h2>
                                  <ul>
                                    <li><h3>Kindergarten</h3>
                                      <ul class="esquerda">
                                        <li><a href="#">Counting & Cardinality</a></li>
                                        <li><a href="#">Operations & Algebric Thinking</a></li>
                                        <li><a href="#">Number & Operations in Base Ten</a></li>
                                        <li><a href="#">Measurement & Data</a></li>
                                        <li><a href="#">Geometry</a></li>
                                      </ul>
                                    </li>
                                    <li><h3>First Grade</h3>
                                      <ul class="esquerda">
                                        <li><a href="#">Operations & Algebric Thinking</a></li>
                                        <li><a href="#">Number & Operations in Base Ten</a></li>
                                        <li><a href="#">Measurement & Data</a></li>
                                        <li><a href="#">Geometry</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                            </ul>
                            </li>
                            <li>
                              <a href="#">
                                <i class="icon icon-follow"></i>
                                <p>Follow Lesson Plan</p>
                                <i class="icon icon-arrow-gray right"></i>
                              </a>
                              <ul class="side-menu__results">
                                <li><h2>Math</h2>
                                  <ul>
                                    <li><h3>First Grade</h3>
                                      <ul class="esquerda">
                                        <li><a href="#">Operations & Algebric Thinking</a></li>
                                        <li><a href="#">Number & Operations in Base Ten</a></li>
                                        <li><a href="#">Measurement & Data</a></li>
                                        <li><a href="#">Geometry</a></li>
                                      </ul>
                                    </li>
                                    <li><h3>Fourth Grade</h3>
                                      <ul class="esquerda">
                                        <li><a href="#">Counting & Cardinality</a></li>
                                        <li><a href="#">Operations & Algebric Thinking</a></li>
                                        <li><a href="#">Number & Operations in Base Ten</a></li>
                                        <li><a href="#">Measurement & Data</a></li>
                                        <li><a href="#">Geometry</a></li>
                                      </ul>
                                    </li>
                                    <li><h3>Fifth Grade</h3>
                                      <ul class="esquerda">
                                        <li><a href="#">Counting & Cardinality</a></li>
                                        <li><a href="#">Operations & Algebric Thinking</a></li>
                                        <li><a href="#">Number & Operations in Base Ten</a></li>
                                        <li><a href="#">Measurement & Data</a></li>
                                        <li><a href="#">Geometry</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
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
    
    export default {
        name: 'sidemenu',
        mounted: function() {
              $(".side-menu-content li a").on("click", function(e){
                e.preventDefault();
                $(".side-menu-content li").each(function(){
                  $(this).removeClass("active");
                })
                $(this).parent().addClass("active");
              });
        } 
    }

</script>
