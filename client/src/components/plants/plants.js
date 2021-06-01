import React, {Component} from 'react';
import './plants.css';

class Plants extends Component {
    constructor() {
        super();
        this.state = {
            plants:[]
        }
    }

    componentDidMount() { // runs automatically when component is mounted
        fetch('/api/plants') // fetches plants from express server and sets `state`-value to plants that were fetched
            .then(res => res.json())
            .then(plants => this.setState({plants}, () => console.log("plants fetched...", plants)))
    }


    render() {
        return (
            <div>
                <h2>plants</h2>
                <ul>{ this.state.plants.map(plant =>
                    <li key={plant.id}>
                        {plant.name} { plant.water } {plant.sunlight}
                    </li>
                )}</ul>
            </div>
        );
    }
}

export default Plants;