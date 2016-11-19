# Grouper


## Preperations

```npm install sass-loader node-sass json-loader webpack --save-dev```

```npm install webpack-dev-server -g```

# run on dev machine
```webpack-dev-server --progress --colors --inline```


``json
[
	{
		"name": "yoga tlv",
		"description": "This group is about yoga",
		"image": "./data/images/yoga700x420.jpg",
		"tags": "yoga,sports,health,meditation",
		"targetAudience": "spiritual,adults,single",
		"ageMin": 25,
		"ageMax": 55,
		"participantsMin": 5,
		"participantsMax": 15,
		"skillLevel": 0-4,
		"schedule": {
			"type": "weekly|monthly|daily|biweekly|bimonthly",
			"frames": [ 
				{
					"day": 1, 
					"frame": "morning|noon|afternoon|evening",
					"duration": 1.5
				}
			]
		},
		"location": {
			"name": "Club58",
			"coordinates": "lon:lat"  // optional
		},
		"price": 0,
		"survey": [    //array of max 3 questions
			"how fit r u?",
			"how many years you've practiced Yoga?"
		]
	}
]
``