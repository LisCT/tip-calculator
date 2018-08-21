import React, {Fragment} from 'react';

import Header from '../components/Header';
import InsertBill from '../components/InsertBill';
import SelectTip from '../components/SelectTip';
import Result from '../components/Result';
import Waves from '../components/Waves';

class HomePage extends React.Component{

    state = {

        bill: 0,
        percent: 10,
        tip: 0,
        total: 0,
    }  

    handleBill = (item, value) => {

        this.setState( {[item]: value });

    }

    handlePercent = () =>{

        let tip = ((Number(this.state.bill) / 100) * Number(this.state.percent)).toFixed(2);
        
        this.setState({ tip });
        
    }

    handleTotal = () => {

        let total = (Number(this.state.tip) + (Number(this.state.bill) )).toFixed(2);

        this.setState({ total });
    
    }

    executeAsynchronously = (functions, timeout) => {

        for(var i = 0; i < functions.length; i++) {

          setTimeout(functions[i], timeout);

        }

    }

    handleChange = (item, value) => {

        this.executeAsynchronously( [this.handlePercent(), this.handleBill(item,value), this.handleTotal()], 10);
        
    }

    render(){
    
        return(

            <Fragment>
                <div id="wrapper-container">

                    <Header/>
                    <InsertBill 
                        handleChange = {this.handleChange}
                        bill = {this.state.bill}
                    />

                    <SelectTip
                        handleChange = {this.handleChange}
                        percent = {this.state.percent}
                    />
                    <Result
                        handleChange = {this.handleChange}
                        tip = {this.state.tip}
                        total = {this.state.total}
                    />

                    <div className="waves_wrapper">
                        <Waves/>
                    </div>
                    

                </div>

                
            </Fragment>
        )

    }

}

export default HomePage;
