import { IRepositories } from "../../models/repositories";
import { Container } from "./styles";

interface IProps {
  repositories: [IRepositories] | undefined;
  title: string;
}

export default function ListRepositories(props: IProps){
  return(
    <Container>
        {props.repositories && props.repositories.length && (
          <table>
            <tbody>
              <strong>{props.title}</strong>
              {props.repositories.map((obj, index) => (
                <tr key={index}>
                  <td>
                    <a href={obj.html_url}>{obj.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Container>
  )
}