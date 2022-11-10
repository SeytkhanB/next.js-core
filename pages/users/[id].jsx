import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const {
    query: { id },
  } = useRouter();

  return (
    <MainContainer props={user.title}>
      <h2>User with id {id}</h2>
      <h1>Title of post - {user.title}</h1>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
}
