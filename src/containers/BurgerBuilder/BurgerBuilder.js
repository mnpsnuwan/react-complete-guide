import React, {Component} from "react";
import Auc from "../../hoc/Auc";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
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