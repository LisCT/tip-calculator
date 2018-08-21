import React from 'react';

class InsertBill extends React.Component {

    handleEvent = (evt) => {

        const value = Number(evt.target.value);
        const item =  evt.target.name;

        this.props.handleChange(item, value);

    }

    render(){

        return(

            <div className="insert-bill">

                <h4>Insert Your Bill Total</h4>
                <input type="number" name="bill" placeholder={this.props.bill} onChange={this.handleEvent}/>

            </div>

        )

    }
    
}

export default InsertBill