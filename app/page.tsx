import Link from 'next/link';
const Home = () => {
  return (
    <div>
      <h1>main page</h1>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Home;
