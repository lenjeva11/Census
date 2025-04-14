import React from 'react';
import VillageForm from './components/VillageForm';
import VillageList from './components/VillageList';

function App() {
  const [refresh, setRefresh] = React.useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"> Village Management App</h1>
      <VillageForm onSuccess={triggerRefresh} />
      <VillageList key={refresh} />
    </div>
  );
}

export default App;
