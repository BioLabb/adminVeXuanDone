
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { store } from "../utils/database";

const urlVe = 'vexuan';
// thêm data với id được chỉ định sẵn
export async function setVeXuanWithId(id, infoUser) {
    try {
        console.log(infoUser)
        const docRef = doc(store, urlVe, String(id));
        const data = infoUser
        await setDoc(docRef, data);
        return true;

    } catch (err) {
        console.log(err);
        return false;

    }
}

// kiểm tra vé có tồn tại trên db hay chưa
export async function isVeExist(id) {
    const veDoc = doc(store, urlVe, String(id));
    const docSnapshot = await getDoc(veDoc);

    if (docSnapshot.exists()) {
        return true;
    } else {
        return false;
    }
}

export async function getAllVe() {
    let objResult=[]
    try {
        const citiesRef = collection(store, urlVe); // Replace 'your-collection-name' with the actual name of your collection
        const snapshot = await getDocs(citiesRef);
        objResult = snapshot.docs.map(doc => doc.data());
        return objResult.sort((a,b)=> a.id - b.id);
    } catch (error) {
        console.error('Error getting documents: ', error);
        return [];
    }
}