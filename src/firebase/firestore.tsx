import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase.config";
import { BankListInt } from '../interfaces/BankListInterface';

const db = getFirestore(app)

const addDocument = (banks: BankListInt[]) => {
    try {
        banks.forEach(element => {
            const { bankName, age, description, url } = element;
            addDoc(collection(db, 'Banks'), {
                bankName,
                age,
                description,
                url
            }).then(resp => console.log(resp.id))
        });
    } catch (error) {
        console.log(error);
    }
}

const getDocument = async () => {
    const querySnapshot = await getDocs(collection(db, "Banks"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });

}

export {
    addDocument,
    getDocument
};
