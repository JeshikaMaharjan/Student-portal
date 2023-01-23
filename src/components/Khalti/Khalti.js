import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import config from './khaltiConfig';
import axios from 'axios';
export default function Khalti(){
    let checkout = new KhaltiCheckout(config);
    return (
        <div>
            <button onClick = {() => checkout.show({amount: 1000})} >Pay Via Khalti </button>
        </div>
    )
}
// export default function Khalti(){
//     function checkout(){
//         let data ={
//             "return_url" : "http://localhost:3000/payment",
//             "website_url" : "http://localhost:3000",
//             "amount" : 100,
//             "purchase_order_id" : "test1",
//             "purchase_order_name" : "test"
//         }
//         const response = axios.post('https://a.khalti.com/api/v2/epayment/initiate/', data,
//         {
//             headers: {
//                 // "Authorization": "Key test_secret_key_7b0419b866204b34bbef1645e5197e95"  
//                 "Authorization": "Key test_public_key_9cdfe34640fa48819755e46a3437d674"  
//             } 
//         }        
//         )

//     }
//     return (
//         <div>
//             <button onClick = {checkout} >Pay Via Khalti </button>
//         </div>
//     )
// }



