import React from 'react';
import { ISHASHURL } from "../Routes/routeconfig";

const Anchor = ({href, children,  ...rest}:any) => (
    <a {...rest} href={ISHASHURL?"#"+href:href}>{children}</a>
);

export default Anchor;
