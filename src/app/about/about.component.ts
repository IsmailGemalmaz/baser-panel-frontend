import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { About } from './About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[AboutService]
})
export class AboutComponent implements OnInit {

  constructor(private aboutService:AboutService) { }
  abouts:About[]=[];

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(data=>{
      this.abouts=data;
    })
  }

}
