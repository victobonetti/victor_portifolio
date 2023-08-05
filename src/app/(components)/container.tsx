import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Container = ({ children }: CardProps) => {
    return (
        <div className="flex justify-center dark:text-slate-300 text-slate-800 h-fit w-screen mb-8">
            {children}
        </div>
    );
};

export default Container;