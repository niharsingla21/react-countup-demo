import CountUp, { useCountUp } from 'react-countup';
import './App.css';

function App() {

  const { countUp, start, pauseResume, reset, update } = useCountUp({ duration: 5, end: 10000, startOnMount: false});

  return (
    <div className="App">

      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000) }>Update to 2000</button>
      </div>
      <h1>
        <CountUp end={200}></CountUp>
      </h1>

      <br />
      <h1>
        <CountUp end={200} duration={5}></CountUp>
      </h1>
      <br />
      <h1>
        <CountUp start={500} end={1000} duration={10}></CountUp>
      </h1>
      <br />
      <h1>
        <CountUp start={0} end={1000} prefix={'$'} decimals={2} duration={10}></CountUp>
      </h1>
      <br />
      <h1>
        <CountUp start={0} end={1000} suffix={'USD'} decimals={2} duration={10}></CountUp>
      </h1>
    </div >
  );
}

export default App;
