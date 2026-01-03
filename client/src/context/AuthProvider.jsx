import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext({ user: null, loading: true });

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("http://localhost:5000/check-auth", {
                    withCredentials: true,
                });
                if (res.data.islogged) setUser(res.data.user);
                else setUser(null);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);


    const logout = async () => {
        try {
            await axios.post("http://localhost:5000/logout", {}, { withCredentials: true });
            setUser(null);

        } catch (err) {
            console.log("Logout failed", err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
