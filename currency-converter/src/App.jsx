import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrency from './hooks/useCurrency'
import { InputBox } from './components'


function App() {
  const [amount,setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [to,setTo] = useState("usd")
  const [from,setFrom] = useState("inr")
  const swap = ()=>{
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const currency = useCurrency(from)
  const options = Object.keys(currency)
  const convert = ()=>{

    setConvertedAmount(amount*currency[to])
  }
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://www.livemint.com/lm-img/img/2023/07/16/1600x900/Digital_Currencies_1660189785051_1689495993330.JPG')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount)=>setAmount(amount)}
                            selectCurrency={from}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            currencyOptions={options}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onAmountChange={(convertedAmount)=>setAmount(convertedAmount)}
                            selectCurrency={to}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            currencyOptions={options}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
