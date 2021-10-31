import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://ghastly-shadow-61352.herokuapp.com/service')
                .then(result => {
                    const res = result.data;
                    if (res.length > 0) {
                        setServices(result.data);
                    }
                })
        }
        fetchData()
    }, [])

    return services;
}

export default useServices;