import React from "react";
import { Button, Card, CloseButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Book =({
    id,
    bookname,
    author,
    quantity,
    price,
    date,
    handleRemoveBook
}) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/edit/${id}`);
    }
    return (
        <Card style={{width: '18rem'}} className='book'>
            <Card.Body>
                <Card.Title className='book-title'>{bookname}</Card.Title>
                <div className="book-details">
                    <div>Author: {author}</div>
                    <div>Quantity: {quantity}</div>
                    <div>Price: {price}</div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant='outline-primary' onClick={handleEditClick}>Edit</Button>
                <CloseButton onClick={() => handleRemoveBook(id)} />
            </Card.Body>
        </Card>
    );
};

export default Book;