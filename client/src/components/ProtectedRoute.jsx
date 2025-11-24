import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requiredRole }) {
    const { user, loading } = useContext(AuthContext);

   
    if (loading) return null; 

   
    if (!user) {
        return <Navigate to="/login" replace />;
    }

  
    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

   
    return children;
}
