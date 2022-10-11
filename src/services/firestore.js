// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	collection,
	doc,
	getFirestore,
	query,
	where,
	getDocs,
	getDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLibewxZ5hu0-M612Co7DCzj4Ov-koyNE",
	authDomain: "lacandelacoder.firebaseapp.com",
	projectId: "lacandelacoder",
	storageBucket: "lacandelacoder.appspot.com",
	messagingSenderId: "88998223804",
	appId: "1:88998223804:web:27422599056a8d0b8155b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const getProducts = async () => {
	const resQuery = collection(firestore, "productos");
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};
const getFilterProducts = async (category) => {
	const resQuery = query(
		collection(firestore, "productos"),
		where("category", "==", category),
	);
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};
const getProduct = async (productId) => {
	const resQuery = doc(firestore, "productos", productId);
	const snapshot = await getDoc(resQuery);

	const data = { id: snapshot.id, ...snapshot.data() };
	return data;
};

export { firestore, getProduct, getFilterProducts, getProducts };