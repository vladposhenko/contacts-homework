import { useCallback, useEffect, useState } from "react";
import {
     getPosts,
} from "../services/contactsService";
import { useBooleanFlag } from "./common";

export default function usePosts() {
    const [posts, setPosts] = useState([]);

    const [isLoading, toggleIsLoading] = useBooleanFlag(false);

    const refresh = useCallback(() => {
        toggleIsLoading(true);
        getPosts().then((data) => {
            setPosts(data);
            toggleIsLoading(false);
        });
    }, [toggleIsLoading]);

    useEffect(refresh, [refresh]);

    return {
        isLoading,
        refresh,
        posts
    };
}
