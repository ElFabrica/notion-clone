"use client"

import {useEffect, useState} from "react"
import {FileIcon} from "lucide-react"
import {useQuery} from "convex/react"
import {useRouter} from "next/navigation"
import {useUser} from "@clerk/clerk-react"

import {
CommandDialog,
CommandEmpty,
CommandGroup,
CommandInput,
CommandItem,
CommandList
} from "@/components/ui/command"
import {useSearch} "@/hooks/use-search"
import {api} from "@/convex/_generated/api" 

export function SearchCommand() {
    const {user} = useUser()
    const router = useRouter()
    const documents = useQuery(api.documents.getSearch) 
}
