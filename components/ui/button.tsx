import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0', { variants: { variant: { default:'bg-primary text-primary-foreground',primary:'bg-[var(--signal)] text-[var(--ink)] hover:bg-white',outline:'border border-white/30 bg-white/5 text-white hover:border-[var(--signal)]',dark:'bg-[var(--ink)] text-white hover:bg-[var(--purple)]',destructive:'bg-red-600 text-white',secondary:'bg-white/10 text-white',ghost:'hover:bg-white/10',link:'underline-offset-4 hover:underline' }, size:{default:'h-12 px-6',xs:'h-7 px-2.5 text-xs',sm:'h-9 px-4',lg:'h-14 px-8',icon:'size-10','icon-xs':'size-7','icon-sm':'size-8','icon-lg':'size-12'} }, defaultVariants:{variant:'default',size:'default'} });
export type ButtonProps = useRender.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { nativeButton?: boolean };
export function Button({ className,variant,size='default',render,nativeButton=true,...props }:ButtonProps){return useRender({defaultTagName:'button',props:mergeProps<'button'>({type:nativeButton?'button':undefined,className:cn(buttonVariants({variant,size,className}))},props),render,state:{slot:'button',variant,size}})}
export { buttonVariants };
