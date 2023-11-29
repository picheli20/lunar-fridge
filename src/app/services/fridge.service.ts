import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDocs, setDoc } from '@firebase/firestore';

export interface FirdgeItems {
  1: {
    shelfs: string[];
  }
  2: {
    shelfs: string[];
  }
  3: {
    shelfs: string[];
  }
}

@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  private readonly fireStoreKey = 'fridges';
  private readonly firestore = inject(Firestore);

  async load(): Promise<FirdgeItems> {
    const docs = (await getDocs(
      collection(this.firestore, this.fireStoreKey)
    )).docs;

    const [fridge1, fridge2, fridge3] = docs.map(doc => ({ ...doc.data(), id: doc.id })) as any[];

    return {
      1: {
        shelfs: [...fridge1.shelfs, ...new Array(8 - fridge1.shelfs.length).fill('')],
      },
      2: {
        shelfs: [...fridge2.shelfs, ...new Array(7 - fridge2.shelfs.length).fill('')],
      },
      3: {
        shelfs: [...fridge3.shelfs, ...new Array(5 - fridge3.shelfs.length).fill('')],
      }
    }
  }


  async update(id: string, shelfs: string[]) {
    console.log(shelfs, id);
    await setDoc(doc(this.firestore, this.fireStoreKey, id), { shelfs });
  }
}
