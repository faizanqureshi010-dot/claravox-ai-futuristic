import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Extracted directly from LeadForm.tsx's existing (and already good)
 * input styling, so every new form on the site — starting with
 * ContactForm — shares one visual and validation-state language instead
 * of each form re-deriving its own input classes. LeadForm itself is not
 * refactored to use these yet: it's a working, revenue-critical component
 * and the Website Audit's priority fix for it is the missing backend
 * connection, not a styling refactor. Migrating it to these primitives is
 * a safe follow-up once that fix ships (see the component summary).
 */
export const fieldInputClasses =
  "w-full rounded-md border border-mist bg-white px-4 py-3 text-base text-ink placeholder:text-charcoal/40 focus:border-teal-deep focus:outline-none focus:ring-3 focus:ring-teal-deep/25 disabled:opacity-40 disabled:cursor-not-allowed";

export const fieldLabelClasses = "mb-1.5 block text-sm font-medium text-ink";

type FieldWrapperProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
};

function FieldWrapper({ id, label, optional, error, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={id} className={fieldLabelClasses}>
        {label} {optional && <span className="font-normal text-charcoal/60">(optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  optional?: boolean;
};

export function TextField({ label, error, optional, id, ...rest }: TextFieldProps) {
  return (
    <FieldWrapper id={id!} label={label} optional={optional} error={error}>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        className={`${fieldInputClasses} ${error ? "border-error focus:border-error focus:ring-error/25" : ""}`}
        {...rest}
      />
    </FieldWrapper>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  optional?: boolean;
};

export function TextareaField({ label, error, optional, id, ...rest }: TextareaFieldProps) {
  return (
    <FieldWrapper id={id!} label={label} optional={optional} error={error}>
      <textarea id={id} className={`${fieldInputClasses} resize-none`} {...rest} />
    </FieldWrapper>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
};

export function SelectField({ label, error, optional, id, children, ...rest }: SelectFieldProps) {
  return (
    <FieldWrapper id={id!} label={label} optional={optional} error={error}>
      <div className="relative">
        <select id={id} className={`${fieldInputClasses} appearance-none pr-10`} {...rest}>
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/60"
          aria-hidden="true"
        />
      </div>
    </FieldWrapper>
  );
}

type CheckboxFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function CheckboxField({ label, id, ...rest }: CheckboxFieldProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-2.5 text-sm text-ink">
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-mist text-teal-deep focus:ring-2 focus:ring-teal-deep/40"
        {...rest}
      />
      {label}
    </label>
  );
}

type RadioFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function RadioField({ label, id, ...rest }: RadioFieldProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink">
      <input
        id={id}
        type="radio"
        className="h-4 w-4 shrink-0 border-mist text-teal-deep focus:ring-2 focus:ring-teal-deep/40"
        {...rest}
      />
      {label}
    </label>
  );
}
