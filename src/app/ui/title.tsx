import Link from "next/link";
import React from "react";

interface TitleProps {
    title: string;
    href: string;
    subtitle?: string;
    classes?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, href, classes }) => {
    return (
        <div  className={`flex flex-col flex-1 ${classes}`}>
            <Link href={href} className="title  leading-none font-gambetta uppercase ">{title}</Link>

            {subtitle && <span className="subtitle text-primary-500  leading-none" > - {subtitle}</span>}
        </div>
    );
};

export default Title;