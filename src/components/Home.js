import React from 'react';

class Home extends React.Component {
zipRef = React.createRef();
householdRef = React.createRef();

goToSite = e => {
  e.preventDefault();
  const zip = this.zipRef.value.value || "US";
  const household = this.householdRef.value.value;
  alert("Thanks for checking out my site! It's not finished yet, emissions on the next page are based on US average not zip code...yet!")
  this.props.history.push(`/app/${household}/${zip}`)
}

//TODO: Add share button  

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
              <a className="photo-credit" target="_blank" href="https://unsplash.com/@johnwestrock">Photo credit: John Westrock</a>
            </form>
          </main>
        </div>
      );
    }
  }
  
  
  export default Home;