import React from 'react';

class SelectTip extends React.Component {

    render(){

        return(

            <div className="select_tip">

                <h4>Select Your Tip %</h4>

                <div className="select_tip--container">
                    <a href="#" className="select_tip--percent active">10%</a>
                    <a href="#" className="select_tip--percent">12%</a>
                    <a href="#" className="select_tip--percent">15%</a>
                    <a href="#" className="select_tip--percent">20%</a>
                </div>

            </div>

        )

    }
    
}

export default SelectTip