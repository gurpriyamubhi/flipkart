import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap';
import '../App.css';
import { useContext } from "react";
import CartContext from "../CartContext";


export const Productss = [
    {
        id:1,
        image:"https://rukminim1.flixcart.com/image/400/400/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
        title:"Monitor",
        price:10900,
        rating:4
    },
    {
        id:2,
        image:"https://rukminim1.flixcart.com/image/400/400/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70",
        title:"Remote Control Card",
        price:999,
        rating:5
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/61pQniOIAtL._SL1500_.jpg",
        title:"Milton Water Bottle",
        price:799,
        rating:4
    },
    {
        id:4,
        image:"https://rukminim1.flixcart.com/image/612/612/kt64fbk0/printer/b/8/n/smart-tank-500-hp-original-imag6kg6j64efmzf.jpeg?q=70",
        title:"hp Printer",
        price:3999,
        rating:4

    },
    {
        id:5,
        image:"https://rukminim1.flixcart.com/image/312/312/xif0q/television/z/3/g/kd-55x80k-sony-original-imagg7nja9dynftq.jpeg?q=70",
        title:"Sony LED",
        price:75999,
        rating:4

    },
    {
        id:6,
        image:"https://hnsfpau.imgix.net/5/images/detailed/125/B07PJV9DHV_001.jpg?fit=fill&bg=0FFF&w=1500&h=844&auto=format,compress",
        title:"Echo Dot (3rd Gen)",
        price:2499,
        rating:3

    },
    {
        id:7,
        image:"https://rukminim1.flixcart.com/image/612/612/kgtqhe80-0/sunglass/3/d/t/p430gr3-one-size-fits-all-fastrack-original-imafwyqy9gybnrgg.jpeg?q=70",
        title:"Fastrack Sunglasses",
        price:699,
        rating:3

    },
    {
        id:8,
        image:"https://rukminim1.flixcart.com/image/312/312/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70",
        title:"ASUS ROG 5s",
        price:39999,
        rating:5

    },
    
]

function Products() {

    const {addToCart} = useContext(CartContext);
    const { items } = useContext(CartContext);

    return (
        <div className='product'>
            <Row xs={2} sm={2} md={4} className="g-4">
                {Productss.map((product) => (
                    <Col style={{display:"flex",justifyContent:"center"}}>
                        <Card style={{zIndex:"10",outline:"none",height:"20rem",width:"18rem",border:"5px solid black",padding:"1rem"}}>
                            <Card.Img variant="top" src={product.image} style={{maxHeight:"100px",width:"100%",objectFit:"contain"}}/>
                            <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <div className='Stars'>
                                {Array(product.rating).fill().map((_)=>{
                                    return (<p>⭐️</p>)
                                })}
                                </div>
                                <h5>Price: ₹{product.price}</h5>
                            </Card.Text>

                            <Button onClick={()=> addToCart(product.id,product.title,product.price,product.image)} variant="outline-dark">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        
    )
    
}

export default Products;