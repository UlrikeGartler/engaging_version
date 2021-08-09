import React from "react";
import { BeatLoader } from "react-spinners";
import { css } from '@emotion/react';

const loaderCSS = css`
    display: block;
    margin: 0 auto;
    border-color:red;
`  

export function BeatLoader(props){

    return (
        <div>
            <BeatLoader css={loaderCSS}></BeatLoader>
        </div>

    );

}