import React from 'react';
import { TreePine, Wrench, Clock } from 'lucide-react';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-bg-app flex flex-col items-center justify-center px-6">
      {/* Branding */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
          <TreePine size={20} className="text-white" strokeWidth={2} />
        </div>
        <span className="text-xl font-bold text-text-primary tracking-tight font-sora">
          TreeTribe
        </span>
      </div>

      {/* Main card */}
      <div className="w-full max-w-sm bg-bg-card rounded-2xl border border-border-default shadow-sm p-8 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mx-auto mb-5 w-16 h-16 rounded-2xl bg-primary/10">
          <Wrench size={28} className="text-primary" strokeWidth={1.75} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-text-primary mb-3 font-sora leading-tight">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-7">
          We're making some improvements to bring you a better experience.
          The app will be back shortly.
        </p>

        {/* Status row */}
        <div className="flex items-center justify-center gap-2 bg-bg-app rounded-xl px-4 py-3 border border-border-default">
          <Clock size={15} className="text-text-muted flex-shrink-0" />
          <span className="text-text-muted text-xs font-medium">
            Expected downtime: a few hours
          </span>
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-8 text-text-muted text-xs text-center">
        Thank you for your patience.
      </p>
    </div>
  );
}
