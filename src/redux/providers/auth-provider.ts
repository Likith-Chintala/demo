/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

type AuthProviderProps = { userManager: any; store: any; children: any };
export default function AuthProvider({
    userManager: manager,
    store,
    children,
}: AuthProviderProps): any {
    useEffect(() => {}, [manager, store]);
    return React.Children.only(children);
}
