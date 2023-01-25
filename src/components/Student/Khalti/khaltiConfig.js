import myKey from "./khaltiKey";
import axios from "axios";

let config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "2",
    "productName": "Jeshika",
    "productUrl" : "http://gameofthrones.wikia.com/wiki/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
            let data ={
                "token" : payload.token,
                "amount" : payload.amount,
                "username": payload.productName
            };
            axios.post("http://10.0.0.28:8000/api/khalti", data,
            // {
            //     headers: {'Authorization': 'Bearer '+ localStorage.getItem('access_token')}

            // }
            )

        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};
export default config;