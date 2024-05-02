import React from "react";
import '../styles/Alert.css';
import { Alert, Button, Typography } from "@material-tailwind/react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d={props.d}
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AlertIcon(props) {
  const classN = props.alert.type === 'success' ? 'max-w-screen-md alertbox alert-success px-4 w-fit' : 'max-w-screen-md alertbox alert-danger w-fit'

  return (
    <>
      <Alert
        className={classN}
        icon={<Icon d={props.alert.d}/>}
        
      >
        <Typography color="white" className={props.alert.type === 'success' ? "mt-0 font-normal text-[#2ec946] -mr-8" : "mt-0 font-normal text-[#df0016] -mr-8"}>
          {props.alert.msg}
        </Typography>
      </Alert>
    </>
  )
}
