import React , { Component } from 'react';
import {Container, Row, Col,Card,Badge,Button} from 'react-bootstrap';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import {connect} from 'react-redux';
import {addToCart, vegItems,nonVeg,noFilter} from '../redux/ActionCreators';
import {Link} from 'react-router-dom';


const mapStateToProps = (state)=>{
    return {
      items: state.dish.items
    }
  };

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        vegItems: ()=>{dispatch(vegItems())},
        nonVeg: ()=>{dispatch(nonVeg())},
        noFilter: () => {dispatch(noFilter())}
    }
};


class Home extends Component{
    

    handleClick = (id) => {

        this.props.addToCart(id);

        store.addNotification({
            title:'Item Added to cart!',
            message:'Success!',
            type:'success',
            container:'bottom-center',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        })

    };

    handleVeg = () => {
        this.props.vegItems();
    }

    handleNonVeg = () => {
        this.props.nonVeg();
    }

    handleNoFilter = () => {
        this.props.noFilter();
    }

    
    render(){
        
        console.log(this.props.items)
        
        const menu = this.props.items.map((dish) => {
            return(
                <Col md={4}>
                    <Card  key={dish.id}  className="mb-3 Menucard" >
                        <Card.Img variant="top " src={dish.image} alt="img" />
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Subtitle className="mb-3"><h5><Badge variant={dish.label === 'North-Indian'?'primary':'info'}>{dish.label}</Badge>{' '}
                            <Badge variant={dish.category === 'veg' ? 'success': 'danger'}>{dish.category}</Badge>{' '}
                            <Badge variant="secondary">{dish.origin}</Badge></h5></Card.Subtitle>
                            <Card.Text>
                                {dish.description}
                            
                            </Card.Text>
                            <Card.Text >INR {dish.price} for one </Card.Text>
                            
                            <Button variant="outline-warning" onClick={() => this.handleClick(dish.id)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </Col>
            )

        });

        return(
            <>

                
                <Container className="content">
                    <Row className="mb-2 sticky-top ">
                        <Col md={12} className="home-top pb-2">
                            <div className="text-center"><h5>Order your Favourites:</h5></div>
                            <div className="top"><Link to="/OrderCart"><Button variant="outline-success" >Go to Cart</Button></Link></div>
                        </Col>
                        
                        <Col md={12}>
                        
                            <span className="btn btn-secondary" onClick={this.handleNoFilter}>No filters</span>{'   '}
                            <span className="btn  btn-outline-success" onClick={this.handleVeg}>Veg</span>{' '}
                            <span className="btn btn-outline-danger" onClick={this.handleNonVeg}>Non-veg</span>
                        </Col>
                        
                        
                    </Row>
                    <Row className="justify-content-center">
                   
                        {menu}
                        
                    </Row>
                </Container>
            </>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Home);