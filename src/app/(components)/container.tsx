import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Container = ({ children }: CardProps) => {
    return (
        <div className="  flex justify-center dark:text-slate-300 text-slate-800 h-fit lg:h-96 w-full mx-4 mb-32">
            {children}
        </div>
    );
};

export default Container;