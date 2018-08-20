import React from 'react';

class SelectTip extends React.Component {

    render(){

        return(

            <div className="select_tip">

                <h4>Select Your Tip %</h4>

                <div className="select_tip--container">

                    <input type="radio" id="percent10" className="select_tip--percent active" name="percent" value="10" />
                    <label htmlFor="percent10">10%</label>

                    <input type="radio" id="percent12" className="select_tip--percent" name="percent" value="12" />
                    <label htmlFor="percent12">12%</label>

                    <input type="radio" id="percent15" className="select_tip--percent" name="percent" value="15" />
                    <label htmlFor="percent15">15%</label>

                    <input type="radio" id="percent20" className="select_tip--percent" name="percent" value="20" />
                    <label htmlFor="percent20">20%</label>
                   
                </div>

            </div>

        )

    }
    
}

export default SelectTip