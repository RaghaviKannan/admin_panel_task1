import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const products = [
    {
      id: 1,
      name: "Iphone",
      price: "79000",
      img: "https://www.dslr-zone.com/wp-content/uploads/2021/10/2-2-800x800.jpeg"
    },
    {
      id: 2,
      name: "Ipad",
      price: "54000",
      img: "https://th.bing.com/th/id/OIP.qfs6TGczZnZTUsRgieLceAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 3,
      name: "Macbook",
      price: "119900",
      img: "https://th.bing.com/th/id/OIP.Mm6-aCfO5wnybLGnxW39QAHaFv?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 4,
      name: "Iwatch",
      price: "45900",
      img: "https://th.bing.com/th/id/OIP.p_Zuo7kUMKjU4pXkIUxIcgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 5,
      name: "Airpods",
      price: "19900",
      img: "https://th.bing.com/th/id/OIP.BnAoJbKBnw7faq6XA3SWNgHaJ4?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 6,
      name: "Homepod mini",
      price: "9900",
      img: "https://th.bing.com/th/id/OIP.lufi65gVb98b7OigFptqKgHaHa?w=178&h=180&c=7pid=ImgDet&rs=1"
    },
  ]
  return (
    <div className="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Products</h1>
        <Link to="/product_create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i>Add product</Link>
      </div>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            products.map((product) => {
              return (
                <div className="col mb-5">
                  <div className="card h-100">
                    <img className="card-img-top" src={product.img} alt="..." />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.name}</h5>
                        ${product.price}
                      </div>
                    </div></div></div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products