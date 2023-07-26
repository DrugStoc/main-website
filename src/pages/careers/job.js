import Executive from './executive';
import Procurement from './procurement';
import Sales from './sales';
import QA from './qa';
import styled from 'styled-components'

export default function job() {
	const h2Styles = {
		textAlign: 'center'
	}
	return (
		<>
			<Container>
				<h2 style={h2Styles}>Sales Associate across Nigeria</h2>
				<Sales />

				<h2 style={h2Styles}>Procurement Associate</h2>
				<Procurement />

				<h2 style={h2Styles}>Executive Assistant to the Executive Office</h2>
				<Executive />

				<h2 style={h2Styles}>Quality Assurance Associate</h2>
				<QA />
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