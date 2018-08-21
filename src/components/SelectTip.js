import React from 'react';

class SelectTip extends React.Component {

    handleEvent = (evt) => {

        const value = Number(evt.target.value);
        const item = evt.target.name;

        this.props.handleChange(item, value);

    }

    render(){

        const percent = Number(this.props.percent);

        return(

            <div className="select_tip">

                <h4>Select Your Tip %</h4>

                <div className="select_tip--container">

                    <input 
                        type="radio" 
                        id="percent10" 
                        className="select_tip--percent active" 
                        name="percent" 
                        value="10" 
                        onChange={this.handleEvent} 
                        checked={percent === 10}
                    />
                    <label htmlFor="percent10">10%</label>

                    <input 
                        type="radio" 
                        id="percent12" 
                        className="select_tip--percent" 
                        name="percent" 
                        value="12" 
                        onChange={this.handleEvent} 
                        checked={percent === 12}
                    />
                    <label htmlFor="percent12">12%</label>

                    <input 
                        type="radio" 
                        id="percent15" 
                        className="select_tip--percent" 
                        name="percent" 
                        value="15" 
                        onChange={this.handleEvent}
                        checked={percent === 15}
                    />
                    <label htmlFor="percent15">15%</label>

                    <input 
                        type="radio" 
                        id="percent20" 
                        className="select_tip--percent" 
                        name="percent" 
                        value="20" 
                        onChange={this.handleEvent} 
                        checked={percent === 20}
                    />
                    <label htmlFor="percent20">20%</label>
                   
                </div>

            </div>

        )

    }
    
}

export default SelectTip