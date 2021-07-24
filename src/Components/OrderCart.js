import React, {Component}from 'react';
import {Col, Card, Container,Row,Badge,Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {FaMinus,FaPlus} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import {removeItem,addQuantity,subtractQuantity,clearCart} from '../redux/ActionCreators'


class OrderCart extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    handleclearCart = () => {
        this.props.clearCart();
    }
    

    

    render(){

        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <Col md={4}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={item.image}/>
                                <Card.Body>
                                    <Card.Title>{item.name} </Card.Title>
                                    <Card.Subtitle><Badge variant={item.category === 'veg' ? 'success': 'danger'}>{item.category}</Badge></Card.Subtitle>	
                                    <Card.Text>
                                        Price: {item.price} INR                                     	
                                    </Card.Text>
                                    <Card.Text>
                                        Quantity: {item.quantity} 
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="btn btn-sm btn-dark" onClick={() => this.handleAddQuantity(item.id)}><FaPlus /></span>{'  '}
                                        <span className="btn btn-sm btn-dark" onClick={() => this.handleSubtractQuantity(item.id)}><FaMinus /></span>{'  '}
                                        <span className="btn btn-sm btn-dark" onClick={() =>this.handleRemove(item.id)}><MdDelete /></span> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                         
                    )
                })
            ):

             (
                <div><Image src="assets/images/empty-cart.png" fluid></Image></div>
             ) 
        return (
            <>  
                <div className="content">
                    <Container>
                        <Row >
                            <Col md={9}>
                                <Row>
                                    {addedItems}
                                </Row>
                                
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Order Summary:</Card.Title>
                                        <Card.Text>SubTotal: <span className="ml-5">{this.props.total}</span> INR</Card.Text>
                                        <Card.Text>Delivery Fee: <span className="ml-5">60 INR</span></Card.Text>
                                        <Card.Text>Cart Total: <span className="ml-5">{this.props.total > 0 ? this.props.total+60 : this.props.total }</span> INR</Card.Text>
                                        <hr></hr>
                                        <span className="btn btn-dark">Place Order</span>
                                        <span className="btn btn-danger ml-2" onClick={this.handleclearCart}>clear Cart</span>
                                    </Card.Body>
                                    
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </div>
                
                
                
            </>
        )
    }

    
}

const mapStateToProps = (state)=>{
    return{
        items: state.dish.addedItems,
        total: state.dish.total,

    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        clearCart: () => {dispatch(clearCart())}
        
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(OrderCart);
