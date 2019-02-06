import React from 'react';
import styled from 'styled-components';

 const SearchBarContent = styled.div`
    max-width: 1000px;
    display: flex;
    margin: 10px auto 0 auto;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    padding-top: 15px;
    position: relative;
    align-items: center;
    @media (max-width: 650px) {
        
    }
  `;
  
  const SearchBarField = styled.input`
    display: flex;
    height: 30px;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    border: 2px solid rgb(216, 216, 216);
    width: 300px;
    @media (max-width:650px) {
        
    }
  `;

const SearchBar = (props) => {
    return (
        <SearchBarContent>
            <div>
                <SearchBarField type='text' placeholder="Search" onChange={props.handleSearch}/>
            </div>
        </SearchBarContent>
    )
}

export default SearchBar;