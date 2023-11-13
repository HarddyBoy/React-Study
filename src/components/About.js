import React, { useState } from 'react'

export default function About() {
   
    const[buttonText, setBtnTxt]= useState('Enable Dark Mode')
   const [StyleItem, setStyle] = useState({
        color : 'white',
        backgroundColor : "black",
        border : '1px solid white'
    })

    const toggleStyle = ()=> {
        if(StyleItem.color === 'white'){
            setStyle({
                color : 'black',
                backgroundColor :'white'
            })
            setBtnTxt('Enable Dark Mode');
        }else{
            setStyle({
                color : 'white',
                backgroundColor : "black",
                border : '1px solid white'
            }) 
            setBtnTxt('Enable Light Mode');
        }
    }
    return (
    <>
        <div className='container' style={StyleItem}>
            <h1 className='my-4'>About Us</h1>
            <div className="container">
    <div id="accordion" className="accordion" >
        <div className="card mb-0">
            <div className="card-header collapsed" data-toggle="collapse" href="#collapseOne" style={StyleItem}>
                <a className="card-title" href='/'>
                    Item 1
                </a>
            </div>
            <div id="collapseOne" className="card-body collapse" data-parent="#accordion" style={StyleItem}>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </p>
            </div>
            <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" style={StyleItem} href="#collapseTwo">
                <a className="card-title" href='/'>
                  Item 2
                </a>
            </div>
            <div id="collapseTwo" className="card-body collapse" data-parent="#accordion" style={StyleItem}>
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </p>
            </div>
            <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" style={StyleItem} href="#collapseThree">
                <a className="card-title" href='/'>
                  Item 3
                </a>
            </div>
            <div id="collapseThree" className="collapse" data-parent="#accordion" style={StyleItem}>
                <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{buttonText}</button>
</div>
        </div>
    </>
  )
}
