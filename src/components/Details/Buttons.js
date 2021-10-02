import React from 'react';
import styled from 'styled-components';
import { MdList } from 'react-icons/md'
import Link from '../Link';

const ButtonsWrapper = styled.div`
	padding:1rem 0;
	display: flex;
	justify-content: space-between;
`;
export const StyledButton = styled.button`
	align-items: center;
	font-size: 16px;
	font-family:inherit;
	background-color: #ece7e7ab;
	border-radius: 8px;
	color: #000;
	border: none;
	width: 11rem;
	padding: 0.5rem 1rem;
	justify-content: center;
	display: flex;
	white-space: nowrap;
	svg{
    font-size: 1.5rem;
		margin-right: 2px;
		}
	@media screen and (max-width: 375px) {
		padding: 0.33rem 0.5rem;
	}
	&:hover{
      background-color: #ece7e7;
   }

`;

const Buttons = ({ children }) => {
	return (
		<ButtonsWrapper>
			{children}
			<Link to="/">
				<StyledButton aria-label={'Flight list'}>
					<MdList />
					Flight list
				</StyledButton>
			</Link>

		</ButtonsWrapper>
	)
}

export default Buttons
