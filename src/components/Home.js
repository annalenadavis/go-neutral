import React from 'react';

class Home extends React.Component {
  state = {
    userInput: {
    }
  }

  handleZipChange = event => {
    let zip = event.target.value;
    if (zip.length === 5 || zip === "US") {
        const updatedUserInput = { 
            ...this.state.userInput,
            zip: zip,
        }
        const userInput = updatedUserInput;
        this.setState({ userInput });
      }
  }

  handleSelectChange = event => {
      const household = event.target.value;
      const updatedUserInput = { 
          ...this.state.userInput,
          household: household,
      }
      const userInput = updatedUserInput;
      this.setState({ userInput });
  }

  goToSite = e => {
    e.preventDefault();
    const zip = this.state.userInput.zip || "US";
    const household = this.state.userInput.household || "single";
    alert("Thanks for checking out the site! It's not finished yet, emissions on the next page are based on US average not zip code...yet!")
    this.props.history.push(`/app/${household}/${zip}`)
  }

//TODO: Add share button  
//TODO: Add labels for inputs

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
              <label for="zip" class="visually-hidden">Zip Code</label>
              <input 
                  type="text" 
                  name="zip" 
                  placeholder="My Zip Code"
                  onChange={this.handleZipChange}
                  />
              <label for="household" class="visually-hidden">Household Size</label>
              <select 
                  type="text" 
                  name="household" 
                  onChange={this.handleSelectChange}
                  >
                  <option value="single">Just me</option>
                  <option value="house">Household</option>
              </select>
              <button type="submit" className="go">Go</button>
              <a className="photo-credit" href="https://unsplash.com/@johnwestrock">Photo credit: John Westrock</a>
            </form>
          </main>
        </div>
      );
    }
  }
  
  
  export default Home;