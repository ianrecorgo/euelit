import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize Firestore once and reuse the db instance
const db = getFirestore();

// Use a function to get a reference to the "games" collection
const getGamesCollectionRef = () => collection(db, "games");

// Async function to load games
const loadGames = async () => {
  try {
    // Get a snapshot of the "games" collection
    const gamesSnapshot = await getDocs(getGamesCollectionRef());
    // Map through the documents and return their data
    return gamesSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    // Handle potential errors
    console.error("Failed to load games:", error);
    return [];
  }
};
