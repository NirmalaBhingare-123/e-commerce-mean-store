import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    // http=inject(HttpClient);

    constructor(private http:HttpClient){}

    getCategory(){
    return this.http.get<Category[]>("http://localhost:2000/category");
  }

  addCategory(name:string){
    return this.http.post("http://localhost:2000/category",{name:name})
  }

  updateCategory(id:string,name:string){
    return this.http.put(`http://localhost:2000/category/${id}`,{
     name:name
    })
  }

  getCategoryById(id:string){
    return this.http.get<Category>(`http://localhost:2000/category/${id}`);
  }

  deleteCategory(id:string){
    return this.http.delete(`http://localhost:2000/category/${id}`);
  }
}
