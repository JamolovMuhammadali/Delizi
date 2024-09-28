import React, { useState } from 'react'
import '../companents/MenuItems.css'
import Spaghetti from '../assets/Spaghetti.png';
import Gnocchi from '../assets/Gnocchi.png';
import Rovioli from '../assets/Rovioli.png';
import PenneAllaVodak from '../assets/PenneAllaVodak.png';
import Risoto from '../assets/Risoto.png';
import SplitzaSignature from '../assets/SplitzaSignature.png';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function MenuItems({ itemsPerPage }) {

    // pagination

    const data = [
        { id: 1, name: 'Spaghetti', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Spaghetti },
        { id: 2, name: 'Gnocchi', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Gnocchi },
        { id: 3, name: 'Rovioli', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Rovioli },
        { id: 4, name: 'Penne Alla Vodak', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: PenneAllaVodak },
        { id: 5, name: 'Risoto', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Risoto },
        { id: 6, name: 'Splitza Signature', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: SplitzaSignature },
        { id: 7, name: 'Spaghetti', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Spaghetti },
        { id: 8, name: 'Gnocchi', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Gnocchi },
        { id: 9, name: 'Rovioli', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Rovioli },
        { id: 10, name: 'Penne Alla Vodak', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: PenneAllaVodak },
        { id: 11, name: 'Risoto', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Risoto },
        { id: 12, name: 'Splitza Signature', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: SplitzaSignature },
        { id: 13, name: 'Spaghetti', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Spaghetti },
        { id: 14, name: 'Gnocchi', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Gnocchi },
        { id: 15, name: 'Rovioli', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Rovioli },
        { id: 16, name: 'Penne Alla Vodak', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: PenneAllaVodak },
        { id: 17, name: 'Risoto', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: Risoto },
        { id: 18, name: 'Splitza Signature', price: '$12.05', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.', image: SplitzaSignature },
    ];


    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // pagination end


    return (
        <div className="hero-our">
            <div className="menu-list">
                {currentData.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className='menu-item-message'>{item.message}</p>
                        <div className="menu-item-price-btn">
                            <p>{item.price}</p>
                            <button>Order now</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    <FaAngleLeft />
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}

export default MenuItems