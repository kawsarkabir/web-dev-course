import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCoffees = () => {
  return useQuery({
    queryKey: ['coffees'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/coffees');
      return res.data;
    },
  });
};
