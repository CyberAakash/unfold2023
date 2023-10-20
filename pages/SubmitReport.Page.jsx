"use client"

import Form from "@/components/Form";
import { Button, BeatLoader } from "@chakra-ui/react";
import React from "react";

const SubmitReportPage = () => {
  return (
    <>
      <form className="flex gap-6 items-center justify-center relative" action="">
        <Form />
      </form>
    </>
  );
};

export default SubmitReportPage;
