import React from 'react';

class Result extends React.Component{

    render(){

        return(

            <div className="result_content">
                <div className="result_content--block result_tip">
                    <h1>Tip</h1>
                    <p className="result_content--value">${this.props.tip}</p>
                </div>
                <div className="result_content--block result_total">
                    <h1>Total</h1>
                    <p className="result_content--value">${this.props.total}</p>
                </div>
            </div>
        )

    }

}

export default Result