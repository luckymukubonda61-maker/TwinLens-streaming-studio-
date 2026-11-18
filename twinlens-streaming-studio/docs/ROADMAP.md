# TwinLens implementation roadmap

## Foundation (included)
- [x] Brand landing page
- [x] Registration and login foundation
- [x] Signed session cookie
- [x] Protected dashboard
- [x] Broadcast workspace records
- [x] PostgreSQL schema
- [x] Render Blueprint

## Next engineering milestones
1. Harden identity: email verification, password reset, rate limiting, CSRF/origin checks, MFA.
2. Studio media: LiveKit rooms, camera/mic device selection, guest tokens, screen share, scene composition.
3. Broadcast egress: RTMP destinations, OAuth integrations, stream health and retries.
4. Recording: cloud egress, object storage, signed playback/download URLs.
5. Media Lab: upload pipeline, FFmpeg workers, editing jobs, exports.
6. AI: transcription, captions, clip suggestions and usage metering.
7. Audience: comments, polls, moderation and destination capability adapters.
8. Business: organizations, roles, plans, billing, credits and invoices.
9. Operations: observability, backups, load tests, incident procedures and security review.

## Release principle
Do not mark a capability complete until it has integration tests against the real provider and has passed browser and failure-mode testing.
