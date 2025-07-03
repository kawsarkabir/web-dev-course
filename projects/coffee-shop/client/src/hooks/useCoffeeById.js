import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCoffeeById = (id) => {
  return useQuery({
    queryKey: ['coffee', id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/coffees/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};
