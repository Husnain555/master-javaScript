"use client";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query Query {
    getUsers {
      id
      username
      email
    }
  }
`;

export default function Graphql() {
    const { data, loading, error } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.getUsers.map((user: any) => (
                    <li key={user.id}>
                        {user.username} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}
