'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUpdateCoffee } from '@/hooks/useUpdateCoffee';

export default function UpdateCoffee({ coffee }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate: updateCoffee, isPending, isError, error } = useUpdateCoffee();

  useEffect(() => {
    if (coffee) {
      reset({
        name: coffee.name,
        chefName: coffee.chefName,
        supliyerName: coffee.supliyerName,
        tasteName: coffee.tasteName,
        photoURL: coffee.photoURL,
        category: coffee.category,
      });
    }
  }, [coffee, reset]);

  const onSubmit = (data) => {
    updateCoffee(
      { id: coffee._id, data },
      {
        onSuccess: () => {
          toast.success('✅ Coffee updated successfully!');
        },
        onError: () => {
          toast.error('❌ Update failed');
        },
      },
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-amber-500 text-center">
        Update Coffee
      </h1>

      <div className="mt-10 bg-amber-50 rounded p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-9 items-start">
            {[
              {
                label: 'Coffee Name',
                name: 'name',
                placeholder: 'Coffee name',
              },
              {
                label: 'Chef Name',
                name: 'chefName',
                placeholder: 'Chef name',
              },
              {
                label: 'Supliyer Name',
                name: 'supliyerName',
                placeholder: 'Supliyer name',
              },
              {
                label: 'Taste Name',
                name: 'tasteName',
                placeholder: 'Taste name',
              },
              {
                label: 'Photo URL',
                name: 'photoURL',
                placeholder: 'Photo URL',
              },
              { label: 'Category', name: 'category', placeholder: 'Category' },
            ].map(({ label, name, placeholder }) => (
              <div className="space-y-2" key={name}>
                <Label htmlFor={name}>{label}</Label>
                <Input
                  id={name}
                  placeholder={placeholder}
                  {...register(name, { required: `${label} is required` })}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm">
                    {errors[name]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          <Button type="submit" className="w-full mt-9" disabled={isPending}>
            {isPending ? 'Updating...' : 'Update Coffee'}
          </Button>

          {isError && (
            <p className="text-red-600 text-center mt-3">
              ❌ {error?.message || 'Something went wrong'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
