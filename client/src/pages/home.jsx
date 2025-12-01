function Home() {
  const username = JSON.parse(localStorage.getItem("currentUser")).username;

  return (
    <>
      <h3>Welcome, {username}</h3>
    </>
  );
}

export default Home;
