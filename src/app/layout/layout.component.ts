import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 menus = [
   {name: 'Progress  Graph', path: 'progress-examples'},
   {name: 'Content Projection', path: 'content-projection'},
  
 ];
 selectedMenu = 0;
  ngOnInit() {}
}
