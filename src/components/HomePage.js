import React from 'react';

import Header from '../components/Header';
import InsertBill from '../components/InsertBill';
import SelectTip from '../components/SelectTip';
import Result from '../components/Result';

class HomePage extends React.Component{

    render(){
    
        return(

            <div>

                <Header/>
                <InsertBill/>
                <SelectTip/>
                <Result/>

            </div>
        )

    }

}

export default HomePage;
