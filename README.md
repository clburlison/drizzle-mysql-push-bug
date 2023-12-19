# drizzle-mysql-push-bug

This demo repo is shows a reproducible error when using Drizzle Kit with a composite primary key. The schema was pulled straight from the [docs website](https://orm.drizzle.team/docs/indexes-constraints#composite-primary-key).

To install dependencies:

```bash
bun install
```

To run:

- Edit `drizzle.config.ts` > point to a validate database

```bash
bun run db:push
```
