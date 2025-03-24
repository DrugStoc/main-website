import styled from "styled-components";

const QRCode = () => {
    return (
        <QRSection>
            <div className="container" style={{ backgroundImage: 'url(https://res.cloudinary.com/bizstak/image/upload/v1742777558/Drugstoc/object_sef9d8.png), linear-gradient(180deg, #1B6942 0%, #4B9772 100%)', width: '100%', height: 251.5, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                <div className="containerText" style={{ width: '30%' }}>
                    <h2>DrugStoc is</h2>
                    <h1>NDPR AUDIT
                        COMPLIANT
                        2024</h1>
                </div>
                <div>
                    <img src='https://res.cloudinary.com/bizstak/image/upload/v1742522004/Drugstoc/yhceuauxb0elrppmwshc.png' style={{ height: 192 }} />
                    <img src='https://res.cloudinary.com/bizstak/image/upload/v1742522003/Drugstoc/kqfvg3bpuliqfipjbfop.png' />
                </div>
            </div>
        </QRSection>
    )
}

export default QRCode;

const QRSection = styled.section`
    margin-top: 7rem;
    margin-bottom: 6rem;
    @media (max-width: 992px) {
        .containerText {
        display: none;
        }
    }
        @media (max-width: 483px) {
        img:first-child(1) {
        height: 60px;
        width: 60px
        }
    }
  `;