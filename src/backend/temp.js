// import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from '@firebase/firestore';
// import dbObject from './firebaseConfig';

// const add_teacher_course = async (teacherId, courseName, details, assignments, dates) => {
//     if (!teacherId || !courseName || !details || !assignments || !dates) {
//       throw new Error('Missing required parameters');
//     }

//     const teacherCollectionRef = collection(dbObject.db, `Teacher_${teacherId}`);

//     try {
//       await addDoc(teacherCollectionRef, { courseName, details, assignments, dates });
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to add teacher course to database');
//     }
//   };

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  // your config here
  apiKey: "AIzaSyAHDdBtyHqvqqxGv6jdty3dRpM87iIQ93o",
  authDomain: "app-fest-4e681.firebaseapp.com",
  projectId: "app-fest-4e681",
  storageBucket: "app-fest-4e681.appspot.com",
  messagingSenderId: "843256298854",
  appId: "1:843256298854:web:ca6814d047409a2ae29ca7",
  measurementId: "G-LJ6T68J0Q1",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Firestore database instance
const db = getFirestore(firebaseApp);

// Storage instance
const storage = getStorage(firebaseApp);

// Collection names
const TEACHERS_COLLECTION = "teachers";
const COURSES_COLLECTION = "courses";

// Add course details to Firestore
export const addCourseDetails = async (teacherId, courseName, details) => {
  try {
    const teacherDoc = doc(db, TEACHERS_COLLECTION, teacherId);
    const courseRef = await addDoc(collection(teacherDoc, COURSES_COLLECTION), {
      name: courseName,
      details: details,
    });

    console.log("Course added with ID:", courseRef.id);
  } catch (error) {
    console.error("Failed to add course:", error);
    throw error;
  }
};

//Upload weekly schedule to Storage and save its URL to Firestore
export const uploadWeeklySchedule = async (
  teacherId,
  courseId,
  agendaFile,
  content
) => {
  try {
    // Upload agenda file to Storage
    const agendaRef = ref(
      storage,
      `${TEACHERS_COLLECTION}/${teacherId}/${COURSES_COLLECTION}/${courseId}/agenda.pdf`
    );
    await uploadBytes(agendaRef, agendaFile);

    // Get download URL of agenda file
    const agendaURL = await getDownloadURL(agendaRef);

    // Update course document in Firestore with agenda URL and content
    const coursesRef = collection(
      db,
      TEACHERS_COLLECTION,
      teacherId,
      COURSES_COLLECTION
    );
    const queryRef = query(coursesRef, where("name", "==", courseId));
    const coursesSnapshot = await getDocs(queryRef);
    const courseDoc = coursesSnapshot.docs[0];
    await updateDoc(courseDoc.ref, {
      agendaURL: agendaURL,
      content: content,
    });

    console.log("Weekly schedule uploaded and saved for course:", courseId);
  } catch (error) {
    console.error("Failed to upload weekly schedule:", error);
    throw error;
  }
};

// Upload assignment to Storage and save its details to Firestore
export const uploadAssignment = async (
  teacherId,
  courseId,
  assignmentFile,
  assignmentName,
  assignmentDeadline
) => {
  try {
    // Upload assignment file to Storage
    const assignmentRef = ref(
      storage,
      `${TEACHERS_COLLECTION}/${teacherId}/${COURSES_COLLECTION}/${courseId}/${assignmentName}.pdf`
    );
    await uploadBytes(assignmentRef, assignmentFile);

    // Get download URL of assignment file
    const assignmentURL = await getDownloadURL(assignmentRef);

    // Add assignment details to Firestore
    const assignmentsRef = collection(
      db,
      TEACHERS_COLLECTION,
      teacherId,
      COURSES_COLLECTION,
      courseId,
      "assignments"
    );
    await addDoc(assignmentsRef, {
      name: assignmentName,
      deadline: assignmentDeadline,
      url: assignmentURL,
    });

    console.log("Assignment uploaded and saved for course:", courseId);
  } catch (error) {
    console.error("Failed to upload assignment:", error);
    throw error;
  }
};
