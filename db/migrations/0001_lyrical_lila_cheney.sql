CREATE TABLE "movie_lists" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"imdb_id" varchar NOT NULL,
	"categories" text[]
);
--> statement-breakpoint
DROP TABLE "movies" CASCADE;--> statement-breakpoint
ALTER TABLE "movie_lists" ADD CONSTRAINT "movie_lists_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;