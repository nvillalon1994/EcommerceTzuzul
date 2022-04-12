import axios from "axios"
import { URL } from "../config"
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword } from 'firebase/auth'
import credentials from "./credentials"
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";


const app = initializeApp(credentials);

export const storage = getStorage(app)

//autenticacion
export const auth =getAuth(app)
export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
export function useAuth(){
    const[currentUser,setCurrentUser] = useState()
    useEffect(() =>{
        const unsub = onAuthStateChanged(auth,  (user)=>{setCurrentUser(user)})
        return unsub
    },[])
    
    return currentUser
}
export function logout(){
    return signOut(auth)
}



export const db = getFirestore(app)


const instance = axios.create({
    baseURL:URL
})

const get = async (url)=>{
    return await instance.get(url,{
        withCredentials:true
    })
}

const post = async (url,data)=>{
    return await instance.post(url,data,{
        withCredentials:true
    })
}
const del = async (url)=>{
    return await instance.delete(url,{
        withCredentials:true
    })
}
const del2 = async (url,data)=>{
    return await instance.delete(url,data,{
        withCredentials:true
    })
}
const put = async (url,data)=>{
    return await instance.put(url,data,{
        withCredentials:true
    })
}
 

export default instance
export {get,post,del,del2,put}
