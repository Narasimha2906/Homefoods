import React, { PureComponent } from 'react';
import ReactNotifications from 'react-notifications-component';
import NavigationBar from './NavigationBar';
import Joinus from '../Pages/Joinus';
import Home from '../Pages/Home';
import Contactus from '../Pages/Contactus';
import UserLogin from '../Pages/UserLogin';
import Footer from './Footer'
import About from '../Pages/About';
import UserSignUp from '../Pages/UserSignUp';
import OrderCart from '../Components/OrderCart';
import { Switch, Route, Redirect} from 'react-router-dom'




class MainComponent extends PureComponent {
   

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavigationBar />
                    <ReactNotifications />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={Home} />
                        <Route path="/OrderCart" component={OrderCart} />
                        <Route path="/About" component={About} />
                        <Route path="/Join" component={Joinus} />
                        <Route path="/Contact" component={Contactus} />
                        <Route path="/Login" component={UserLogin} />
                        <Route path="/SignUp" component={UserSignUp} />
                        <Redirect to="/Home" />
                    </Switch>
        
                </div>
                <Footer />
    
    
    
            </div>
            
        )
    }
}

export default MainComponent;