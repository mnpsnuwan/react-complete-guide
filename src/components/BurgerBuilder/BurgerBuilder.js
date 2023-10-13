import React, {Component} from "react";
import Auc from "../../hoc/Auc";

class BurgerBuilder extends Component{
    render() {
        return (
            <Auc>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auc>
        )
    }
}

export default BurgerBuilder;