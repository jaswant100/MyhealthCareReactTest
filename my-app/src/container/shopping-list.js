import React, { PureComponent } from 'react';
class Shoppinglist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
            <div className="card" style={{width: 250+'px'}}>
                <div className="card-divider">
                    This is a header
                </div>
                <img src="assets/img/generic/rectangle-1.jpg"/>
                    <div className="card-section">
                        <h4>This is a card.</h4>
                        <p>It has an easy to override visual style, and is appropriately subdued.</p>
                    </div>
            </div>
        </React.Fragment>

          );
    }
}
 
export default Shoppinglist;