import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ErrorMessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message: string;
}
export function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <div
      className={`relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg${
        className ? ` ${className}` : ''
      }`}
    >
      <span className="absolute inset-y-0 left-0 flex items-center ml-4">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </span>
      <p className="ml-6">{message}</p>
    </div>
  );
}
