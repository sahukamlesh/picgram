import React from 'react'
import styled from "styled-components";
export default function Like() {
    const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
    text-decoration: none;
    &:hover,
  &:focus {
    color: palevioletred;
    background-color:#DEB7C2;
  }
  &:active {
    color: red;
  }
  `;
  

    return (
        <div>
            <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>Like</Button>
        </div>
    )
}
