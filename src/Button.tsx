import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    callBack: () => void
    disabled?: boolean
    title: string
}

export const Button = (props: ButtonType) => {

    return (
        <div>
            <button className={s.button}
                    disabled={props.disabled}
                    onClick={props.callBack}>{props.title}</button>
            </div>
    )
}