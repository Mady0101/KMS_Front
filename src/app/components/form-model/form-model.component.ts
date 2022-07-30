import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css'],
  inputs: ['value']
})
export class FormModelComponent implements OnInit {

  public value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
