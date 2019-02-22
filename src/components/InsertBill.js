import React from 'react';
import PropTypes from 'prop-types';

class InsertBill extends React.Component {

    static propTypes = {

        bill: PropTypes.number.isRequired,
        handleChange: PropTypes.func.isRequired

    }

    handleEvent = (evt) => {

        const { handleChange } = this.props;
        const value = Number(evt.target.value);
        const item = evt.target.name;

        handleChange(item, value);

    }

    render() {

        const { bill } = this.props;

        return (

            <div className="insert-bill">

                <h4>Insert Your Bill Total</h4>
                <input 
                    type="number"
                    name="bill"
                    placeholder={bill}
                    onChange={this.handleEvent}
                />

            </div>

        );

    }
    
}

export default InsertBill;
