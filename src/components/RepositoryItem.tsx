import React from 'react';

// import { Container } from './styles';
interface RepositoryItemProps{
  name: string;
  description: string;
  html_url: string;

}
function RepositoryItem(props : RepositoryItemProps) {
  return(<li>
          <strong>{props.name}</strong>
          <p>{props.description}</p>
          <a href={props.html_url}>Acessar repositório</a>
        </li>)
}

export default RepositoryItem;