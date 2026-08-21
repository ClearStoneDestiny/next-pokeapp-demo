"use client";

import { mergeClasses } from "@common/utils/mergeClasses";
import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
  type KeyboardEvent,
} from "react";
import { MdSearch } from "react-icons/md";

interface ISearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onSubmit"
> {
  showSearchIcon?: boolean;
  onSearch?: (value: string) => void;
  containerClassName?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, ISearchInputProps>(
  (
    {
      placeholder = "Search...",
      showSearchIcon = true,
      className,
      containerClassName,
      onSearch,
      onKeyDown,
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      forwardedRef,
      () => inputRef.current as HTMLInputElement,
    );

    const handleSearch = () => {
      if (inputRef.current) {
        onSearch?.(inputRef.current.value);
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      }
      onKeyDown?.(e);
    };

    return (
      <div className={mergeClasses("relative w-full", containerClassName)}>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className={mergeClasses(
            "w-full py-[12px] pl-[18px] bg-[#fffdf7] text-[15px] text-foreground font-semibold border-[3px] border-border-main rounded-full outline-none transition-all placeholder:text-muted-foreground/50",
            showSearchIcon ? "pr-[48px]" : "pr-[18px]",
            className,
          )}
          {...props}
        />

        {showSearchIcon && (
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center justify-center p-1 text-foreground/70 hover:text-foreground hover:scale-110 active:scale-95 transition-all cursor-pointer select-none"
            aria-label="Search"
          >
            <MdSearch size={22} />
          </button>
        )}
      </div>
    );
  },
);
