import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  provincia: string;
  ciudad: string;
  comentarios?: string;
  formType: 'energia' | 'car-detail';
  language: 'es' | 'en';
}

export const submitForm = async (formData: FormData): Promise<{ success: boolean; error?: string }> => {
  try {
    if (typeof window === 'undefined' || !db) {
      return { 
        success: false, 
        error: "Firebase no está disponible en el servidor" 
      };
    }    
    const docRef = await addDoc(collection(db, "forms"), {
      ...formData,
      timestamp: Timestamp.now(),
      createdAt: new Date().toISOString(),
    });
    console.log("✅ Formulario enviado exitosamente. ID:", docRef.id);
    return { success: true };
  } catch (error) {
    console.error("❌ Error al enviar formulario:", error);
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Error desconocido" 
    };
  }
};