import myKey from "./khaltiKey";
import { useToken } from "../../../apis";

const KhaltiConfig = () => {
  const { tokenInstance } = useToken();
  let config = {
    // replace this key with yours
    publicKey: myKey.publicTestKey,
    productIdentity: "2",
    productName: "Jeshika",
    productUrl: "http://gameofthrones.wikia.com/wiki/Dragons",
    eventHandler: {
      // hit merchant api for initiating verfication
      onSuccess(payload) {
        console.log(payload);

        let data = {
          token: payload.token,
          amount: payload.amount,
          userName: payload.product_name,
          semester: 1,
        };
        tokenInstance
          .post(`/khalti`, data)
          .then((res) => {
            console.log(res);
            console.log("data:", data);
          })
          .catch((e) => {
            console.log(e);
            console.log("data:", data);
          });
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  return { config };
};
export default KhaltiConfig;
