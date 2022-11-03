
import React, { useEffect, useState, useRef } from 'react';
import Block from './components/Block/Block';

import './Convector.scss';

export default function Convector() {
    const [fromCurrency, setFromCurrency] = useState("UAH");
    const [toCurrency, setToCurrency] = useState("USD");
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);

    const ratesRef = useRef({});

    useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then(res => res.json())
            .then(json => {
                ratesRef.current = json.rates;
                onChangeToPrice(1)
            }).catch(err => {
                console.warn(err);
                alert('Can`t use info');
            })
    }, [])

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency]);
    
    const onChangeFromPrice = (value) => {
        const price = value / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency]
        setFromPrice(value);
        setToPrice(result.toFixed(2));
    }
    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(result.toFixed(2))
        setToPrice(value);

    }


    return (
        <section className='convector'>
            <div className='convector__container'>
                <form className='convector__content'>
                    <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
                    <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice} />

                </form>


            </div>
        </section>
    )


}