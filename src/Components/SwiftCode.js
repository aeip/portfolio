import React from 'react';
import Gist from "react-gist";
import LoginRegister from '../img/LoginRegister.png'

const SwiftCode = () => {
	return (
		<div id="swiftcode">
			<h2>Swift Code</h2>
            <div className="swift-code">
                <div className="swift-code-container">
                    <img height="350px" src={LoginRegister} alt='Login/Register' />
                    <Gist id="47b7416d0d2cb7cb37b549e45d04d09f" />
                </div>
            </div>
		</div>
	);
};

export default SwiftCode;
