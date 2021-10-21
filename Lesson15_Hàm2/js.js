// hàm hiển thị sản phẩm
let product = ['Sony Xperia','Samsung Galaxy','Nokia 6','Iphone 13']
function showProduct() {
    let content=''
    for (let i = 0; i < product.length; i++) {
        content += ' <tr>\n' +
            '        <td style="text-align: left; width: 200px"> '+ product[i]+'</td>\n' +
            '        <td><button onclick="editProduct('+ i +')"  >Edit</button> </td>\n' +
            '        <td><button onclick="deleteProduct('+ i +')" > Delete</button></td>\n' +
            '    </tr>'
    }
    document.getElementById('productList').innerHTML= content
}
//Hàm thêm sản phẩm và hiển thị vào danh sách
function addNewProduct(){
    let value = document.getElementById('newProduct').value;
    product.push(value)
    showProduct()
    document.getElementById('newProduct').value = "";
}
//Hàm xóa sản phẩm
function deleteProduct(index){
    product.splice(index,1)
    showProduct()
}
// Hàm sửa sản phẩm
// đưa tên sản phẩm về thanh input
// sửa xong ấn button edit bên cạnh để lưu vào ds và hiển thị
function editProduct(index){
let newName = prompt("Nhập tên chỉnh sửa ", product[index])
    product[index] = newName
    showProduct()
}