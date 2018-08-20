import React, {Fragment} from 'react';

import Header from '../components/Header';
import InsertBill from '../components/InsertBill';
import SelectTip from '../components/SelectTip';
import Result from '../components/Result';
import Waves from '../components/Waves';

class HomePage extends React.Component{

    render(){
    
        return(

            <Fragment>
                <div id="wrapper-container">

                    <Header/>
                    <InsertBill/>
                    <SelectTip/>
                    <Result/>

                    <div className="waves_wrapper">
                    <Waves/>
                </div>
                    

                </div>

                
            </Fragment>
        )

    }

}

export default HomePage;
