import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteCoffee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`http://localhost:5000/coffees/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coffees'] });
    },
  });
};
