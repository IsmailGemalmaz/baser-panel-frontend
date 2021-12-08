import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { About } from '../about/About';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css'],
  providers: [AboutService]
})
export class AdminAboutComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private aboutService: AboutService) { }
  public Editor = ClassicEditor;
  @Input() readonly: boolean = false;
  private _value: string = "";
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }


  aboutAddForm!: FormGroup;
  certificatesAddForm!: FormGroup;
  referencesAddForm!: FormGroup;


  about: About = new About();
  createAboutAddForm() {
    this.aboutAddForm = this.formBuilder.group({
      about: ["", Validators.required],
      aboutTitle: ["", Validators.required]
    })
  };

  createCerAddForm() {
    this.certificatesAddForm = this.formBuilder.group({
      certificates: ["", Validators.required]
    })
  };


  createRefAddForm() {
    this.referencesAddForm = this.formBuilder.group({
      references: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createAboutAddForm();
    this.createCerAddForm();
    this.createRefAddForm();
  }

  addAbout() {
    if (this.aboutAddForm.valid) {
      this.about = Object.assign({}, this.aboutAddForm.value);
    }
    this.aboutService.addAbout(this.about).subscribe(data => {
      console.log("eklendi");
    })
   
  }

  addCer(){
    if (this.certificatesAddForm.valid) {
      this.about = Object.assign({}, this.certificatesAddForm.value);
    }
    this.aboutService.addAbout(this.about).subscribe(data => {
      console.log("eklendi");
    })
  }

  addRef(){
    if (this.referencesAddForm.valid) {
      this.about = Object.assign({}, this.referencesAddForm.value);
    }
    this.aboutService.addAbout(this.about).subscribe(data => {
      console.log("eklendi");
    })
  }



}
