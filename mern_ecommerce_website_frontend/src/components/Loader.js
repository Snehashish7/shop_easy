import React from 'react'
import { Spinner } from 'react-bootstrap'
//Spinners can be used to show the loading state in projects.
const Loader = () => {
    return (
        <Spinner animation='border' variant="primary" role='status' style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block',
        }}>
            <span className ='sr-only'>Loading...</span>
        </Spinner>
    )
}
/*According to the Bootstrap documentation, the sr-only class is used to hide information 
that is intended only for screen readers from the layout of a rendered page.

If you do not include a label for every input, screen readers may have trouble with the 
forms. For such inline forms, you can hide labels with the sr-only class.

You must always consider screen readers for accessibility purposes. Usage of this class
will hide the element, and thus, you won’t see a visual difference. */
export default Loader