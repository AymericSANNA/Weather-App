// == Npm Imports 
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import React from 'react';
// == Local Imports
import './App.css';
import Forcast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';


// Reuni les different components pour les afficher
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">

    <TopButtons/>
    <Inputs/>

    <TimeAndLocation/>
    <TemperatureAndDetails/>
    <Forcast/>
    </div>

  );
}

// == Export
export default App;
