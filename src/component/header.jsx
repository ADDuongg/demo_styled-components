import React, { useState } from 'react';
import MainLogo from '../images/MainLogo.png';
import ModalHeader from '../modal/modalHeader';
 
const Header = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const menuItem = ['Home', 'About', 'Service', 'Gallery', 'Blog'];

    return (
        <div className=''>
            <header id='header' className='w-5/6 absolute flex h-16 justify-between mt-16 mx-auto top-0 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <img id="logo" src={MainLogo} alt="" />
                <div id="main-menu" className='h-6 w-110 flex justify-between'>
                    {menuItem?.map((item, index) => (
                        <div
                            key={index}
                            
                            className={`h-6 w-auto text-xl cursor-pointer ${index === 0  ? 'home' : ''} ${ index === 0 ? 'text-white' : 'text-gray-400'}`}>
                            {item}
                            {index === 0 && <i className="fa-solid fa-plus" style={{ fontSize: '50%' }}></i>}
                        </div>

                    ))}

                </div>
                <button className="btnContact btn">
                    Contact
                </button>
                {!modalVisible && <button className="btnbar" onClick={toggleModal}>
                    <i className="fa-solid fa-bars"></i>
                </button>}
            </header>
            {modalVisible && <ModalHeader data={{ toggleModal, menuItem }} />}
        </div>
    );
};



export default Header;
