import React from 'react';

class Home extends React.Component {
zipRef = React.createRef();
householdRef = React.createRef();

goToSite = e => {
  e.preventDefault();
  const zip = this.zipRef.value.value || "US";
  const household = this.householdRef.value.value;
  this.props.history.push(`/app/${household}/${zip}`)
}
  
    render() {
      return (
        <div className="home-content">
          <main>
            <div className="home-wrapper">
                <h1>Go Neutral</h1>
                <h2>Get personalized steps to slow climate change</h2> 
                <h3> in just 10 minutes</h3>
            </div>
            <form className="home-calculate" onSubmit={this.goToSite}>
                    <input 
                        type="text" 
                        name="zip" 
                        ref={this.zipRef} 
                        placeholder="My Zip Code"
                        />
                    <select 
                        type="text" 
                        name="household" 
                        ref={this.householdRef}
                        >
                        <option value="single">Just me</option>
                        <option value="household">Household</option>
                    </select>
              <button type="submit" className="go">Go</button>
            </form>
          </main>
        </div>
      );
    }
  }
  
  
  export default Home;