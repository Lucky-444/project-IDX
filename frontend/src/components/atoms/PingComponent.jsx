import usePing from "../../hooks/apis/queries/usePing";

export const PingComponent = () => {
  const { isError, isLoading, data, error } = usePing();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Hello {data.message}</div>
    </>
  );
};
