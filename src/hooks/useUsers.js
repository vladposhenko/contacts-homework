import { useCallback, useEffect, useState } from "react";
import {
    getUsers,
    createContact,
    deleteContact,
    getContactsList,
    updateContact,
} from "../services/contactsService";
import { useBooleanFlag } from "./common";

export default function useUsers() {
    const [users, setUsers] = useState([]);

    const [isLoading, toggleIsLoading] = useBooleanFlag(false);

    const refresh = useCallback(() => {
        toggleIsLoading(true);
        getUsers().then((data) => {
            setUsers(data);
            toggleIsLoading(false);
        });
    }, [toggleIsLoading]);

    useEffect(refresh, [refresh]);

    return {
        isLoading,
        refresh,
        users
    };
}
