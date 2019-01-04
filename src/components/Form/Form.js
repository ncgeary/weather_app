import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
  render(){
    return (
      <div>

        <form className="form-group"
          onSubmit={this.props.getWeather}
          data-toggle="collapse"
          data-target="#weathertrig"
          aria-expanded="false"
          aria-controls="weathertrig">


            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>

          <div>
            <button className="btn btn-primary">Get Weather</button>
          </div>

        </form>

      </div>
    );
  }
}

export default Form;
