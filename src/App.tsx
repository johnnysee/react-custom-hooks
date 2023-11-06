import { useOnlineStatus } from './useOnlineStatus';

const SaveButton = () => {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
};

const StatusBar = () => {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
};

function App() {
  return (
    <>
      <StatusBar />
      <SaveButton />
    </>
  );
}

export default App;
