import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchMediaGallery = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-node-streaming.vercel.app/api/category');
                if (response.status === 200) {
                    setData(response.data);
                    setRemoveLoading(true)
                }else if (response.status !== 200) {
                    console.log("algo")
                }
            } catch (err) {
                setError(err.message);
            } finally {
                console.log("Fetch finalizado")
            }
        };

        fetchData();
    }, []);

    return { data, error , removeLoading }
};

export default FetchMediaGallery;
