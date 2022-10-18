import React from 'react'

function Createproduct() {
    return (
        <div className="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create product</h1>
            </div>
            <form>
                <div className='container'>
                    <div class="row">
                        <div class="col-lg-4">
                            <label>Product name</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Product price</label>
                            <input type="number" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Image</label>
                            <input type="file" class="form-control" />
                        </div>
                        <div>
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createproduct