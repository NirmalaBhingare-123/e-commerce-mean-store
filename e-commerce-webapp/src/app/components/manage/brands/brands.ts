import { Component, inject, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CategoryService } from '../../../services/category-service';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { Brand } from '../../../../models/brands';
import { BrandService } from '../../../services/brand-service';

@Component({
  selector: 'app-brands',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatButtonModule, RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class Brands {
displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<Brand>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private brandService:BrandService,private router:Router) {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit(){
    this.getServerData();
  }

  private getServerData() {
    this.brandService.getBrand().subscribe((result) => {
      console.log('brand data', result);
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCategory(id:string){
   this.brandService.deleteBrand(id).subscribe((res:any)=>{
    console.log("deleted successfully");
    alert("Brand Deleted Successfully");
    this.getServerData();
   })
  }
}
