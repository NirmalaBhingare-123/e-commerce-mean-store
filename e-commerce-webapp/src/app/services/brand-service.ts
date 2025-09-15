import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../../models/brands';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
    constructor(private http:HttpClient){}

    getBrand(){
    return this.http.get<Brand[]>(environment.apiUrl+"/brand");
  }

  addBrand(name:string){
    return this.http.post(environment.apiUrl+"/brand",{name:name})
  }

  updateBrand(id:string,name:string){
    return this.http.put(environment.apiUrl+`/brand/${id}`,{
     name:name
    })
  }

  getBrandById(id:string){
    return this.http.get<Brand>(environment.apiUrl+`/brand/${id}`);
  }

  deleteBrand(id:string){
    return this.http.delete(environment.apiUrl+`/brand/${id}`);
  }
}
