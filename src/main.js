import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		subgroups: ["EMPIRische THERAPIE",
        "GERICHTE THERAPIE",
        "MIDdelEN",
        "PROFYLAXE",
        "TDM"],
      topics: ["ABDOMINAAL",
	  "CARDIOVASCULAIR",
	  "CENTRAAL ZENUWSTELSEL",
	  "GISTEN EN SCHIMMELS",
	  "HUID EN WEKE DELEN",
	  "NEUS-KEEL-OOR",
	  "NEUTROPENE KOORTS",
	  "OOG",
	  "ORTHOPEDIE",
	  "REISGENEESKUNDE",
	  "RESPIRATOIR",
	  "SEPSIS",
	  "URINAIR",
	  "UROGENITAAL EN SEKSUEEL OVERDRAAGBARE INFECTIES"],
	  
	}
});

export default app;