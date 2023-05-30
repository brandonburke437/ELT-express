
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC81fecNYCOpCQ5XkjiiLmwmON6dgBneUQ",
    authDomain: "elt-web-ced95.firebaseapp.com",
    databaseURL: "https://elt-web-ced95-default-rtdb.firebaseio.com",
    projectId: "elt-web-ced95",
    storageBucket: "elt-web-ced95.appspot.com",
    messagingSenderId: "321974257525",
    appId: "1:321974257525:web:c71a78e60b4cdcafa7353c"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference 
var deliveryFormDB = firebase.database().ref("deliveryForm");

document.getElementById("deliveryForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    
    var recipientsName = getElementVal("recipientsName")
    var recipientsCity = getElementVal("recipientsCity")
    var recipientsNumber = getElementVal("recipientsNumber")
    var recipientsStreet = getElementVal("recipientsStreet")
    var weightKg = getElementVal("weightKg")
    var dimensionsCm = getElementVal("dimensionsCm")
    var description = getElementVal("description")
    var sendersEmail = getElementVal("sendersEmail")
    var sendersNumber = getElementVal("sendersNumber")
    var sendersMessage = getElementVal("sendersMessage")

    saveMessages( recipientsCity,
        recipientsNumber,
        recipientsStreet,
        weightKg,
        dimensionsCm,
        description,
        sendersEmail,
        sendersNumber,
        sendersMessage );
}

    const saveMessages = (recipientsName,recipientsCity, recipientsNumber, recipientsStreet, weightKg,dimensionsCm,
        description,
        sendersEmail,
        sendersNumber,
        sendersMessage)=> {
    
    var newDeliveryForm = deliveryFormDB.push();
            
   
   
     newDeliveryForm.set({
            
            recipientsName: recipientsName,
            recipientsCity: recipientsCity,
            recipientsNumber: recipientsNumber,
            recipientsStreet: recipientsStreet,
            weightKg: weightKg,
            dimensionsCm: dimensionsCm,
            description: description,
            sendersEmail: sendersEmail,
            sendersNumber: sendersNumber,
            sendersMessage: sendersMessage,
        });

};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
