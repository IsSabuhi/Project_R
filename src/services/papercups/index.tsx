import { useAuthContext } from "@/src/hooks/use-auth-context";
import { ChatWidget } from "@papercups-io/chat-widget";
import React, { useEffect, useState } from "react";

const Papercups = () => {
  const KEY = process.env.NEXT_PUBLIC_PAPERCUPS;
  const { isAuthorized, accessToken, userId } = useAuthContext();
  const [user, setUser] = useState({
    uid: "",
    displayName: "",
    email: ""
  });

  useEffect(() => {
    if (isAuthorized) {
      setUser({
        uid: userId || "",
        displayName: userId || " ",
        email: userId!
      });
    }
  }, [isAuthorized]);

  //Handling case when Papercups Account key is not present.
  //In that case do not load papercups at all.
  if (!KEY) return null;

  return (
    <ChatWidget
      accountId={KEY}
      title="Welcome to Resuminator"
      subtitle="If you have any query, just drop us a message here 🤙🏻"
      primaryColor="#3182CE"
      awayMessage="Our team is currently offine, but feel free to drop your message. Either Vivek or Himanshu will get back to you soon."
      newMessagePlaceholder="Start typing..."
      showAgentAvailability={true}
      agentAvailableText="We're online right now!"
      agentUnavailableText="We're away at the moment. Feel free to drop a message, we'll respond asap"
      requireEmailUpfront={false}
      iconVariant="filled"
      baseUrl="https://app.papercups.io"
      customer={{
        name: user.displayName,
        email: user.email,
        external_id: user.uid
      }}
      token={accessToken!}
    />
  );
};

export default Papercups;
