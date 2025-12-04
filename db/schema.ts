import { pgTable, serial, varchar, integer, boolean, timestamp, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const users = pgTable("users", {
	id: varchar("id").primaryKey().notNull(),
	username: varchar("username").unique().notNull(),
	email: varchar("email").unique().notNull(),
})

export const categories = pgTable("categories", {
	id: serial("id").primaryKey(),
	userId: varchar("user_id").notNull().references(() => users.id),
	categoryName: varchar("category_name").notNull(),
	listName: varchar("list_name").notNull().default("mymovies"),
	movies: text("movies").array(),
})

export const usersRelations = relations(users,
	({ many }) => ({
		// movies: many(movies)
		// movieList: many(movies)
		categories: many(categories)
	})
)

export const categoriesRelations = relations(categories,
	({ one }) => ({
		user: one(users, {
			fields: [categories.userId],
			references: [users.id]
		})
	})
)

// export const movieListsRelations = relations(movies,
// 	({ one }) => ({
// 		user: one(users, {
// 			fields: [movies.userId],
// 			references: [users.id]
// 		})
// 	})
// )



// export const moviesRelations = relations(movies,
// 	({ one }) => ({
// 		user: one(users, {
// 			fields: [movies.userId],
// 			references: [users.id],
// 		})
// 	})
// )

// export const movies = pgTable("movies", {
// 	id: serial("id").primaryKey(),
// 	imdbId: varchar("imdb_id").notNull(),
// 	title: varchar("title").notNull(),
// 	userId: varchar("user_id").notNull().references(() => users.id),
// 	usersDescription: text("users_description").default(""),
// 	collections: text("collections").array()
// })

// export const movies = pgTable("movies", {
// 	id: serial("id").primaryKey(),
// 	userId: varchar("user_id").notNull().references(() => users.id),
// 	imdbId: varchar("imdb_id").notNull(),
// 	categories: text("categories").array()
// })