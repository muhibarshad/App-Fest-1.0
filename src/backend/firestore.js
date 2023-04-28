import { useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import dbObject from "./firebaseConfig";

const user_collection_ref = collection(dbObject.db, "collection_name");

// function to add
const add_user = async (name, email, password, status) => {
  if (!name || !email || !password || !status) {
    throw new Error("Missing required parameters");
  }

  let userCollectionRef;
  switch (status) {
    case "teacher":
      userCollectionRef = collection(dbObject.db, "Teacher");
      break;
    case "student":
      userCollectionRef = collection(dbObject.db, "Student");
      break;
    default:
      throw new Error("Invalid user status");
  }

  try {
    await addDoc(userCollectionRef, { name, email, password, status });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add user to database");
  }
};

// function to update

//parameter can be field of that are to be updated
const update_user = async (id /*,fields old value*/) => {
  const user_doc = doc(dbObject.db, "collection_name", id);
  const new_fields = {
    /*field name:new value*/
  };
  await updateDoc(user_doc, new_fields);
};

//function to delete
const delete_user = async (id) => {
  const user_doc = doc(dbObject.db, "collection_name", id);
  await deleteDoc(user_doc);
};

// function to read
const get_teachers = async (teacher_collection_ref) => {
  try {
    const data = await getDocs(teacher_collection_ref);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
};

const get_students = async (student_collection_ref) => {
  try {
    const data = await getDocs(student_collection_ref);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

const read_user = async () => {
  try {
    const teacher_collection_ref = collection(dbObject.db, "Teacher");
    const student_collection_ref = collection(dbObject.db, "Student");
    const teacher_array = await get_teachers(teacher_collection_ref);
    const student_array = await get_students(student_collection_ref);
    console.log("Teachers:", teacher_array);
    console.log("Students:", student_array);
    // do something with teacher_array and student_array\

    return [...teacher_array, ...student_array];
  } catch (error) {
    console.error("Error reading user data:", error);
  }
};

export default { add_user, update_user, delete_user, read_user };
