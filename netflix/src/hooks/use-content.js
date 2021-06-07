// import { useEffect, useState, useContext } from 'react';
// import { FirebaseContext } from '../context/firebase';

// const useContent = (target) => {
//   const [content, setContent] = useState([]);
//   const { firebase } = useContext(FirebaseContext);

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection(target)
//       .get()
//       .then((snapshot) => {
//         console.log("use-content snapshot -> ", snapshot.docs);
//         const allContent = snapshot.docs.map((contentObj) => ({
//           ...contentObj.data(),
//           docId: contentObj.id
//         }))

//         setContent(allContent);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       })
//   }, [firebase, target]);

//   return { [target]: content };
// };

// export default useContent;

import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}