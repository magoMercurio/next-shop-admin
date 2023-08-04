import FormProduct from "@components/FormProduct";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Edit() {
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    console.log(id);
  }, [router?.isReady]);

  return <FormProduct />;
}
