import styled from "styled-components";

const QRCode = () => {
    return (
        <QRSection>
            <div className="container containerWrapper">
                <div className="containerText">
                    <h2>DrugStoc is</h2>
                    <h1>NDPR AUDIT
                        COMPLIANT
                        2024</h1>
                </div>
                <div className="containerQRImage">
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
    h2 {
        font-weight: 400;
    }
  `;
