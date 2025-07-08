import {useEffect , useState} from "react"

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res=>res.json())    // convert from string to json and return
        .then(res => setData(res[currency]))     // receive json and setData to currency res.currency = res[currency]
        .catch((err) => {
                console.error("Error fetching currency data:", err.message);
            })
    },[currency])
    return data     // data k andar currency ki json aayegi
    
}

export default useCurrencyInfo;