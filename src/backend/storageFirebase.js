// import { storage } from "./firebase_config";
// import {
//     ref,
//     uploadBytes,
//     getDownloadURL,
//     listAll,
//     list,
// } from "firebase/storage";
// import { v4 } from "uuid";


// const imagesListRef = ref(storage, "images/");

// const upload_file = (imageUpload, setImageUpload, setImageUrls) => {
//     if (imageUpload == null) return;

//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then((url) => {
//             setImageUrls((prevUrls) => [...prevUrls, url]);
//             // Reset the input field
//             if (inputRef.current) {
//                 inputRef.current.value = "";
//             }
//             // Clear the chosen file
//             setImageUpload(null);
//         });
//     });
// };

// const read_files = (setImageUrls) => {
//     listAll(imagesListRef).then((response) => {
//         response.items.forEach((item) => {
//             getDownloadURL(item).then((url) => {
//                 setImageUrls((prev) => [...prev, url]);
//             });
//         });
//     });
// }
