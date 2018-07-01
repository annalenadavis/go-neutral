import React from 'react';
import Calculate from './Calculate.js';

class Home extends React.Component {
//TODO: add error if no zip entered? Or just give avg for US?
goToSite = e => {
  e.preventDefault();
  this.props.history.push(`/app`)
}
  
    render() {
      return (
        <div>
          <main>
            <div className="home-wrapper">
                <h1>Go Neutral</h1>
                <h2>Get personalized steps to slow climate change</h2> 
                <h3> in just 10 minutes</h3>
            </div>
            <form className="home-calculate" onSubmit={this.goToSite}>
              <Calculate updateFootprint={this.updateFootprint}/>
              <button type="submit" className="go">Go</button>
            </form>
          </main>
        </div>
      );
    }
  }
  
  
  export default Home;