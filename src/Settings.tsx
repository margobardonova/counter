import React, {FC, useState} from 'react';
import s from './Settings.module.css'
import {Input} from './Input';
import {Button} from './Button';

type SettingPropsType = {
    setValues: (min: number, max: number) => void;
    setError: (error: boolean) => void
    error: boolean
    setErrorText: (errorText: string | null) => void
    setEnterText: (enterText: string | null) => void
    setButtonDisabled: (value: boolean)=> void

}

export const Settings: FC<SettingPropsType>  = ({setValues, setError, setErrorText, error, setEnterText, setButtonDisabled,  }) => {
    // const [count, setCount] = useState<CounterType>({
    //     counter: 0,
    //     min: 0,
    //     max: 0,
    // })

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [disabled, setDisabled] = useState(false)


    const changeMin = (value: number) => {
        if (value < 0 || value >= max || min ===  max) {
            setError(true)
            setErrorText('Incorrect value!')
            setDisabled(true)
        } else {
            setError(false)
            setErrorText(null)
            setDisabled(false)
        }
        setMin(value)
        setEnterText('enter values and press "set"')
        setButtonDisabled(true)

    }

    const changeMax = (value: number) => {
        if (value <0 || value<= min)
        { setError(true)
            setErrorText('Incorrect value!' )
            setDisabled(true)}
        else {
            setError(false)
            setErrorText(null)
            setDisabled(false)
        }
        setMax(value)
        setEnterText('enter values and press "set"')
        setButtonDisabled(true)
    }
    const changeValue = () => {
        setValues(min, max);
        setDisabled(true)
        setButtonDisabled(false)

    }
    //
    // const test = (value: number, name: string) => {
    //     const a = {...count}
    //     //@ts-ignore
    //     a[name] = value
    //     setCount(a)
    // }
    return (
        <div className={s.settings}>S
            MAX VALUE
            {/*<Input callBack={test} value={count.min} name={'min'}/>*/}
            <Input callBack={changeMax}
                   value={max}
                   name={'max'}
                   inputClassname={s.settings}
            />
            MIN VALUE
            {/*<Input callBack={test} value={count.max} name={'max'}/>*/}
            <Input callBack={changeMin}
                   value={min}
                   name={'min'}
                   inputClassname={s.settings}
            />
            <Button callBack={changeValue}
                    title={'SET'}
                    disabled={error || disabled}
            />
        </div>
    )
}