"use client";

import { useState } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { products } from "@/lib/data";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-64">
      <Command className="rounded-lg border shadow-md">
        <div className="flex items-center px-2">
          <CommandInput
            placeholder="Rechercher un produit..."
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 100)}
          />
        </div>

        {open && (
          <CommandList className="absolute top-full mt-1 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <CommandEmpty>Aucun produit trouvé.</CommandEmpty>
            <CommandGroup heading="Produits">
              {products.map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.name}
                  onSelect={() =>
                    router.push(`/produits/${product.href}/${product.id}`)
                  }
                >
                  <span>{product.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
