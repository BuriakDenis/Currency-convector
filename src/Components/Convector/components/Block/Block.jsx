import React from 'react'
import "./Block.scss"
const defaultCurrencies = ["UAH", "USD", "EUR"]


export default function Block({ onChangeValue, onChangeCurrency, value, currency }) {
   
    return (
        <div className='block__currency-block'>
            <ul className='block__currencies'>
                {defaultCurrencies.map((cur) => (
                    <li onClick={() => onChangeCurrency(cur)}
                        className={currency === cur ? 'active' : 'block__currencies-list'}
                        key={cur}>
                        {cur}
                    </li>
                ))}
            </ul>
            <input onChange={(e) => onChangeValue(e.target.value)} value={value} type="number" placeholder={0} />
        </div>
    )
}
