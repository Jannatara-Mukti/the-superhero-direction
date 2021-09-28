import React from 'react';
import './Writer.css';

const Writer = (props) => {
    //console.log(props.writer);

    const { img, name, born, died, nationality, totalBooks } = props.writer;
    return (
        <div className="single-writer">
            <img src={img} alt="" />
            <p><b>Name: </b>{name}</p>
            <p><b>Born:</b> {born}</p>
            <p><b>Died:</b> {died}</p>
            <p><b>Nationality:</b> {nationality}</p>
            <p><b>Books Written:</b> {totalBooks}</p>
            <button onClick={() => props.handleAddtoCart(props.writer)} className="btn"><i className="fas fa-pen-alt"></i>Add To Cart</button>
        </div>
    );
};

export default Writer;