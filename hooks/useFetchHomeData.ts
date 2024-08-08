import { useEffect, useState } from 'react';
import { fetchData } from '@/services/graphql/apolloClient';
import { Prebuilt, Service, SoftwareSolution } from '@/types/homeTypes';

export const useFetchData = () => {
  const [prebuilts, setPrebuilts] = useState<Prebuilt[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [software, setSoftware] = useState<SoftwareSolution[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setPrebuilts(data.popularPrebuilts);
        setServices(data.services);
        setSoftware(data.softwareSolutions);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchDataAsync();
  }, []);

  return { prebuilts, services, software };
};

