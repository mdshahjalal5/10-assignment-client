import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} Skills`
    }, [title])
};

export default useTitle;