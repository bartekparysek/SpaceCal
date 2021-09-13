import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import DetailsView from "./Details/DetailsView";
import GlobalStyle from "../globalStyles";
import HomeView from "./Home/HomeView";
import image from "../assets/49955609618_a2e5f29a91_3k.jpeg";

import Header from "./Header";
import Footer from '../components/Footer';
import GoogleAuth from './GoogleAuth';
import Buttons from "./Details/Buttons";
import CalendarButton from "./CalendarButton";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	min-width: 100vw;
	background-image: url(${image});
	background-size: 100vw 100vh;
	opacity: 1;
	background-repeat: no-repeat;
	margin: auto;

`;
const StyledSection = styled.div`
	@media screen and (min-width: 2560px){
      width: 90%;
   }
	  @media screen and (min-width: 350px){
      width: 96%;
   }
   @media screen and (min-width:800px ){
      width: 90%;
   }
	margin: 0 auto;
	flex:1;
	h2{
		color: #fff;
	}
`;

const App = () => {
	const [user, setUser] = useState({
		isSignedIn: false,
		email: null,
	});

	return (
		<Router>
			<GlobalStyle />
			<StyledApp>
				<StyledSection>
					<Header>
						<GoogleAuth user={user} setUser={setUser} />
					</Header>
					<Switch>
						<Route path="/" exact render={() => (
							<HomeView user={user} />
						)}></Route>
						<Route
							path="/flightdetails/:id"
							render={() => (
								<DetailsView user={user}>
									<Buttons>
										<CalendarButton user={user} />
									</Buttons>
								</DetailsView>
							)}
						></Route>
					</Switch>
				</StyledSection>
				<Footer />
			</StyledApp>
		</Router>
	);
};

export default App;
