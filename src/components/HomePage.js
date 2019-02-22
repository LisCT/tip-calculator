import React, { Fragment } from 'react';

import Header from './Header';
import InsertBill from './InsertBill';
import SelectTip from './SelectTip';
import Result from './Result';
import Waves from './Waves';

class HomePage extends React.Component {

    state = {

        bill: 0,
        percent: 10,
        tip: 0,
        total: 0
    }  

    // update the bill or the percent
    handleBill = (item, value) => {

        // in a call back because the update of a state in react is not inmediatly.
        this.setState({ [item]: value }, () => {

            this.handleTip();

        });
        
    }

    handleTip = () => {

        const { bill, percent } = this.state;

        const tip = ((Number(bill) / 100) * Number(percent)).toFixed(2);
        
        this.setState({ tip }, () => {

            this.handleTotal();

        });
        
    }

    handleTotal = () => {

        const { bill, tip } = this.state;

        const total = (Number(tip) + (Number(bill))).toFixed(2);

        this.setState({ total });
    
    }

    render() {
        
        const {
            bill, percent, tip, total 
        } = this.state;

        return (

            <Fragment>
                <div id="wrapper-container">

                    <Header />
                    <InsertBill 
                        handleChange={this.handleBill}
                        bill={bill}
                    />

                    <SelectTip
                        handleChange={this.handleBill}
                        percent={percent}
                    />
                    <Result
                        handleChange={this.handleBill}
                        tip={tip}
                        total={total}
                    />

                    <div className="waves_wrapper">
                        <Waves />
                    </div>
                    

                </div>

                
            </Fragment>
        );

    }

}

export default HomePage;
