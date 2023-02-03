import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore, orderBy } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Store } from '../intefaces/storeinterface';
import { User } from '../intefaces/userinterface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConectService {

  constructor(
    private firestore:Firestore
  ) { }
  
  ProductoSeparado:any
//FUNCIONES PARA DATABASE EN FIREBASE USANDO FIRESTORE Validacion
addValidUser(user:any){
  const UserRef = collection(this.firestore, 'ValidUserData');
  return addDoc(UserRef, user)    
}
//
//FUNCION QUE TRAE LA DATA DE LA COLECCION ValidUserData
getUserValid():Observable<User[]>{
  const productsRef = collection(this.firestore, 'ValidUserData');
  return collectionData(productsRef, {idField:'id'}) as Observable<User[]>
}
//

//FUNCION QUE BORRA UN DOC DE LA COLECCION ValidUserData
deletedValid(products:any){
  const productsRef = doc(this.firestore, `ValidUserData/${products}`)
  return deleteDoc(productsRef);
}
//


//FUNCION QUE AÑADE UN USUARIO A UNA COLECCION USERDATA
addUser(user:User){
  const UserRef = collection(this.firestore, 'UserData');
  return addDoc(UserRef, user)    
}
//


//FUNCION QUE AÑADE UNA DATA A LA COLECCION CARRITO
addCart(products:any,uid:any){
  const productsRef = collection(this.firestore, `UserData/${uid}/carrito`)
  return addDoc(productsRef , products );
}
//

//FUNCION QUE TRAE LA DATA DE LA COLECCION CARRITO
getDataCart(uid:any):Observable<any>{
  const productsRef = collection(this.firestore, `UserData/${uid}/carrito`);
  return collectionData(productsRef) as Observable<any>
}
//

//FUNCION QUE TRAE LA DATA DE LA COLECCION USERDATA
getDataUser():Observable<User[]>{
  const productsRef = collection(this.firestore, 'UserData');
  return collectionData(productsRef, {idField:'id'}) as Observable<User[]>
}
//

//FUNCION QUE BORRA UN DOC DE LA COLECCION USERDATA
deletedCart(products:any){
  const productsRef = doc(this.firestore, `UserData/${products}`)
  return deleteDoc(productsRef);
}
//


//FUNCION DE FIRESTORE QUE AGREGA UNA NUEVA ENTRADA DE DATO EN NUESTRA BASE DE DATOS EN FIREBASE
addProduct(products:Store){
  const productsRef = collection(this.firestore, 'Myministoreproducts');
  return addDoc(productsRef, products)    
}
//

//FUNCION DE FIRESTORE QUE TRAE DATOS DE NUESTRA BASE DE DATOS ALOJADA EN FIREBASE
getDataProducts():Observable<Store[]>{
  const productsRef = collection(this.firestore, 'Myministoreproducts');
  return collectionData(productsRef, {idField:'id'}) as Observable<Store[]>
}
//</>


//FUNCION QUE ELIMINA UNA FILA DE DATOS DE UNA COLECCIÒN EN NUESTRA DATABASE DE FIREBASE
deletedProduct(products:Store){
  const productsRef = doc(this.firestore, `Myministoreproducts/${products.id}`)
  return deleteDoc(productsRef);
}
//</>
}
