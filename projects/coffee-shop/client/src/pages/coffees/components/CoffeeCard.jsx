/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useDeleteCoffee } from '@/hooks/useDeleteCoffee';
import { toast } from 'sonner';
import { Link } from 'react-router';

export default function CoffeeCard({ coffee }) {
  const [open, setOpen] = useState(false);
  const { mutate: deleteCoffee, isPending } = useDeleteCoffee();

  const handleDelete = () => {
    deleteCoffee(coffee._id, {
      onSuccess: () => {
        toast.success(`☕ "${coffee.name}" deleted successfully`);
        setOpen(false);
      },
      onError: (err) => {
        toast.error(err);
      },
    });
  };

  return (
    <div className="border rounded-lg p-5 bg-white shadow-sm">
      <img
        src={coffee.photoURL}
        alt={coffee.name}
        className="h-48 w-full object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold">{coffee.name}</h3>
      <p className="text-gray-500">👨‍🍳 Chef: {coffee.chefName}</p>
      <p className="text-gray-500">📦 Supplier: {coffee.supliyerName}</p>
      <p className="text-gray-500">👅 Taste: {coffee.tasteName}</p>
      <p className="text-gray-500">🏷 Category: {coffee.category}</p>
      <Link to={`/coffees/${coffee._id}`}>
        <Button variant="outline" className="w-full mt-2">
          View Details
        </Button>
      </Link>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" className="mt-4 w-full">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Coffee?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <strong>{coffee.name}</strong>?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? 'Deleting...' : 'Yes, Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
