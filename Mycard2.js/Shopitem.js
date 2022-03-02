import React, { useState } from 'react'
import ListProduct from './ListProduct';
import Products from './Products'
import{Link} from 'react-router-dom';

function Shopitem() {
    const productdetails = [
        {
            id: 1,
            productname: "LED TV",
            img: 'https://static.digit.in/default/f6a163b750bc51e05f442a87b20bb1620aabf5a6.jpeg?tr=w-1200',
            price: 18000,
            Count: 0,
            isStock: true
        },
        {
            id: 2,
            productname: "Watch",
            img: 'https://m.media-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg',
            price: 23000,
            Count: 0,
            isStock: false
        },
        {
            id: 3,
            productname: "Laptop",
            img: 'https://m.media-amazon.com/images/I/71bJqS8ZLTL._SL1500_.jpg',
            price: 48000,
            Count: 0,
            isStock: true
        },
        {
            id: 4,
            productname: "Iphone",
            img: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg',
            price: 98000,
            Count: 0,
            isStock: true
        },
        {
            id: 5,
            productname: "Washing Machine",
            img: 'https://m.media-amazon.com/images/I/71jowdXOarL._SL1500_.jpg',
            price: 53000,
            Count: 0,
            isStock: false
        },
        {
            id: 6,
            productname: "Soundbar",
            img: 'https://m.media-amazon.com/images/I/61ZFLzJuaCL._SL1500_.jpg',
            price: 12000,
            Count: 0,
            isStock: true
        },
        {
            id: 7,
            productname: "Helmet",
            img: 'https://m.media-amazon.com/images/I/61+ZHaT0k3S._SL1500_.jpg',
            price: 7000,
            Count: 0,
            isStock: false
        },
        {
            id: 8,
            productname: "PenDrives",
            img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/f1f70c44-a0d8-4342-8158-eb1d547b1de3.__CR0,99,1275,789_PT0_SX970_V1___.jpg',
            price: 600,
            Count: 0,
            isStock: true
        }
    ]
    const [selectedproduct, setSelectedProduct] = useState([])
    const [total, setTotal] = useState(0);
    const [item,setitem]=useState(0);

    function onClickproduct(products) {
        products.Count++;
        setSelectedProduct((prevproduct) => {
            return [...prevproduct, products]
        });
        setTotal(total + products.price) 
        setitem(selectedproduct.length + 1); 
        
    }
    function onDeleteproduct(products) {
        const listitems = selectedproduct.filter((value) => {
            return value.id !== products.id
        })

        let actualAmount = products.price * products.Count;
        setTotal(total - actualAmount)
        setitem(item - products.Count)
        setSelectedProduct(listitems)
    }
    function onIncrement(items) {
        const productlist = [...selectedproduct]
        productlist.forEach((value) => {
            if (value.id == items.id) {
                value.Count++;
                setTotal(total + items.price)
                setitem(item + 1);
            }
        })
        
        setSelectedProduct(productlist)
    }
    function onDecrement(items) {
        const productlist = [...selectedproduct]
        productlist.forEach((value) => {
            if (value.id == items.id) {
                value.Count--;
                setTotal(total - items.price)
                setitem(item -1);
                setSelectedProduct(productlist)
                 
            }
            if(items.Count == 0){
                 let myFilter = selectedproduct.filter((xy) => {
                      return xy.id != items.id;
                })
                setSelectedProduct(myFilter);
            }   

        })
        
    }
    function availableProduct(products){
        let myproduct = selectedproduct.find((val)=>{
           return val.id == products.id
        }) 
        if(myproduct){
            return true;
        }
        else{
            return false;
        }
    }
    return (

        <div className='container '>
            <div className='row'>
                {
                    productdetails.map((myproduct) => {
                        return <Products details={myproduct} availablehandler={availableProduct} addhandeler={onClickproduct} id={myproduct.id} />
                    })
                }

            </div>
            <h3 className='text-center mt-3 text-bolder'>Total Amount: {total}</h3>
            <h3 className='text-center mt-3 text-bolder'>Total items: {item}</h3>
            <ul className='list-group w-75 py-4 mx-auto d-block'>
                {
                    selectedproduct.map((productlist) => {
                        return <ListProduct listdetails={productlist} incrementhandler={onIncrement} decrementhandler={onDecrement} DeleteFunc={onDeleteproduct} />
                    })
                } 
           
                <button style={{"position":"relative","left":'330px'}} className='btn btn-primary text-center mt-3 ms-5' type='button'>
                    <Link to='/LoginFrom' className='text-light text-decoration-none '>Submit</Link>
                    </button>
            </ul>
            

        </div>



    )
}

export default Shopitem