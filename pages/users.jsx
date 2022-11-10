import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer props={"Users page"}>
      <h2>List of Users</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <h4>{user.title}</h4>
            </Link>
          </li>
        ))}
      </ol>
    </MainContainer>
  );
};

Users.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();
  return { users };
};

export default Users;
