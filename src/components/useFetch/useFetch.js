import { useState, useEffect } from "react";
const useFetch = (baseURL) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const abortCont = new AbortController();

        fetch (baseURL, {signal: abortCont.signal})
        .then(res => {
            if (!res.ok){
                throw Error("Could not fetch Data for this resource")
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log("Error Aborted");
            }
            else {
                setError(err.message);
                setIsPending(false)
            }
        })

        return() => abortCont.abort();
    }, [baseURL]);
    return { data, isPending, error}
}

export default useFetch