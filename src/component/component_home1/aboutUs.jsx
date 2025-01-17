import React from 'react';
import picAbout from '../../images/pic-about.png'
import { BackGroundAbout, DivContentAbout, SectionAboutUs } from '../../styled_components/aboutUs/aboutUs';
const AboutUs = () => {
    const apiAboutUs = {
        subTitle: "We are the best beauty clinic",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.Varius tellus in suspendisse placerat.",
        subContent: "Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.",
    }
    return (
        <SectionAboutUs >
            <BackGroundAbout ></BackGroundAbout>
            <DivContentAbout >
                <div className="contentAboutUs">
                    <div className="title">About us</div>
                    <div className="sub-title">{apiAboutUs.subTitle}</div>
                    <div className="content">{apiAboutUs.content}
                    </div>
                    <div className="content">
                        {apiAboutUs.subContent}
                    </div>
                    <div className="divButton">
                        <button className="btn btn-learnMore">
                            Learn More
                        </button>
                        <div className="divWatch">
                            <i className="fa-solid fa-circle-play"></i>
                            <p>Watch Video</p>
                        </div>
                    </div>
                </div>

                <img src={picAbout} alt="" className="picture-aboutus" />
            </DivContentAbout>
        </SectionAboutUs>
    );
};

export default AboutUs;
