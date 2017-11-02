import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';

// Class decorator
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent
    implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
   
    private _listFilter : string;
    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(v : string) {
        this._listFilter = v;
        this.filteredProducts = this.listFilter 
            ? this.performFilter(this.listFilter) 
            : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    // Ideally we shouldnt have loaded functions here. Little as possible code
    // Injection of Product Service from Angular Module. Since we already injected into app.component
    constructor(private _productService : ProductService){
    }

    // Initial load function if required.
    // Good practice 
    ngOnInit(): void{
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
        this.listFilter = '';
    }

    // Image toggle function
    toggleImage(): void {
        // return true or false. And in html we use *ngIf to show and hide
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product : IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
