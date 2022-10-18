import React from 'react'

function Createuser() {
    return (
        <div className="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create user</h1>
            </div>
            <form>
                <div className='container'>
                    <div class="row">
                        <div class="col-lg-4">
                            <label>First name</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Last name</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Email</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Country</label>
                            <select class="form-control">
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        <div class="col-lg-4">
                            <label>State</label>
                            <select class="form-control">
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        <div class="col-lg-4">
                            <label>City</label>
                            <select class="form-control">
                                <option value="">-select-</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="China">China</option>
                            </select>
                        </div>
                        <div class="col-lg-4">
                            <label>Date of Birth</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Phone</label>
                            <input type="number" class="form-control" />
                        </div>
                        <div class="col-lg-4">
                            <label>Gender</label>
                            <select class="form-control">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
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

export default Createuser