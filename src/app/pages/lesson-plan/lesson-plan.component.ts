import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-lesson-plan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.css']
})
export class LessonPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(".side-menu-content li a").on("click", function(e){
      e.preventDefault();
      $(".side-menu-content li").each(function(){
        $(this).removeClass("active");
      })
      $(this).parent().addClass("active");
    });
  }

}
