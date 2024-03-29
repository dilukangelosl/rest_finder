"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "business_status",
    header: "Business Status",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "vicinity",
    header: "Address",
  },

  {
    accessorKey: "vicinity",
    header: "Address",
  },

  {
    accessorKey: "geometry.location.lat",
    header: "Latitude",
  },

  {
    accessorKey: "geometry.location.lng",
    header: "Longitude",
  },

  {
    accessorKey: "rating",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Ratings
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },

  {
    accessorKey: "user_ratings_total",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Rating Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
]
