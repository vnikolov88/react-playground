import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  
    
    return (
        <div className="tabs items-center justify-center">
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/people">People</CustomLink>
        </div>
      )
    }
    
    function CustomLink({to, children } : Pagination)  {
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname+"/*" })
    
      return (
        <a className={isActive != null ? "tab tab-bordered tab-active" : "tab tab-bordered"} href={to}>
          {children}
        </a>
      )
    }

    type Pagination = {
        to: string;
        children: string
    };