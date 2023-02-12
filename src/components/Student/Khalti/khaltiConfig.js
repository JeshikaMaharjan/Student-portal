import myKey from "./khaltiKey";
import { useToken } from "../../../apis";
import { useAuth } from "../../../Authentication/auth";
import { useEffect } from "react";

const KhaltiConfig = () => {
  const { tokenInstance } = useToken();
  const username = useAuth((state) => state.username);
  const setMessage = useAuth((state) => state.setMessage);
  const description = useAuth((state) => state.description);

  useEffect(() => {
    setMessage("Loading");
  }, []);

  let config = {
    // replace this key with yours
    publicKey: myKey.publicTestKey,
    productIdentity: "2",
    productName: `${username}`,
    productUrl: "http://dummy.com",
    eventHandler: {
      // hit merchant api for initiating verfication
      onSuccess(payload) {
        console.log(payload);

        let data = {
          token: payload.token,
          amount: payload.amount,
          userName: payload.product_name,
          semester: 1,
          // description: description,
        };
        tokenInstance
          .post(`/khalti`, data)
          .then((res) => {
            setMessage(res.data.message);
            // setMessage("message");
            console.log("data:", data);
          })
          .catch((e) => {
            setMessage(e.response.data.message);
            // setMessage("error");
            console.log("error:", data);
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
    paymentPreference: ["KHALTI"],
  };
  return { config };
};
export default KhaltiConfig;
