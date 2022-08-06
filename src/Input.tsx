import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'

export type SettingsType = {
    callBack: (value: number, name:string) => void
    value: number
    name: string
    inputClassname: string
}

export const Input = (props: SettingsType) => {
    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.callBack(Number(e.currentTarget.value), props.name)
    }
    return (
        <div className={s.container}>
            <input type="number"
                   name={props.name}
                   onChange={onchangeHandler}
                   value={props.value}
                   className={props.inputClassname}
            />
        </div>
    )
}