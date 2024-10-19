import React, { useState } from "react";
import { images } from '../../utils/ImageExtract';
import { useDispatch } from "react-redux";
import { addingItem, removingItem } from "../../actions/CartItem";

const Home = () => {
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({}); // State to track quantities for each item

    const handleAddItem = (itemId) => {
        // Dispatch the action to add the item
        dispatch(addingItem(itemId));
        setQuantities(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1 // Increment the quantity for the item
        }));
    }

    const handleRemoveItem = (itemId) => {
        if (quantities[itemId] > 1) {
            setQuantities(prev => ({
                ...prev,
                [itemId]: prev[itemId] - 1 // Decrease the quantity for the item
            }));
            dispatch(removingItem(itemId)); // Dispatch the action to remove the item
        } else {
            // Remove item from cart entirely
            setQuantities(prev => {
                const updatedQuantities = { ...prev };
                delete updatedQuantities[itemId]; // Remove item from local state
                return updatedQuantities;
            });
            dispatch(removingItem(itemId)); // Dispatch action to remove item
        }
    }

    return (
        <div className="content" id="detail">
            <section className="container">
                <div className="section-title d-flex justify-content-between align-items-center mb-4">
                    <h3>Fruits & Vegetables</h3>
                    <a href="/fruits-vegetables" className="text-decoration-none fw-bold">View All</a>
                </div>
                <div className="row g-4">
                    {[
                        { img: images.nandiniblue, price: 25 },
                        { img: images.nandiniorange, price: 29 },
                        { img: images.coriander, price: 12 },
                        { img: images.ginger, price: 55 },
                        { img: images.nandiniblue, price: 25 },
                        { img: images.nandiniorange, price: 29 },
                        { img: images.coriander, price: 12 },
                        { img: images.ginger, price: 55 }
                    ].map((item, index) => (
                        <div className="col-6 col-md-3 col-lg-1-5" key={index}>
                            <div className="card h-100">
                                <img src={item.img} className="card-img-top fit-image" alt="..." />
                                <div className="card-body text-center">
                                    <h6 className="fw-bold price-text">Rs. {item.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vegetables Section */}
                <div className="section-title d-flex justify-content-between align-items-center my-4">
                    <h3>Vegetables</h3>
                    <a href="/vegetables" className="text-decoration-none fw-bold">View All</a>
                </div>
                <div className="row g-4">
                    {[
                        { id: 1, img: images.nandiniorange, price: 29 },
                        { id: 2, img: images.coriander, price: 12 },
                        { id: 3, img: images.ginger, price: 55 },
                        { id: 4, img: images.nandiniblue, price: 25 },
                        { id: 5, img: images.nandiniorange, price: 29 },
                        { id: 6, img: images.coriander, price: 12 },
                        { id: 7, img: images.ginger, price: 55 },
                        { id: 8, img: images.nandiniblue, price: 25 }
                    ].map((item) => (
                        <div className="col-6 col-md-3 col-lg-1-5" key={item.id}>
                            <div className="card h-100">
                                <img src={item.img} className="card-img-top fit-image" alt="..." />
                                <div className="card-body text-center">
                                    <h6 className="fw-bold price-text">Rs. {item.price}</h6>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    {quantities[item.id] ? (
                                        // Show decrement, count, and increment buttons
                                        <>
                                            <button 
                                                className="btn btn-danger mx-2 small-button"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                -
                                            </button>
                                            <span className="fw-bold">{quantities[item.id]}</span>
                                            <button 
                                                className="btn btn-success mx-2 small-button"
                                                onClick={() => handleAddItem(item.id)}
                                            >
                                                +
                                            </button>
                                        </>
                                    ) : (
                                        // Show "Add" button initially
                                        <button 
                                            type="button"
                                            className="add-button"
                                            onClick={() => handleAddItem(item.id)}
                                        >
                                            Add
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Daily Picks Section */}
                <div className="section-title d-flex justify-content-between align-items-center my-4">
                    <h3>Daily Picks</h3>
                    <a href="/daily-picks" className="text-decoration-none fw-bold">View All</a>
                </div>
                <div className="row g-4">
                    {[
                        { img: images.nandiniblue, price: 25 },
                        { img: images.nandiniorange, price: 29 },
                        { img: images.coriander, price: 12 },
                        { img: images.ginger, price: 55 },
                        { img: images.nandiniblue, price: 25 },
                        { img: images.nandiniorange, price: 29 },
                        { img: images.coriander, price: 12 },
                        { img: images.ginger, price: 55 }
                    ].map((item, index) => (
                        <div className="col-6 col-md-3 col-lg-1-5" key={index}>
                            <div className="card h-100">
                                <img src={item.img} className="card-img-top fit-image" alt="..." />
                                <div className="card-body text-center">
                                    <h6 className="fw-bold price-text">Rs. {item.price}</h6>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-items-center">
                                    <button className="btn btn-danger mx-2 small-button">-</button>
                                    <span className="fw-bold">1</span>
                                    <button className="btn btn-success mx-2 small-button">+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
}

export default Home;
