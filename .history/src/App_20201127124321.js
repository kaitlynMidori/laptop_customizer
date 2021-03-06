// import React, { Component } from 'react';
// import MainForm from './components/MainForm';
// import MainSummary from './components/MainSummary';
// import './App.css';

// // This object will allow us to
// // easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });

// class App extends Component {
//   state = {
//     selected: {
//       Processor: {
//         name: "17th Generation Intel Core HB (7 Core with donut spare)",
//         cost: 700,
//       },
//       "Operating System": {
//         name: "Ubuntu Linux 16.04",
//         cost: 200,
//       },
//       "Video Card": {
//         name: "Toyota Corolla 1.5v",
//         cost: 1150.98,
//       },
//       Display: {
//         name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
//         cost: 1500,
//       },
//     },
//   };

//   updateFeature = (feature, newValue) => {
//     const selected = Object.assign({}, this.state.selected);
//     selected[feature] = newValue;
//     this.setState({
//       selected,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header>
//           <h1>ELF Computing | Laptops</h1>
//         </header>
//         <main>
//           <form className="main__form">
//             <h2>Customize your laptop</h2>
//             <MainForm
//               {...this.props}
//               {...this.state}
//               currencyFormat={USCurrencyFormat}
//               updateFeature={this.updateFeature}
//             />
//           </form>
//           <section className="main__summary">
//             <h2>Your cart</h2>
//             <MainSummary currencyFormat={USCurrencyFormat} {...this.state} />
//           </section>
//         </main>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import Summary from '/Summary';
import FeaturesForm from '/FeaturesForm';
import SummaryTotal from '/SummaryTotal';

import './App.css';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeaturesForm selected={this.state.selected} updateFeature={this.updateFeature} features={this.props.features} uscurrencyformat={USCurrencyFormat}/>
          {/* Total Cost Summary Component */}
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.state.selected} uscurrencyformat={USCurrencyFormat} />

            {/* Summary Total Component */}
            <SummaryTotal uscurrencyformat={USCurrencyFormat} total={total} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;