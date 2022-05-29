import React from "react";
import CollectionPage from "@/components/CollectionPage";
import { logAuth } from "src/firebase/functions";

export default function California({ user }: { user: any }) {
  return <CollectionPage collection="california" user={user} />;
}
