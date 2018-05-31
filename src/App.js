import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/job_bank' component={JobBank}/>
      <Route exact path='/find_job' component={FindJob}/>
      <Route exact path='/training' component={Training}/>
      <Route exact path='/my_application' component={MyApplication}/>
      <Route exact path='/immigrate' component={Immigrate}/>
      <Route exact path='/visit' component={Visit}/>
      <Route exact path='/work' component={Work}/>
      <Route exact path='/study' component={Study}/>
      <Route exact path='/travel_advice_advisories' component={TravelAdviceAdvisories}/>
      <Route exact path='/canadian_attractions_events_experiences' component={CanadianAttractionsEventsExperiences}/>
      <Route exact path='/canadian_passports' component={CanadianPassports}/>
      <Route exact path='/travelling_abroad' component={TravellingAbroad}/>
    </Switch>
  </main>
)

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home</h1>
      </div>
    );
  }
}
class JobBank extends Component {
  render() {
    return (
      <div className="App">
        <h1>JobBank</h1>
      </div>
    );
  }
}
class FindJob extends Component {
  render() {
    return (
      <div className="App">
        <h1>Find A Job</h1>
      </div>
    );
  }
}
class Training extends Component {
  render() {
    return (
      <div className="App">
        <h1>Training</h1>
      </div>
    );
  }
}
class MyApplication extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Application</h1>
      </div>
    );
  }
}
class Immigrate extends Component {
  render() {
    return (
      <div className="App">
        <h1>Immigrate</h1>
      </div>
    );
  }
}
class Visit extends Component {
  render() {
    return (
      <div className="App">
        <h1>Visit</h1>
      </div>
    );
  }
}
class Work extends Component {
  render() {
    return (
      <div className="App">
        <h1>Work</h1>
      </div>
    );
  }
}
class Study extends Component {
  render() {
    return (
      <div className="App">
        <h1>Study</h1>
      </div>
    );
  }
}
class TravelAdviceAdvisories extends Component {
  render() {
    return (
      <div className="App">
        <h1>Travel Advice and Advisories</h1>
      </div>
    );
  }
}
class CanadianAttractionsEventsExperiences extends Component {
  render() {
    return (
      <div className="App">
        <h1>Canadian attractions, events and experiences</h1>
      </div>
    );
  }
}
class CanadianPassports extends Component {
  render() {
    return (
      <div className="App">
        <h1>Canadian passports</h1>
      </div>
    );
  }
}
class TravellingAbroad extends Component {
  render() {
    return (
      <div className="App">
        <h1>Travelling abroad</h1>
      </div>
    );
  }
}

export default App;
