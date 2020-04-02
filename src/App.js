import React, {Component} from "react"
import './App.css'
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:'',
            lastName:'',
            age: '',
            gender: '',
            location: '',
            dietery: {
                vegan: false,
                vegeterian: false,
                lactoseFree: false            
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {type, name, checked, value} = event.target
        type === "checkbox" ? this.setState({ [name.value]: checked }) : this.setState({ [name]: value })
        
    }
    render() {
        return (
            <main >
                <form>
                    <label>
                        <input placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input placeholder="Age" value={this.state.age} name="age" onChange={this.handleChange} /><br />
                    </label>
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    <label>
                        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> Male
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} /> Female
                    </label>
                     {/* Create select box for location here */}
                    <br />
                    <select 
                        value={this.state.location} 
                        name="location" 
                        onChange={this.handleChange}
                    >
                        <option value="england">England</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                    </select>
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <label>
                        <input type="checkbox" name="dietery" value="vegan" checked={this.state.dietery.vegan} onChange={this.handleChange} />Vegan 
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="dietery" value="vegeterian" checked={this.state.dietery.vegeterian} onChange={this.handleChange} />Vegeterian 
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="dietery" value="lactoseFree" checked={this.state.dietery.lactoseFree} onChange={this.handleChange} />Lactose free
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {}
                </p>
            </main>
        )
    }
}

export default App
