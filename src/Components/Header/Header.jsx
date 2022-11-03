import React from 'react'
import "./Header.scss"
export default function Header({ items, error, isLoaded }) {

    if (error) {
        return (
            <header className='header'>
                <div className='header__container'>
                    <div className='header__title'>Currency</div>
                    <div className='header__actual-date'></div>
                    <div className='header__error'>Error: {error.message} </div>;
                </div>
            </header>
        )
    } else if (!isLoaded) {
        return (
            <header className='header'>
                <div className='header__container'>
                    <div className='header__title'>Currency</div>
                    <div className='header__actual-date'></div>
                    <div className='header__loading sk-three-bounce'>Loading
                        <span className='sk-child sk-bounce1'></span>
                        <span className='sk-child sk-bounce2'></span>
                        <span className='sk-child sk-bounce3'></span>
                    </div>
                </div>
            </header>
        )
    }
    else {
        const currentDate = items["lastupdate"].substring(0, 10)
        const currencyUSD = items.rates["UAH"].toFixed(2)
        const currencyEUR = () => ((1 / items.rates["EUR"]) * items.rates["UAH"]).toFixed(2)

        return (
            <header className='header'>
                <div className='header__container'>
                    <div className='header__title'>Currency</div>
                    <div className='header__date date'>
                        <span className='date__actual'>{currentDate}</span>

                    </div>
                    <ul className='header__currency currency'>
                        <li className='currency__usd'>
                            <span className='currency__name'>USD</span>
                            <span className='currency__value'>{currencyUSD}</span>
                        </li>
                        <li className='currency__eur'>
                            <span className='currency__name'>EUR</span>
                            <span className='currency__value'>{currencyEUR()}</span>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }

}
