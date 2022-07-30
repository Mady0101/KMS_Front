import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-key-form',
  templateUrl: './add-key-form.component.html',
  styleUrls: ['./add-key-form.component.css']
})
export class AddKeyFormComponent implements OnInit {

  @Input() formType !: string;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();
  
  public formValue !: FormGroup;

  

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      userId:['',Validators.required],
      keyName:['',Validators.required],
      keyAliase:['',Validators.required],
      keyStatus:['disabled']
    })
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.formValue.value);
    this.submitEvent.emit(this.formValue.value);
    this.formValue.reset();
  }

}
