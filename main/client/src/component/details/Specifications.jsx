import React from 'react';
import parse from 'html-react-parser';

const Specifications = (props) => {
    return (
        <>
            {
                props.data[0]?(
                    parse(props.data[0]['details']['des'])
                ):("")
            }
        </>
    );
};

export default Specifications;