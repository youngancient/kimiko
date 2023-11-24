import React, { ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return (
        <div className={`container p-8 mx-auto xl:px-0 ${className ?? ""}`}>
            {children}
        </div>
    );
};

export default Container;
