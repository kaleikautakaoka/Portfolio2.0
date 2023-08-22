import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const flowContext = createContext();

const FlowProvider = ({ children }) => {
    const [flowName, setFlowName] = useState('light')

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setFlowName(darkMediaQuery.matches ? 'dark' : 'light'); 
        darkMediaQuery.addEventListener('change', (e) => {

            setFlowName(e.matches ? 'dark' : 'light');
        }
        );
    }
    , []);

    const toggleFlow = () => {
        const name = flowName === 'light' ? 'dark' : 'light';
        localStorage.setItem('flowName', name); 
        setFlowName(name);
    }

    return (
        <flowContext.Provider value={{flowName, toggleFlow}}>
            {children}
        </flowContext.Provider>
    );
}

FlowProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { flowContext, FlowProvider };
