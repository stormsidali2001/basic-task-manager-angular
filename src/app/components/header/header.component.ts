import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask:boolean = false;
  subscribtion!:Subscription;

  constructor(private uiService:UiService,private router:Router) { 
    this.subscribtion = this.uiService.onToggle().subscribe(value=>{
        this.showAddTask = value;
    });
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
  hasRoute(route:string){
    this.router.url === route;
  }

}
