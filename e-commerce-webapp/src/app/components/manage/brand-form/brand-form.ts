import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../services/category-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../../../services/brand-service';


@Component({
  selector: 'app-brand-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './brand-form.html',
  styleUrl: './brand-form.scss'
})
export class BrandForm {
  name!: string;
  isEdit=false;
  id!:string;

  constructor(private brandService: BrandService, private router:Router,private route:ActivatedRoute) {
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    console.log("brand id", this.id)

    if(this.id){
    this.isEdit=true;
    this.brandService.getBrandById(this.id).subscribe((res:any)=>{
      console.log("res details",res.name);
      this.name=res.name
    })
  }
}

  addBrand() {
    console.log("name value", this.name)
    this.brandService.addBrand(this.name).subscribe((res:any)=>{
      alert("Brand Added Successfully");
      this.router.navigateByUrl("/admin/brands");
    })
  }

  updateBrand(){
    this.brandService.updateBrand(this.id,this.name).subscribe((res:any)=>{
      alert("Brand Updated Successfully");
      this.router.navigateByUrl("/admin/brands");
    })
  }
}
