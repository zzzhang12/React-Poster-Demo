import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModelHandler() {
    setModalIsVisible(false);
  }

  function showModelHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModelHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModelHandler}
        />
      </main>
    </>
  );
}

export default App;
