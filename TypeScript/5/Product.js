var Product = /** @class */ (function () {
    function Product(pname, pid) {
        this.pname = pname;
        this.pid = pid;
    }
    Product.prototype.display = function () {
        console.log("Product Name : " + this.pname + " Product ID: " + this.pid);
    };
    return Product;
}());
var productlist = [new Product('first', 1), new Product('second', 2), new Product('third', 3), new Product('four', 4)];
productlist.forEach(function (product) { console.log(product.display()); });
