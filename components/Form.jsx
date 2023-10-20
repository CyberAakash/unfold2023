import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Textarea,
  BeatLoader,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Form = () => {
  // let [value, setValue] = useState("");
  let [aadhar, setAadhar] = useState(123412341234);
  let [category, setCategory] = useState("");
  let [country, setCountry] = useState("");
  let [state, setState] = useState("");
  let [city, setCity] = useState("");
  let [zipcode, setZipcode] = useState(123456);
  let [date, setDate] = useState("");
  let [desc, setDesc] = useState("");

  const weatherXDCBalance = (ecocontract) => {
    $("#weatherDefiXDCBalance").on("click", async (e) => {
      e.preventDefault();
      const rate = await ecocontract.methods
        .getXDCBalance()
        .call()
        .then((res) => {
          const xdc = web3.utils.fromWei(res, "ether");
          console.log(xdc);
        });
    });
  };

  const incidentReportApp = async () => {
    const web3 = await loadWeb3();
    console.log("Web3", web3);
    const accounts = await web3.eth.getAccounts();
    console.log("accounts", accounts);
    console.log("Web3", accounts);
    const farmcontract = await getFarmChainContract(web3); //Crowdsale Contract
    console.log("farmcontract", farmcontract);
    submitGetData(farmcontract, accounts); // should be called by customer
    // addComp();
  };

  // useEffect(async () => {
  //   incidentReportApp();
  // }, []);

  return (
    <>
      <FormControl
        className="grid grid-cols-2 gap-6 place-items-start place-content-center p-10 shadow-lg bg-bg2 text-white w-[65%] m-3 relative overflow-hidden"
        _action=""
      >
        <Text className="text-white">Aadhar Number</Text>
        <NumberInput
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          defaultValue={123412341234}
          min={100000000000}
          max={999999999999}
          className="w-full"
          id="aadhar-id"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {/* </div> */}
        <Text className="text-white">Category</Text>
        {/* <FormControl> */}
        <Select
          placeholder="Select category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="1">
            Child Pornography (CP)-Child Sexual Abuse Material (CSAM)
          </option>
          <option value="2">
            Rape/Gang Rape (RGR)-Sexually Abusive Content
          </option>
          <option value="3">
            Publishing or Transmitting Sexually Obscene material in electronic
            form
          </option>
          <option value="4">
            Publishing or transmitting of material containing sexually explicit
            act in electronic form
          </option>
        </Select>
        {/* </FormControl> */}
        <Text className="text-white">Country</Text>
        {/* <FormControl> */}
        {/* <FormLabel>Country</FormLabel> */}
        <Select
          placeholder="Select country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>India</option>
          <option>America</option>
        </Select>
        {/* </FormControl> */}
        <Text className="text-white">State</Text>
        {/* <FormControl> */}
        {/* <FormLabel>Country</FormLabel> */}
        <Select
          placeholder="Select state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option>Tamil Nadu</option>
          <option>Karnataka</option>
        </Select>
        {/* </FormControl> */}
        <Text className="text-white" id="city">
          City
        </Text>
        {/* <FormControl> */}
        {/* <FormLabel>Country</FormLabel> */}
        <Select
          placeholder="Select city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option>Madurai</option>
          <option>Chennai</option>
        </Select>
        <Text className="text-white" id="zipcode">
          Zip Code
        </Text>
        <NumberInput
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          defaultValue={123456}
          min={100000}
          max={999999}
          className="w-full"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        {/* </FormControl> */}
        <h2 className="text-white">Date of Occurance</h2>
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          placeholder="Select Date and Time"
          size="md"
          type="date"
          min="1997-01-01"
          max="2030-12-31"
        />
        <Text className="text-white">Explain the situation</Text>
        <Textarea
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
        {/* <div className="h-full w-[28%] bg-bg1 text-white flex flex-col items-center justify-end gap-6"> */}
        <Button
          type="submit"
          name="submit"
          id="complainBtn"
          value="Submit"
          onSubmit={() => {}}
          className="col-span-2 w-full bg-primary text-white rounded-tl-lg rounded-br-lg"
          //   isLoading
          loadingText="SubmitReport"
          //   colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
        {/* </div> */}
      </FormControl>
    </>
  );
};

export default Form;
