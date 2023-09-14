import {initializeApp} from 'firebase/app'
import {
    getFirestore,collection,getDocs,
    addDoc,deleteDoc,doc 
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnZcncBoowophsZl6-BOysFGn40-TD2D4",
    authDomain: "fir-9-bd540.firebaseapp.com",
    projectId: "fir-9-bd540",
    storageBucket: "fir-9-bd540.appspot.com",
    messagingSenderId: "902887776785",
    appId: "1:902887776785:web:db9af4e64d68e5f13607b0"
  };

//Initialize firebase app

initializeApp(firebaseConfig)

//init services

const db=getFirestore()

//collection ref

const colRef=collection(db,'books')

//get collection data

getDocs(colRef) // will return a promise
  .then((snapshot)=>{
    let books=[]
    snapshot.docs.forEach((doc)=>{
        books.push({...doc.data(), id:doc.id})
    })
    console.log(books)
  })
  .catch(err =>{
    console.log(err.message)
  })


  // Adding Documents
  const addBookForm=document.querySelector('.add');
  addBookForm.addEventListener('submit',(e)=>{
    e.preventDefault() // To prevent the page from refreshing

    addDoc(colRef,{
        title: addBookForm.title.value,
        author: addBookForm.author.value,
    })
    .then(()=>{
        addBookForm.reset()
    })
    .then(()=>{
        location.reload()
    })
  })


  // Deleting documents
const deleteBookForm=document.querySelector('.delete');
deleteBookForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const docRef=doc(db,'books',deleteBookForm.id.value)

    deleteDoc(docRef)
    .then(()=>{
        deleteBookForm.reset()
    })
    .then(()=>{
        location.reload()
    })

})