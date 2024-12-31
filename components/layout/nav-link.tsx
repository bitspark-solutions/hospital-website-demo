"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      className={cn("text-muted-foreground hover:text-foreground transition-colors", className)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}