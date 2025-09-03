import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.scss'
})
export class CategoryForm {
  name!: string;
  isEdit=false;
  id!:string;

  constructor(private categoryService: CategoryService, private router:Router,private route:ActivatedRoute) {
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    console.log("category id", this.id)

    if(this.id){
    this.isEdit=true;
    this.categoryService.getCategoryById(this.id).subscribe((res:any)=>{
      console.log("res details",res.name);
      this.name=res.name
    })
  }
}

  addCategory() {
    console.log("name value", this.name)
    this.categoryService.addCategory(this.name).subscribe((res:any)=>{
      alert("Category Added Successfully");
      this.router.navigateByUrl("/admin/categories");
    })
  }

  updateCategory(){
    this.categoryService.updateCategory(this.id,this.name).subscribe((res:any)=>{
      alert("Category Updated Successfully");
      this.router.navigateByUrl("/admin/categories");
    })
  }

}
