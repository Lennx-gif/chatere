import {create} from 'zustand';
import axiosInstance from '../lib/axios.js';

 export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningup:false,
    isLoggingi:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,

    CheckAuth: async () => {
        try {
            const res = await axiosInstance.get('/api/auth/check-auth');

            set({authUser:res.data});
        } catch (error) {
            set({authUser:null});
            console.log('Error in The Check Auth',error);
        }finally{
            set({isCheckingAuth:false});
        }
    },
}));

