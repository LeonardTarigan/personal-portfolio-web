import { doc, getDoc } from "firebase/firestore";
import { db } from "..";
import { ExperienceData } from "@/utils/types";

export async function getAllExperience(): Promise<
  ExperienceData[] | undefined
> {
  try {
    const docRef = doc(db, "content-data", "experience");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()?.data;

    if (docSnap.exists()) {
      return data;
    }
  } catch (err) {}
}
