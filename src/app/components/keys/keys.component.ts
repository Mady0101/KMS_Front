import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/interfaces/key';


@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  keysList : Key[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmitEvent(submitedForm : any){
    console.log(submitedForm);
    const key : Key = { 
      "keyName" : submitedForm.keyName,
      "keyAliase" : submitedForm.keyAliase,
      "keyStatus" : submitedForm.keyStatus ? "enabled" : "disabled",
      "secretKey" : "randomSecretKey",
      "keyId" : "randomKeyId",
      "createdDate" : "randomDate"
    }
    this.keysList.push(key);
  }


  deleteKey(keyId : string){
    this.keysList = this.keysList.filter( key => {
      return key.keyId !== keyId
    })
  }

}
