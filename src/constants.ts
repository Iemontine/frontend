import { artPage0, artPage1, artPage2, artPage3, artPage4 } from './ascii/art';

const PAGE_CONTENT = [
	{ id: 0, content: "Portal 2 is a 2011 puzzle-platform game developed by Valve for Windows, Mac OS X, Linux, PlayStation 3, and Xbox 360. The digital PC version is distributed online by Valve's Steam service, while all retail editions were distributed by Electronic Arts. A port for the Nintendo Switch was included as part of Portal: Companion Collection." },
	{ id: 1, content: "Portal 2 is a first-person perspective puzzle game. The player takes the role of Chell in the single-player campaign, as one of two robots—Atlas and P-Body—in the cooperative campaign, or as a simplistic humanoid icon in community-developed puzzles. Characters can withstand limited damage but will die after sustained injury.[2][3] The goal of both campaigns is to explore the Aperture Science Laboratory—a complicated, malleable mechanized maze. While some parts of the game takes place in modular test chambers with clearly defined entrances and exits, other parts occur in behind-the-scenes areas where the objective is less clear." },
	{ id: 2, content: "Like the original Portal (2007), players solve puzzles by placing portals and teleporting between them. Portal 2 adds features including tractor beams, lasers, light bridges, and paint-like gels that alter player movement or allow portals to be placed on any surface. In the single-player campaign, players control Chell, who navigates the dilapidated Aperture Science Enrichment Center during its reconstruction by the supercomputer GLaDOS (Ellen McLain); new characters include robot Wheatley (Stephen Merchant) and Aperture founder Cave Johnson (J. K. Simmons). In the new cooperative mode, players solve puzzles together as robots Atlas and P-Body (both voiced by Dee Bradley Baker). Jonathan Coulton and the National produced songs for the game." },
	{ id: 3, content: "In the cooperative campaign, two players can use the same console with a split screen, or can use a separate computer or console; Windows, Mac OS X, and PlayStation 3 users can play with each other regardless of platform.[15][16] Both player-characters are robots equipped with independent portal guns, a portal pair placed by either player is usable by both.[2][8][17] Most chambers lack strict structure, and require players to use both sets of portals for laser or funnel redirection, launches, and other maneuvers.[18] The game provides voice communication between players, and online players can temporarily enter a split-screen view to help coordinate actions.[17] Players can \"ping\" to draw the other player's attention to walls or objects, start countdown timers for synchronized actions, and perform joint gestures such as waving or hugging.[2][7][18] The game tracks which chambers each player has completed and allows players to replay chambers they have completed with new partners." },
	{ id: 4, content: "Several critics wrote that Portal 2 excels in teaching the player to solve puzzles; in a review for the New York Times, Seth Schiesel wrote, \"Somewhere out there an innovative, dynamic high school physics teacher will use Portal 2 as the linchpin of an entire series of lessons and will immediately become the most important science teacher those lucky students have ever had.\"[168] Mathematics and science teachers wrote e-mails to Valve to tell them how they had included Portal in their classroom lessons as part of a project to promote the \"gamification of learning\"." },
];

// TODO: add/ensure support for per-word styling
// const PAGE_CONTENT = [
//   {
//     id: 0,
//     content: [
//       { type: 'header', text: "Portal 2 Overview", style: { color: '#FFFFFF', fontSize: '24px' } },
//       { type: 'p', text: "Portal 2 is a 2011 puzzle-platform game developed by Valve for Windows, Mac OS X, Linux, PlayStation 3, and Xbox 360. The digital PC version is distributed online by Valve's Steam service, while all retail editions were distributed by Electronic Arts. A port for the Nintendo Switch was included as part of Portal: Companion Collection.", style: { color: '#CCCCCC' } }
//     ]
//   },
//   {
//     id: 1,
//     content: [
//       { type: 'header', text: "Gameplay", style: { color: '#FFFFFF', fontSize: '24px' } },
//       { type: 'p', text: "Portal 2 is a first-person perspective puzzle game. The player takes the role of Chell in the single-player campaign, as one of two robots—Atlas and P-Body—in the cooperative campaign, or as a simplistic humanoid icon in community-developed puzzles. Characters can withstand limited damage but will die after sustained injury. The goal of both campaigns is to explore the Aperture Science Laboratory—a complicated, malleable mechanized maze. While some parts of the game takes place in modular test chambers with clearly defined entrances and exits, other parts occur in behind-the-scenes areas where the objective is less clear.", style: { color: '#CCCCCC' } }
//     ]
// 	},
//     {
//     id: 2,
//     content: [
//       { type: 'header', text: "Mechanics", style: { color: '#FFFFFF', fontSize: '24px' } },
//       { type: 'p', text: "Like the original Portal (2007), players solve puzzles by placing portals and teleporting between them. Portal 2 adds features including tractor beams, lasers, light bridges, and paint-like gels that alter player movement or allow portals to be placed on any surface. In the single-player campaign, players control Chell, who navigates the dilapidated Aperture Science Enrichment Center during its reconstruction by the supercomputer GLaDOS (Ellen McLain); new characters include robot Wheatley (Stephen Merchant) and Aperture founder Cave Johnson (J. K. Simmons). In the new cooperative mode, players solve puzzles together as robots Atlas and P-Body (both voiced by Dee Bradley Baker). Jonathan Coulton and the National produced songs for the game.", style: { color: '#CCCCCC' } }
//     ]
// 	},
// 	  {
//     id: 3,
//     content: [
//       { type: 'header', text: "Coop", style: { color: '#FFFFFF', fontSize: '24px' } },
//       { type: 'p', text: "In the cooperative campaign, two players can use the same console with a split screen, or can use a separate computer or console; Windows, Mac OS X, and PlayStation 3 users can play with each other regardless of platform.[15][16] Both player-characters are robots equipped with independent portal guns, a portal pair placed by either player is usable by both.[2][8][17] Most chambers lack strict structure, and require players to use both sets of portals for laser or funnel redirection, launches, and other maneuvers.[18] The game provides voice communication between players, and online players can temporarily enter a split-screen view to help coordinate actions.[17] Players can \"ping\" to draw the other player's attention to walls or objects, start countdown timers for synchronized actions, and perform joint gestures such as waving or hugging.[2][7][18] The game tracks which chambers each player has completed and allows players to replay chambers they have completed with new partners.", style: { color: '#CCCCCC' } }
//     ]
// 	},
// 	{
//     id: 4,
//     content: [
//       { type: 'header', text: "Gameplay", style: { color: '#FFFFFF', fontSize: '24px' } },
//       { type: 'p', text: "Several critics wrote that Portal 2 excels in teaching the player to solve puzzles; in a review for the New York Times, Seth Schiesel wrote, \"Somewhere out there an innovative, dynamic high school physics teacher will use Portal 2 as the linchpin of an entire series of lessons and will immediately become the most important science teacher those lucky students have ever had.\"[168] Mathematics and science teachers wrote e-mails to Valve to tell them how they had included Portal in their classroom lessons as part of a project to promote the \"gamification of learning\".", style: { color: '#CCCCCC' } }
//     ]
//   },
// ];

const PAGE_ASCII_ART = [
	{ id: 0, content: artPage0 },
	{ id: 1, content: artPage1 },
	{ id: 2, content: artPage2 },
	{ id: 3, content: artPage3 },
	{ id: 4, content: artPage4 },
];

const TYPING_SPEED = 1;                 // Delay between typing each character in ms
const DELETE_SPEED = 1;                 // Speed of deleting in ms
const SCROLL_COOLDOWN = 300;            // Small cooldown between scroll events
const BACKGROUND_COLOR = '#000000';
const INTERFACE_COLOR = '#4fae9b';

export { PAGE_CONTENT, PAGE_ASCII_ART, TYPING_SPEED, DELETE_SPEED, SCROLL_COOLDOWN, BACKGROUND_COLOR, INTERFACE_COLOR };

