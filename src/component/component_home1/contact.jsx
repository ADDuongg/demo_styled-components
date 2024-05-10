import React from 'react';
import useForm from '../../hook/useForm';
import imgContact from '../../images/img-contact.png'
import { BackgroundContact, DivContentAbout, FormContact, InputContact, SectionContact } from '../../styled_components/contact/contactStyled';
import { Button } from '../../styled_components/all/customButton';

const Contact = (props) => {
    const {mt} = props.css
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        inquiry: ''
    };
    const submitForm = (data) => {
        console.log('Form data:', data);
    };

    const { formData, handleChange, handleSubmit, errors } = useForm(initialValues, submitForm);

    return (
        <SectionContact  >
            <BackgroundContact></BackgroundContact>
            <div className="divContentContact">
                <img src={imgContact} alt="" className="picture-contact" />
                <DivContentAbout >
                    <div className="divTitleContact">
                        <div className="title">
                            Contact Us
                        </div>
                        <div className="sub-title">
                            Send your inquiry to
                            our expert team
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet nulla turapis tellus.
                        </div>
                    </div>

                    <FormContact  onSubmit={handleSubmit}>
                        <div className="nameInput">
                            <InputContact height={'61.58px'} width={'50%'} type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="fname " placeholder="First Name" required />
                            {/* {errors.firstName && <div className="error">{errors.firstName}</div>} */}
                            <InputContact height={'61.58px'} width={'50%'} type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="lname " placeholder="Last Name" required />
                            {/* {errors.lastName && <div className="error">{errors.lastName}</div>} */}
                        </div>
                        <InputContact height={'61.58px'} width={'100%'} type="email" name="email" value={formData.email} onChange={handleChange} className="emailInput " placeholder="Email address" required />
                        {/* {errors.email && <div className="error">{errors.email}</div>} */}
                        <InputContact height={'61.58px'} width={'100%'} type="text" name="subject" value={formData.subject} onChange={handleChange} className="subjectInput " placeholder="Subject message" required />
                        {/* {errors.subject && <div className="error">{errors.subject}</div>} */}
                        <InputContact height={'230px'} width={'100%'} type="text" name="inquiry" value={formData.inquiry} onChange={handleChange} className="inquiryInput " placeholder="Inquiry" required />
                        {/* {errors.inquiry && <div className="error">{errors.inquiry}</div>} */}
                        <Button height={'58px'} width={'248px'} type="submit">Send Message</Button>
                    </FormContact>
                </DivContentAbout>
            </div>
        </SectionContact>
    );
};

export default Contact;
