import React from 'react';
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
import { CardBody, CardService, CardTitle, Content, DivCardService, DivTitle, ImgService, SectionService, SubTitle, Title } from '../../styled_components/mainService/mainService';

const MainServices = () => {
    const titleService =
        { title: "Main Services", learnService: "Learn services to focus on your beauty", dumpText: "Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiattellus sagittis, scelerisque eget nulla turpis" }
    const fakeAPI = [
        {
            img: pic1,
            title: "Beauty consultant",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        },
        {
            img: pic2,
            title: "Skin treatments",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        },
        {
            img: pic3,
            title: "Beauty product",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        }
    ]
    return (
        <SectionService>
            <DivTitle >
                <Title >
                    {titleService.title}
                </Title>

                <SubTitle >
                    {titleService.learnService}
                </SubTitle>
                <Content >
                    {titleService.dumpText}
                </Content>
            </DivTitle>

            <DivCardService >
                {fakeAPI?.map((item, index) => (
                    <CardService key={index}>
                        <ImgService src={item.img} alt="" />
                        <div>
                            <CardTitle >
                                {item.title}
                            </CardTitle>
                            <CardBody >
                                {item.body}
                            </CardBody>
                        </div>
                    </CardService>
                ))}

            </DivCardService>
        </SectionService>
    );
}

export default MainServices;
