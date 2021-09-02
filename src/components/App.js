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
	background-image: url(${image});
	background-size: 100vw 100vh;
	opacity: 1;
	background-repeat: no-repeat;
	margin: auto;
	/* @media screen and (min-width: 350px){
      width: 96%;
   }
   @media screen and (min-width:800px ){
      width: 90%;
   }
   @media screen and (min-width: 2560px){
      width: 85%;
   } */
`;
const StyledSection = styled.div`
	margin: 0 auto;
	flex:1;
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
						<Route path="/" exact component={HomeView}></Route>
						<Route
							path="/flightdetails/:id"
							render={() => (
								<DetailsView>
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
