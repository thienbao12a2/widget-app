import { JsonLd } from "react-schemaorg";

export function Schema() {
	return (
		<JsonLd
			item={{
				"@context": "https://schema.org/",
				"@type": "Recipe",
				name: "Fried Chicken",
				image: [
					"https://recipesexample.com/images/fried-chicken-recipe/cover.jpg",
				],
				author: {
					"@type": "Organization",
					name: "Best Recipes",
				},
				datePublished: "2020-09-01",
				description:
					"Perfectly fried chicken with a crunchy, golden brown exterior and a tender, juicy bite.",
				prepTime: "PT10M",
				cookTime: "PT20M",
				totalTime: "PT30M",
				keywords: "fried chicken, chicken",
				recipeYield: "5",
				recipeCategory: "Food",
				recipeCuisine: "American",
				nutrition: {
					"@type": "NutritionInformation",
					calories: "500 calories",
				},
				recipeIngredient: [
					"vegetable oil/cooking oil",
					"flour",
					"chicken",
					"salt",
					"black pepper",
					"eggs",
					"bread crumbs",
				],
				recipeInstructions: [
					{
						"@type": "HowToStep",
						name: "Preheat the pan",
						text: "Pour oil into the pan and pre-heat.",
						url: "https://recipesexample.com/fried-chicken-recipe#step1",
						image: "https://recipesexample.com/images/fried-chicken-recipe/step1.jpg",
					},
					{
						"@type": "HowToStep",
						name: "Coat the chicken",
						text: "Mix the dry ingredients. Beat the eggs and whip them. Dip chicken slices into egg mixture before coating with flour mixture.",
						url: "https://recipesexample.com/fried-chicken-recipe#step2",
						image: "https://recipesexample.com/images/fried-chicken-recipe/step2.jpg",
					},
					{
						"@type": "HowToStep",
						name: "Fry the chicken",
						text: "Fry the chicken until golden brown.",
						url: "https://recipesexample.com/fried-chicken-recipe#step3",
						image: "https://recipesexample.com/images/fried-chicken-recipe/step3.jpg",
					},
					{
						"@type": "HowToStep",
						name: "Cool and enjoy.",
						text: "Set aside the fried chicken on paper towels or a drying rack. Allow to dry and cool. Enjoy.",
						url: "https://recipesexample.com/fried-chicken-recipe#step4",
						image: "https://recipesexample.com/images/fried-chicken-recipe/step4.jpg",
					},
				],
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "5",
					ratingCount: "12",
				},
				video: {
					"@type": "VideoObject",
					name: "How to make a Party Coffee Cake",
					description: "This is how you make a Party Coffee Cake.",
					thumbnailUrl: [
						"https://example.com/photos/1x1/photo.jpg",
						"https://example.com/photos/4x3/photo.jpg",
						"https://example.com/photos/16x9/photo.jpg",
					],
					contentUrl: "http://www.example.com/video123.mp4",
					embedUrl: "http://www.example.com/videoplayer?video=123",
					uploadDate: "2018-02-05T08:00:00+08:00",
					duration: "PT1M33S",
					interactionStatistic: {
						"@type": "InteractionCounter",
						interactionType: { "@type": "WatchAction" },
						userInteractionCount: 2347,
					},
					expires: "2019-02-05T08:00:00+08:00",
				},
			}}
		/>
	);
}
