import React, {useState} from 'react';
import './App.css';
import {Monitor} from './Monitor';
import {Button} from './Button';
import {Settings} from './Settings';


export type CounterType = {
    counter: number
    min: number
    max: number
}
let maxCounterValue: number, minCounterValue: number;

function App() {
    // const [isHidden, setIsHidden]= useState<boolean>(true)
    const [counter, setCounter] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string | null>(null)
    const [enterText, setEnterText] = useState<string | null>(null)
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)


    const setValues = (min: number, max: number) => {
        maxCounterValue = max;
        minCounterValue = min;
        setCounter(min);
        setEnterText(null)
        // setIsHidden(true)
    }
    const RaiseCountHandler = () => {
        setCounter(counter + 1);

    }

    // const backToSettings = () => {
    //     setIsHidden(false)
    // }


    return (
        <div className="App">
            <div className="container">
                <div>
                    {
                        <Settings setValues={setValues}
                                  setError={setError}
                                  setErrorText={setErrorText}
                                  error={error}
                                  setEnterText={setEnterText}
                                  setButtonDisabled={setButtonDisabled}



                        />
                    }

                </div>

                {
                    <div className="counter">
                        <Monitor counter={counter} maxValue={maxCounterValue} minValue={minCounterValue}
                                 errorText={errorText} error={error} enterText={enterText}/>
                        <div className="functionalBox">
                            <Button title={'INC'} callBack={RaiseCountHandler}
                                    disabled={!!maxCounterValue && counter >= maxCounterValue || error || buttonDisabled}/>
                            <Button title={'RESET'} callBack={() => setCounter(minCounterValue)} disabled={error || buttonDisabled}/>
                            {/*<Button title={'Set'} callBack={backToSettings} />*/}
                        </div>
                    </div>

                }



            </div>

        </div>
    );
}

export default App;
