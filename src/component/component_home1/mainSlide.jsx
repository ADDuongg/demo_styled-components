import React from 'react';
import frame1 from '../../images/fram1.png'
import {DivMainSlide, TextTitle, Button} from '../../styled_components/mainSlideStyled/mainSlide';
const MainSlide = () => {
    const buttons = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={index % 2 !== 0 ? "active-button mx-2" : "btn-slide"}></div>
    ));
    return (
        <div>
            <DivMainSlide>
                <div id="content">
                    <TextTitle >Clinic & beauty consultant</TextTitle>
                    <div className="established">it is a long established fact that a reader will be by the readable content of a
                        page</div>
                    <Button height="58px" width="200px" >More Details</Button>
                </div>
                <div >
                    <img className="image-slider" src={frame1} alt="" />
                </div>
            </DivMainSlide>
                
            
            {/* btn slide */}
            <div className="divBtnSlide">
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>
                        {button}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default MainSlide;
