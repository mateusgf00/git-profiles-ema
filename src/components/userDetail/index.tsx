import { useEffect, useState } from "react";
import { IRepositories } from "../../model/repositories";
import userService from "../../service/userService";
import {
  Container,
  ContainerUserInformation,
  ContainerNewestRepositories,
  ContainerMostPopularRepositories,
} from "./styles";

interface IProps {
  avatar_url: string | undefined;
  login?: string;
  followers: number | undefined;
  public_repos: number | undefined;
  newestRepositories: [IRepositories] | undefined;
  mostPopularRepositories: [IRepositories] | undefined;
}



export default function UserDetail(props: IProps) {
  return (
    <Container>
      <img src={props.avatar_url}>
      </img>
      <ContainerUserInformation>
        <p>Username: {props.login}</p>
        <p>Followers: {props.followers}</p>
        <p>Repositories count: {props.public_repos}</p>
      </ContainerUserInformation>
      <ContainerNewestRepositories>
        {props.newestRepositories && props.newestRepositories.length && (
          <table>
            <tbody>
              {props.newestRepositories.map((obj, index) => (
                <tr key={index}>
                  <td>
                    <a href={obj.html_url}>{obj.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContainerNewestRepositories>
      <ContainerMostPopularRepositories>
        {props.mostPopularRepositories && props.mostPopularRepositories.length && (
          <table>
            <tbody>
              {props.mostPopularRepositories.map((obj, index) => (
                <tr key={index}>
                  <td>
                    <a href={obj.html_url}>{obj.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContainerMostPopularRepositories>
    </Container>
  );
}
