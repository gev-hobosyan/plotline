import { pgTable, serial, varchar, integer, boolean, timestamp, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const users = pgTable("users", {
	id: varchar("id").primaryKey().notNull(),
	username: varchar("username").unique().notNull(),
	email: varchar("email").unique().notNull(),
})

export const movies = pgTable("movies", {
	id: serial("id").primaryKey(),
	imdbId: varchar("imdb_id").notNull(),
	title: varchar("title").notNull(),
	userId: varchar("userId").notNull().references(() => users.id),
	usersDescription: text("users_description").default(""),
	collections: text("collections").array()
})

export const usersRelations = relations(users,
	({ many }) => ({
		movies: many(movies)
	})
)


export const moviesRelations = relations(movies,
	({ one }) => ({
		user: one(users, {
			fields: [movies.userId],
			references: [users.id],
		})
	})
)