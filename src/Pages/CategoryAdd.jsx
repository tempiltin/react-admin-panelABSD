import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const CategoryAdd = ({ NavClick }) => {
    return (
        <main className='main-content position-relative  h-100 border-radius-lg ps ps--active-y '>
            <NavBar tablename="Category-Add" NavClick={NavClick} />
            <div className="container-fluid  py-4 ">
                <div className="row justify-content-around BODY">
                    <div className="col-lg-6">
                        <form action="" className='row'>
                            <div className="col-12">
                                <label htmlFor="category">Category Add</label>
                                <input type="text" name='category' value="Category-Add" className='form-control' />
                            </div>
                           <div className="col-12 mt-4">
                               <button type='button' className='category-btn'>Add</button>
                           </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default CategoryAdd