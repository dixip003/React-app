import { ContextComponent } from './components/context/ContextComp';
import { CallbackComp } from './components/useCallback/CallbackComp';
import { Form } from './components/useImperativeHandle/Form';
import { ReducerComp } from './components/useReducer/ReducerComp'
import './App.css';

// tutorial link for all hooks code
// https://github.com/cosdensolutions/code/tree/master/videos/long/learn-react-hooks-useReducer

export const App = () => {
  return (
    <div className="App">
      {/* <ContextComponent />
      <CallbackComp /> */}
      <ReducerComp />
    </div>
  );
};
