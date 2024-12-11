import ActionButton from "../../elements/action-button/ActionButton";
import Header from "../../elements/header/Header";


function Landing() {
    return (
        <>
            <Header>
                <li>
                    <ActionButton lable='Login' styled='secondary-button' />
                </li>
                <li>
                    <ActionButton lable='Register' styled='primary-button' />
                </li>
            </Header>
            
        </>
    );
}

export default Landing;