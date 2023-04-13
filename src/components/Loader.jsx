import { Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-auto">
          <Spinner size="xl" />
        </div>
      </div>
    </>
  );
}

export default Loading;
