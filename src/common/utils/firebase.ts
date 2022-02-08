import { firestore } from '../../app/firebase';
import { writeBatch, collection, doc } from 'firebase/firestore';
import { IProduct } from '../../types';

/**
 * I've included this function purely for convenience; it is not
 * part of any one feature, but can be used to programatically
 * seed collections on firestore!
 */
export const seedProducts = async (
  collectionKey: string,
  products: IProduct[]
): Promise<void> => {
  try {
    const collectionRef = collection(firestore, collectionKey);

    const batch = writeBatch(firestore);

    products.forEach(({ id, ...product }) => {
      batch.set(doc(collectionRef), product);
    });

    await batch.commit();
  } catch (error) {
    console.log(error);
  }
};
