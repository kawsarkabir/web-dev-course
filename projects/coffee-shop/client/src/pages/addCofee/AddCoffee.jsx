'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddCoffee } from '@/hooks/useAddCoffee';
import { toast } from 'sonner';

export default function AddCoffee() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    mutate: addCoffee,
    isPending,
    isSuccess,
    isError,
    error,
  } = useAddCoffee();

  const onSubmit = (data) => {
    addCoffee(data, {
      onSuccess: () => {
        // reset();
        toast.success('Coffee added successfully!');
      },
      onError: (err) => {
        toast.error(err);
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-sky-500 text-center">
        Add Coffee
      </h1>

      <div className="mt-10 bg-sky-50 rounded p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-9 items-start">
            <div className="space-y-2">
              <Label htmlFor="name">Coffee Name</Label>
              <Input
                id="name"
                placeholder="Coffee name"
                {...register('name', { required: 'Coffee Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="chefName">Chef Name</Label>
              <Input
                id="chefName"
                placeholder="Chef name"
                {...register('chefName', { required: 'Chef Name is required' })}
              />
              {errors.chefName && (
                <p className="text-red-500 text-sm">
                  {errors.chefName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="supliyerName">Supliyer Name</Label>
              <Input
                id="supliyerName"
                placeholder="Supliyer name"
                {...register('supliyerName', {
                  required: 'Supliyer Name is required',
                })}
              />
              {errors.supliyerName && (
                <p className="text-red-500 text-sm">
                  {errors.supliyerName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tasteName">Taste Name</Label>
              <Input
                id="tasteName"
                placeholder="Taste name"
                {...register('tasteName', {
                  required: 'Taste Name is required',
                })}
              />
              {errors.tasteName && (
                <p className="text-red-500 text-sm">
                  {errors.tasteName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="photoURL">Photo URL</Label>
              <Input
                id="photoURL"
                placeholder="Photo URL"
                {...register('photoURL', { required: 'Photo URL is required' })}
              />
              {errors.photoURL && (
                <p className="text-red-500 text-sm">
                  {errors.photoURL.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                placeholder="Category"
                {...register('category', { required: 'Category is required' })}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full mt-9" disabled={isPending}>
            {isPending ? 'Adding...' : 'Add Coffee'}
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
