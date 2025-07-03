import axiosInstance from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

export const useAddCoffee = () => {
  return useMutation({
    mutationFn: async (coffeeData) => {
      const response = await axiosInstance.post('/coffees', coffeeData);
      return response.data;
    },
  });
};
