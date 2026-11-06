// Static image imports (.webp) need Next's image module types. next-env.d.ts provides them but is gitignored and
// generated only by `next build`/`next dev`, so CI's typecheck (which runs before the build) needs this reference.
/// <reference types="next/image-types/global" />
