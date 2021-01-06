import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		subgroups: [
			{
				"name": "EMPIRISCHE THERAPIE"
			},
			{
				"name": "GERICHTE THERAPIE"
			},
			{
				"name": "MIDDELEN"
			},
			{
				"name": "PROFYLAXE"
			},
			{
				"name": "TDM"
			}
		],
		topics: [
			{
				"name": "ABDOMINAAL"
			},
			{
				"name": "CARDIOVASCULAIR"
			},
			{
				"name": "CENTRAAL ZENUWSTELSEL"
			},
			{
				"name": "GISTEN EN SCHIMMELS"
			},
			{
				"name": "HUID EN WEKE DELEN"
			},
			{
				"name": "NEUS-KEEL-OOR"
			},
			{
				"name": "NEUTROPENE KOORTS"
			},
			{
				"name": "OOG"
			},
			{
				"name": "ORTHOPEDIE"
			},
			{
				"name": "REISGENEESKUNDE"
			},
			{
				"name": "RESPIRATOIR"
			},
			{
				"name": "SEPSIS"
			},
			{
				"name": "URINAIR"
			},
			{
				"name": "UROGENITAAL EN SEKSUEEL OVERDRAAGBARE INFECTIES"
			}
		],
		aandoeningen: [
			{
				"antibiotica": [
					"Ceftriaxone",
					"Doxycycline"
				],
				"name": "Arthiritis"
			},
			{
				"antibiotica": [
					"Ceftriaxone",
					"Doxycycline"
				],
				"name": "spontane bacteriële peritonitis"
			},
			{
				"antibiotica": [
					"Ceftriaxone",
					"Doxycycline"
				],
				"name": "secundaire peritonitis"
			},
			{
				"antibiotica": [
					"Linezolid"
				],
				"name": "Aandoening 1"
			},
			{
				"antibiotica": [
					"Ceftriaxone"
				],
				"name": "Aandoening 2"
			},
			{
				"antibiotica": [
					"Ceftobiprole"
				],
				"name": "Aandoening 3"
			}
			
		],
		aandoeninggroepen: [
			{
				"name": "Arthiritis",
				"aandoeningen": [
					"Arthiritis"
				],
				"subgroups": [
					"EMPIRISCHE THERAPIE"
				],
				"topics": [
					"ABDOMINAAL"
				],
				"doelgroep": "volwassenen"
			},
			{
				"name": "Peritonitis",
				"aandoeningen": [
					"secundaire peritonitis",
					"spontane bacteriële peronitis"
				],
				"subgroups": [
					"empirische therapie"
				],
				"topics": [
					"Abdominaal"
				],
				"doelgroep": "volwassenen"
			},
			{
				"name": "Peritonitis kinderen",
				"aandoeningen": [
					"secundaire peritonitis",
					"spontane bacteriële peronitis"
				],
				"subgroups": [
					"EMPIRISCHE THERAPIE"
				],
				"topics": [
					"ABDOMINAAL"
				],
				"doelgroep": "kinderen"
			}
		],
		antibioticas: [
			{
				"dosis": "12gr Oraal 2 weken",
				"name": "Ceftriaxone",
				"remark": "opmerking"
			},
			{
				"dosis": "1gr Oraal 1 week",
				"name": "Doxycycline",
				"remark": "opmerking"
			},
			{
				"dosis": "1gr Oraal 1 week",
				"name": "Doxycycline",
				"remark": "opmerking"
			},
			{
				"name": "Vancomycin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Teicoplanin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Linezolid",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Daptomycin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Trimethoprim",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Sulfamethoxazole",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Doxycycline",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Ceftobiprole",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Ceftaroline",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Clindamycin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Dalbavancin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Fusidic acid",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Mupirocin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Omadacycline",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Oritavancin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Tedizolid",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Telavancin",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			},
			{
				"name": "Tigecycline",
				"dosis": "1gr Oraal 1 week",
				"remark": "opmerking"
			}
		],

	}
});

export default app;