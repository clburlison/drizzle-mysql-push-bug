import { int, text, primaryKey, mysqlTable } from "drizzle-orm/mysql-core";
export const user = mysqlTable("user", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name"),
});
export const book = mysqlTable("book", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name"),
});
export const booksToAuthors = mysqlTable("books_to_authors", {
  authorId: int("author_id"),
  bookId: int("book_id"),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.bookId, table.authorId] }),
    pkWithCustomName: primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] }),
  };
});