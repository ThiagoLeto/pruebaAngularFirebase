import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Probando } from 'src/app/probando';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProbandoService {

  constructor(private firestore: Firestore) { }

  addProbando( probandos: Probando ){
    const probandoRef = collection(this.firestore, 'probando');
    return addDoc(probandoRef, probandos);
  }
  getProbando(): Observable<Probando[]> {
    const probandoRef = collection(this.firestore, 'probando');
    return collectionData(probandoRef, { idField: 'id' }) as Observable<Probando[]>;
  }
  deletePlace(probandoso: Probando) {
    const probandoDocRef = doc(this.firestore, `probando/${probandoso.id}`);
    return deleteDoc(probandoDocRef);
  }
}

