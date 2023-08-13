import { Result } from "antd";

const ErrorFallback = () => {
  return (
    <Result status="500" title="500" subTitle="Sorry, something went wrong." />
  );
};

export default ErrorFallback;
