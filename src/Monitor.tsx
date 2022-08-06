import React from 'react';
import s from './Monitor.module.css'


type MonitorType = {
    counter: number;
    maxValue?: number;
    minValue: number
    errorText: string | null
    error: boolean
    enterText: string | null
}

export const Monitor = (props: MonitorType) => {

    const classButton = s.monitor + ' '+ (props.counter === props.maxValue ? s.red : s.blue)
    return (
        <div>
        <div className={classButton}>
            {props.error ? props.errorText : props.enterText ? <span className={s.enterText}>{props.enterText}</span> : props.counter}
            {/*{props.error ? props.errorText : props.counter}*/}
        </div>

        </div>
    )
}