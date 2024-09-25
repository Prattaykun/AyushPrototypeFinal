import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, app } from '../../firebase'; // Ensure you have the correct import for db
import styles from './GovLoadScreen.module.css';

const GovLoadScreen =  () => {
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const checkUserRole = async (user) => {
            if (user) {
                const userRef = doc(db, 'roles', user.uid);
                const userDoc = await getDoc(userRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    if (userData.role === 'govtofficial') {
                        navigate('/GovDashboard');
                    } else if (userData.role === 'startup') {
                        navigate('/Dashboard');
                    } else {
                        alert('Unauthorized access');
                    }
                } else {
                    alert('No role found for this user');
                }
            } else {
                navigate('/RoleSelect'); // Redirect to login if no user is authenticated
            }
        };

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            checkUserRole(user);
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    return (
        <div className={styles.container}>
          <div className={styles.loader}></div>
          <h2 className={styles.loadingText}>Loading...</h2>
        </div>
      );
};

export default GovLoadScreen;