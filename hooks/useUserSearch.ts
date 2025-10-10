import {useState} from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {useDebounce} from "./useDebounce";
import {Doc} from "../convex/_generated/dataModel";

export function useUserSearch(){
    const [searchTerm, setSearchTerm] = useState("");
    // foction pour faire ftech l'api toues les 300 ms pour éviter des call chaque fois que l'utilisateur tape une lettre dans la barre de recherche
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const searchResults = useQuery(
        api.users.searchUsers,
        debouncedSearchTerm.trim() ? { searchTerm: debouncedSearchTerm}: "skip"
    );

    return {
        searchTerm,
        setSearchTerm,
        searchResults: (searchResults || []) as Doc<"users">[],
        isLoading: searchResults === undefined && debouncedSearchTerm.trim() !== "",
    }
}
