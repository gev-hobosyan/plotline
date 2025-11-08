CREATE TABLE "movies" (
	"id" serial PRIMARY KEY NOT NULL,
	"imdb_id" varchar NOT NULL,
	"title" varchar NOT NULL,
	"userId" varchar NOT NULL,
	"users_description" text DEFAULT '',
	"collections" text[]
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "movies" ADD CONSTRAINT "movies_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;