import {
    ref,
    uploadBytes,
    listAll,
    getDownloadURL,
  } from 'firebase/storage';

import useFirebase from './firebase';
import { useEffect, useState } from 'react';

export default function useFirebaseStorage(folder = 'images'){
    const { Storages } = useFirebase()
    const [data, setData] =useState([])

    useEffect(() => {
        if (Storages !== null) {
          const ListImage = ref(Storages, `${folder}/`);
          listAll(ListImage).then((result) => {
            result.items.forEach((item) => {
              getDownloadURL(item).then((url) => {
                setData(el => [...el, url])
              });
            });
          });
        }
    }, [Storages, data]);

    return data
}