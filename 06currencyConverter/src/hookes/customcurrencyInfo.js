import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/d040b6c35cb99068268d4c35/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            const lowerCaseData = {}
            Object.keys(res.conversion_rates).forEach(key => {
                lowerCaseData[key.toLowerCase()] = res.conversion_rates[key]
            })
            setData(lowerCaseData)  // ✅ lowercase keys
        })
    }, [currency])
    
    return data;
}

export default useCurrencyinfo;