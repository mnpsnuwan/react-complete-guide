import React, {Component} from "react";
import Auc from "../../hoc/Auc";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    render() {
        return (
            <Auc>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auc>
        )
    }
}

export default BurgerBuilder;