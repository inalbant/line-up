import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Table } from "./organisms";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
}

export default App;
