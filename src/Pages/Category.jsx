import React from 'react'
import CategoryFor from '../Components/CategoryFor/CategoryFor'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const Category = ({ NavClick }) => {
    return (
        <main className='main-content position-relative  h-100 border-radius-lg ps ps--active-y '>
            <NavBar tablename="Category" NavClick={NavClick} />
            <div className="container-fluid  py-4 ">
                <div className="row">
                    <CategoryFor />
                </div>
                <div className="row mt-4">
                    <CategoryFor />
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Category