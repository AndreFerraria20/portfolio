
import React, { ReactNode } from 'react';

interface SplitLayoutProps {
    div1Content: ReactNode;
    div2Content: ReactNode;
    divTitle?:ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ div1Content, div2Content,divTitle }) => {
    return (

        <div className="flex bg-primary   text-secundary">
            <div className="flex   ml-10  mr-32   flex-col bg-primary sticky h-screen  ">
                <div className="flex h-[61.5%] grow-0 shrink-0  items-end  " >{divTitle}</div>
                <div className=" flex  grow   ml-8 mt-5 mr-20">       {div1Content}
                </div>
            </div>

            <div className="w-[61.5%] flex  grow-0 shrink-0   bg-primary  min-h-screen	">
                <div className=" grow"> {div2Content}</div>
            </div>

        </div>


    );
};
export default SplitLayout;