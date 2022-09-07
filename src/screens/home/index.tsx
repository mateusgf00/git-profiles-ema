import { useEffect, useState } from "react";
import UserDetail from "../../components/userDetail";
import userService from "../../service/userService";
import { Container, InputSearchContainer } from "./styles";

import { IRepositories } from "../../model/repositories";
import { IUser } from "../../model/users";

export default function Home() {
  const [user, setUser] = useState<IUser>();
  const [newestRepositories, setNewestRepositories] = useState<[IRepositories]>();
  const [mostPopularRepositories, setMostPopularRepositories] = useState<[IRepositories]>();

  useEffect(() => {
    function search() {
      const input = document.getElementById("search-input") as HTMLInputElement;
      input?.addEventListener("keypress", async (e) => {
        if (e.key === "Enter") {
          if (input.value) {
            const user = await userService.getUserbyId(input.value);
            setUser(user);

            loadRepositories(user?.login);
          }
        }
      });
    }
    search();

    async function loadRepositories(login: string) {
      if (login !== undefined) {
        const repositoriesData = await userService.getRepositories(login);
        sortNewestRepositories(repositoriesData);
        sortMostPopularRepositories(repositoriesData);
      }
    }

    async function sortNewestRepositories(repositories: any) {
      repositories.sort((a: IRepositories, b: IRepositories) =>
        a.created_at < b.created_at ? 1 : -1
      );

      const newestRepositories = repositories.slice(0, 4);

      setNewestRepositories(newestRepositories);
    }

    async function sortMostPopularRepositories(repositories: any) {
      repositories.sort((a: IRepositories, b: IRepositories) =>
       ( a.stargazers_count + a.forks_count) < ( b.stargazers_count + b.forks_count) ? 1 : -1
      );

      const mostPopularRepositories = repositories.slice(0, 4);

      setMostPopularRepositories(mostPopularRepositories);
    }
  }, []);
  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          id="search-input"
          placeholder="Search for a user..."
        />
      </InputSearchContainer>
      {user && (
        <UserDetail
          login={user?.login}
          avatar_url={user?.avatar_url}
          followers={user?.followers}
          public_repos={user?.public_repos}
          newestRepositories={newestRepositories}
          mostPopularRepositories={mostPopularRepositories}
        />
      )}
    </Container>
  );
}
