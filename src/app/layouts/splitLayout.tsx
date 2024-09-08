
import React, { ReactNode } from 'react';

interface SplitLayoutProps {
    div1Content: ReactNode;
    div2Content: ReactNode;
    divTitle?:ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ div1Content, div2Content,divTitle }) => {
    return (

        <div className="flex bg-primary   text-secundary">
            <div className="flex grow-0  ml-10  mr-32   flex-col bg-primary sticky h-screen  ">
                <div className="flex-ratio grow items-end">{divTitle}</div>
                <div className=" grow ml-8 mt-5 mr-20">       {div1Content}
                </div>
            </div>

            <div className="flex-ratio flex grow   bg-primary  min-h-screen	 ">
                <div className=" grow"> {div2Content}</div>
            </div>

        </div>


    );
};
export default SplitLayout;