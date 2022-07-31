import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Key } from '../interfaces/key';
import { GenerateKeyDto } from '../dtos/generate-key-dto';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class KeysService {
 

  constructor(private http : HttpClient) { }

  getKeys() : Observable<Key[]> {
    return this.http.get<Key[]>(environment.baseBackendUrl+"getKeys");
  }

  addKey(key : GenerateKeyDto) : Observable<Key> {
    return this.http.post<Key>(environment.baseBackendUrl+"generate", key , httpOptions);
  }

  updateKey(key : Key) : Observable<Key> {
    return this.http.put<Key>(environment.baseBackendUrl+"updateKey" , key , httpOptions);
  }

  deleteKey(keyId : string) : Observable<void> {
    return this.http.delete<void>(environment.baseBackendUrl+"deleteKey{"+keyId+"}");
  }
}
