import { useState, useEffect } from "react"

const useEmailLocalStorage = initialEmail => {
    const [email, setEmail] = useState(initialEmail);
    const key = "email";

    useEffect(() => {
        let emailStore;
        try {
            emailStore = window.localStorage.getItem(key);
            if (emailStore == null) { emailStore = initialEmail; }
        } catch (error) { console.log(error); emailStore = initialEmail; }
        setEmail(emailStore);
    }, []); // --- persist value on mount

    function setEmailExtended(email) {
        try { window.localStorage.setItem(key, email); setEmail(email); }
        catch (error) { console.log(error); }
    };


    return [email, setEmailExtended];
};
export default useEmailLocalStorage;




