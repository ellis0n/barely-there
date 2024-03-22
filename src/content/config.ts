import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		username: reference('authors'),
		relatedPosts: z.array(reference("posts")),
		draft: z.boolean().optional(),
	}),
});

const authors = defineCollection({
	type: "content",
	schema: z.object({
		username: z.string(),
		firstname: z.string(),
		lastname: z.string(),
		email: z.string(),
		github: z.string().url().optional(),
		twitter: z.string().url(),
		instagram: z.string().url(),
		avatar: z.string(),
		authoredPosts: z.array(reference("posts")),
	}),
});

const releases = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			artist: z.string(),
			albumTitle: z.string(),
			artwork: image(),
			release: z.date(),
			id: z.string(),
			tags: z.string(),
			video: z.string().url().optional(),
			draft: z.boolean().optional(),
			bandcamp: z.string().url().optional(),
			bandcampEmbed: z.string().url().optional(),
			spotify: z.string().url().optional(),
			appleMusic: z.string().url().optional(),
			soundcloud: z.string().url().optional(),
			youtube: z.string().url().optional(),
		}),
});

const shows = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			featured: z.boolean().optional(),
			title: z.string(),
			venue: z.string().optional(),
			date: z.date(),
			poster: image(),
			draft: z.boolean().optional(),
			tickets: z.string().url().optional(),
			tags: z.string().optional(),
		}),
});

export const collections = { posts, authors, releases, shows };
