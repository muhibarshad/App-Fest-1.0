import { useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from '@firebase/firestore';
import { db } from './firebaseConfig';

const user_collection_ref = collection(db, 'collection_name')


// function to add 
const add_user = async () => {
    await addDoc(user_collection_ref, {})
}

// function to update

//parameter can be field of that are to be updated
const update_user = async (id/*,fields old value*/) => {
    const user_doc = doc(db, 'collection_name', id)
    const new_fields = { /*field name:new value*/ };
    await updateDoc(user_doc, new_fields)
}

//function to delete
const delete_user = async (id) => {
    const user_doc = doc(db, 'collection_name', id);
    await deleteDoc(user_doc);
}

// function to read
const read_user = (set_users) => {
    const get_users = async () => {
        const data = await getDocs(user_collection_ref);
        set_users(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
}


export default { add_user, update_user, delete_user, read_user };