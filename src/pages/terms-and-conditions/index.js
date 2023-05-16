import styled from 'styled-components'

export default function termsAndConditions() {
    return (
        <>
            <Container>
                <div className="header">
                    <div className="container">
                        <h1>Terms and Conditions</h1>
                        <p>DrugStoc Ehub Limited (“DrugStoc” or “we”) operates an eCommerce platform consisting of a website and mobile application, engaged in the wholesale and retail distribution of healthcare-related products (ethical and generic pharmaceutical products, vaccines, medical equipment, reagents and supplies, over the counter products and veterinary medicine. By using the Service, you become a “User” (“You” or “Customer” or “User”) and you agree to comply with and be bound by these Terms of Service (this “Agreement”).</p>
                        <p>These general terms and conditions shall apply to all procurements on the website and mobile application and shall govern your use of related services. By using our services, you accept these general terms and conditions in full. If you disagree with these general terms and conditions or any part of these general terms and conditions, you must not use our services.</p>
                        <p>If you use our service as a procurement partner, (Hospital, Pharmacy, Clinic, Licensed medical professional etc) in the course of a business or other organizational project, then by so doing you:</p>
                        <p>confirm that you have obtained the necessary authority to agree to these general terms and conditions; bind both yourself and the person, company or other legal entity that operates that business or organizational project, to these general terms and conditions; and agree that “you” in these general terms and conditions shall reference both the individual user and the relevant person, company or legal entity unless the context requires otherwise.</p>
                        <h6> Registration & Accounts </h6>
                        <p>You may establish an account with us after providing us with proof of license (Premise and Practicing license). You will also be required to submit a completed application and other personal details as required via our app, website or onsite. </p>
                        <h6>Product Availability</h6>
                        <p> Items in stock are available for immediate shipment. In the event of excess demand or short supply, we reserve the right to reserve inventory among our customers as it deems appropriate. We shall not be liable for failure to fulfil any order or to perform under any contract due to strike, fire, lock-outs, and other industrial disputes, breakdown of systems or network access, flood, explosions or unavoidable accidents, inability to obtain supplies, contingencies of manufacturing, or other causes beyond our control. We also reserve the right to discontinue and withdraw any product, product size, or packaging at any time from the app without further obligation on the part of DrugStoc</p>
                        <h6>Payment Terms </h6>
                        <p>Purchases made on the platform are subject to cash and credit terms which are subject to the company discretion and can be changed or altered without prior notice.</p>
                        <h6>Pricing</h6>
                        <p>Prices are subject to change without notice. Prices billed are the prices in effect at the time the order is shipped. Prices are subject to all taxes, excises, or other charges levied by any government (national, state or local). Any disputed prices must be identified to us in writing within two (2) business days from the invoice date.</p>
                        <h6>Damaged Products</h6>
                        <p>All shipments should be examined for damages immediately upon receipt. If you find broken or damaged Products, notify us in writing immediately. </p>
                        <h6> Liability</h6>
                        <ol type='a'>
                            <li> If the Products we deliver are not what you ordered or damaged or defective or the delivery is of an incorrect quantity, we shall have no liability to you unless you notify us in writing at our contact address of the problem immediately within 6 hours of the delivery of the Products in question. </li>
                            <li>  If you do not receive the Products ordered within the 5 days of the date on which you ordered them, save for clearly spelt out circumstance regarding the Products availability, we shall have no liability to you unless you notify us in writing at our contact address of the problem within 10 days of the date on which you ordered the Products. </li>
                            <li>  If you notify a problem to us under clause a or b above, our only obligations will be:
                                <ol type="i">
                                    <li> to make good any shortage or non-delivery; </li>
                                    <li> to replace or repair any Products that are damaged or defective; or </li>
                                    <li> to refund to you the amount paid by you for the Products in question in whatever way we choose. </li>
                                </ol>
                            </li>
                            <li> Save as precluded by law, we will not be liable to you for any indirect or consequential loss, damage or expenses (including loss of profits, business or goodwill) howsoever arising out of any problem you notify to us under this condition and we shall have no liability to pay any money to you by way of compensation other than to refund to you the amount paid by you for the Products under clause c(iii) above.
                                <p>We will not be liable under any contract, negligence, strict liability or other theory of liability for any special, indirect, incidental or consequential damages product consumption or costs of procurement of substitute Products or services in connection with the subject </p>
                                <p>matter of these terms and conditions or any products or the use, delivery or failure or delay of delivery thereof. We shall not be liable for any loss, claim, Manufacturer error, or damage resulting from products or the use, delivery, or failure of delivery thereof, and the buyer agrees to hold us harmless for any such loss, claim, or damage </p>
                            </li>
                            <li>
                                You must observe and comply with all applicable regulations and legislation, including obtaining all necessary customs, import (where applicable) or other permits to purchase Products from our site. The importation or exportation of certain Products to you may be prohibited by certain national laws. We make no representation and accept no liability in respect of the export or import of the Products you purchase.
                            </li>
                        </ol>
                        <h6>Notices </h6>
                        <p> Unless otherwise expressly stated in these terms and conditions, all notices from you to us must be in writing and sent to our office address or to <a
                  href="mailto:info@drugstoc.com"
                  aria-label="Navigate To Google maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@drugStoc.com
                </a> and all notices from us to you will be displayed on our website from time to time. </p>
                        <h6>Invalidity </h6>
                        <p>If any part of these terms and conditions is unenforceable, the enforceability of any other part of these conditions will not be affected. </p>
                        <h6>Privacy</h6>
                        <p> You acknowledge and agree to be bound by the terms of our privacy policy as contained on our website. </p>
                        <h6> Third party rights </h6>
                        <p> Except for our affiliates, directors, employees or representatives, a person who is not a party to this Agreement, has no right to enforce any term of this agreement. </p>
                        <h6> Governing Law </h6>
                        <p> The contract between us shall be governed and interpreted in accordance with the laws of the Federal Republic of Nigeria and the Nigerian Courts have jurisdiction to resolve any disputes between us. </p>
                        <h6>Entire Agreement </h6>
                        <p> These terms and conditions, together with our current website/ mobile application prices, delivery details, contact details and privacy policy, set out the whole of our agreement relating to the supply of the Products to you by us. Nothing said by the sales person on our behalf</p>
                        <p>should be understood as a variation of these terms and conditions or as an authorised representation about the nature or quality of any Products offered for sale by us. Save for fraud or fraudulent misrepresentation, we shall have no liability for any such representation being untrue or misleading.</p>
                    </div>
                </div>
            </Container>
        </>
    )
};

const Container = styled.div`
    margin: 150px 0;
    h4{
        margin: 30px 0;
    }
    h6{
        margin-top: 30px;
        font-size: 24px ;
        font-weight:bold;
    }
    li{
        margin-top: 10px;
        margin-left:40px ;
    }
`;