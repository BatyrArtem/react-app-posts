import React, {useState} from "react";
// это классовый компенент тут все чуть иначе чем просто в компоненте. Классовый компонент это устаревший подход, но есть в старых проектах
class ClassCounter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({count: this.state.count += 1})
    }
    decrement() {
        this.setState({count: this.state.count -+ 1})
    }

    render() {
        return (        // указываем круглые скобки потому что возвращеем не обьект
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default ClassCounter;