import React, { useState } from 'react';
import './Admin.css';
import grid from '../../images/icons/grid.png';
import plus from '../../images/icons/plus.png';
import edit from '../../images/icons/edit.png';
import AddBook from './AddBook/AddBook';
import ManageBooks from './ManageBooks/ManageBooks';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [showAddBook, setShowAddBook] = useState(true)
    return (
        <div className="admin-container">
            <div className="admin-sidebar-container">
                <Link to="/" className="link"><h1>DEV LIBRARY</h1></Link>
                <div onClick={()=>setShowAddBook(false)} className={showAddBook ? '' : 'active'}>
                    <img src={grid} alt=""/>
                    <h4>Manage Books</h4>
                </div>
                <div onClick={()=>setShowAddBook(true)} className={showAddBook ? 'active' : ''}>
                    <img src={plus} alt=""/>
                    <h4>Add Book</h4>
                </div>
                <div onClick={() => alert('Edit option is not available now')}>
                    <img src={edit} alt=""/>
                    <h4>Edit Books</h4>
                </div>
            </div>
            <div>
                { 
                    showAddBook ? <AddBook></AddBook> : <ManageBooks></ManageBooks>
                }
            </div>
        </div>
    );
};

export default Admin;