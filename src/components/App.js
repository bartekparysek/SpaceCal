import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import DetailsView from "./Details/DetailsView";
import GlobalStyle from "../globalStyles";
import HomeView from "./Home/HomeView";

import Spinner from './Spinner';
import Header from "./Header";
import Footer from '../components/Footer';
import Buttons from "./Details/Buttons";
import CalendarButton from "./CalendarButton";

const GoogleAuth = lazy(() => import('./GoogleAuth'));
const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	min-width: 100vw;
	opacity: 1;
	background-repeat: no-repeat;
	margin: auto;
`;
const StyledSection = styled.div`
	@media screen and (min-width: 2560px){
      width: 90%;
   }
	  @media screen and (min-width: 250px){
      width: 99%;
   }
   @media screen and (min-width:800px ){
      width: 90%;
   }
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
						<Suspense fallback={<Spinner />}>
							<GoogleAuth user={user} setUser={setUser} />
						</Suspense>

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
