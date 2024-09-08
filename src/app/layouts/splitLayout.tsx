
import React, { ReactNode } from 'react';

interface SplitLayoutProps {
    div1Content: ReactNode;
    div2Content: ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ div1Content, div2Content }) => {
    return (

        <div className="flex w-screen h-screen bg-primary text-secundary">
            <aside className="flex grow pb-28 pr-20">
                {div1Content}
            </aside >
            <div className="flex-ratio flex grow    ">
                {div2Content}
            </div>
        </div>

    );
};
export default SplitLayout;