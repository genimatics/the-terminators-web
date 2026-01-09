'use client';

import { Facebook, Linkedin } from 'lucide-react';

export default function SocialFollow() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8">
      <p className="text-lg text-muted-foreground">
        For more updates please follow
      </p>
      <div className="flex gap-4">
        <a
          href="https://web.facebook.com/theterminators.pak/?_rdc=1&_rdr#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-blue-700"
          aria-label="Follow on Facebook"
        >
          <Facebook className="h-5 w-5" />
          <span className="font-medium">Facebook</span>
        </a>
        <a
          href="linkedin.com/in/ahmed-zubair-siddiqui-70a24122"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-blue-800"
          aria-label="Follow on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
          <span className="font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
