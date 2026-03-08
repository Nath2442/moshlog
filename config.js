// ╔══════════════════════════════════════════════════════════════╗
// ║          NAKATOMI CORPORATION — TERMINAL CONFIG             ║
// ║                                                              ║
// ║  Edit this file to set up your terminals and data logs.      ║
// ║  After editing, upload/push to your host and tell players    ║
// ║  to refresh. Use warden.html for a visual editor.            ║
// ╚══════════════════════════════════════════════════════════════╝
//
// HOW IT WORKS:
// - Players access terminals via URL: yoursite.com/?t=TERMINAL_KEY
// - Example: yoursite.com/?t=medbay  or  yoursite.com/?t=bridge
// - If no ?t= is given, the "default" terminal loads.
//
// ACCESS LEVELS (lowest to highest):
//   GENERAL → MEDICAL → SCIENCE → SECURITY → COMMAND
//   A terminal with MEDICAL access can see GENERAL + MEDICAL files.
//
// LOG TYPES: "text", "table", "ascii"
// PASSWORD: set a string to require a password, or null for no lock.

const TERMINAL_CONFIG = {

  // ── GLOBAL SETTINGS ──────────────────────────────────
  corporationName: "NAKATOMI CORPORATION",
  defaultVersion: "v7.03.1",
  defaultBootMessages: [
    "BIOS CHECK............OK",
    "MEMORY TEST...........4096K OK",
    "DRIVE A:..............OK",
    "NETWORK LINK..........ACTIVE",
    "SECURITY PROTOCOL.....ENABLED",
    "LOADING TERMINAL OS...",
  ],

  // ── TERMINAL PROFILES ────────────────────────────────
  // Each key here is a terminal ID used in the URL: ?t=KEY
  terminals: {

    // ── DEFAULT TERMINAL ──
    // Accessed via: yoursite.com/ or yoursite.com/?t=default
    "default": {
      name: "DECK TERMINAL 01",
      accessLevel: "GENERAL",
      // Optional overrides (remove to use global defaults):
      // version: "v7.03.1",
      // bootMessages: ["CUSTOM BOOT LINE..."],
      logs: [
        {
          filename: "crew_manifest.dat",
          title: "CREW MANIFEST",
          category: "PERSONNEL",
          accessLevel: "GENERAL",
          password: null,
          type: "table",
          content:
`CREW MANIFEST — ACTIVE ROSTER
═══════════════════════════════════════════════
 ID      NAME              ROLE          STATUS
═══════════════════════════════════════════════
 001     CHEN, M.          CAPTAIN       ACTIVE
 002     VASQUEZ, R.       PILOT         ACTIVE
 003     OKAFOR, D.        ENGINEER      ACTIVE
 004     PARK, S.          MEDIC         ACTIVE
 005     JOHANSSEN, E.     SCIENTIST     MIA
 006     AL-RASHID, K.     SECURITY      ACTIVE
═══════════════════════════════════════════════
 TOTAL: 6 | ACTIVE: 5 | MIA: 1`
        },
        {
          filename: "captains_log_047.log",
          title: "CAPTAIN'S LOG #047",
          category: "PERSONNEL",
          accessLevel: "GENERAL",
          password: null,
          type: "text",
          content:
`CAPTAIN'S LOG — ENTRY 047
DATE: 2348.127

We've been drifting for six days now since the
drive malfunction. Crew morale is holding but
JOHANSSEN still hasn't been found. VASQUEZ swears
she heard tapping from behind the bulkhead on
deck 3 last night. I told her it was the pipes.

I don't believe that anymore.

Rations for 14 days. If the beacon is working,
someone should find us.

If anyone reads this — don't open cargo bay 4.

— CHEN, M. (CAPTAIN)`
        },
        {
          filename: "deck_map.dat",
          title: "DECK MAP — LEVEL 3",
          category: "NAVIGATION",
          accessLevel: "GENERAL",
          password: null,
          type: "ascii",
          content:
`DECK 3 — FLOOR PLAN

    ┌─────────────────────────────────────┐
    │  CARGO    │         │    CREW       │
    │  BAY 4    │  MAIN   │    QUARTERS   │
    │  [SEALED] │  CORR.  │               │
    │           │         │  ┌──┐┌──┐┌──┐ │
    ├───────────┤         │  │01││02││03│ │
    │           │         │  └──┘└──┘└──┘ │
    │  ENGINE   │         │  ┌──┐┌──┐┌──┐ │
    │  ROOM     ├────┬────┤  │04││05││06│ │
    │           │LIFT│MED │  └──┘└──┘└──┘ │
    │           │    │BAY │               │
    ├───────────┴────┴────┴───────────────┤
    │           BRIDGE / COMMAND           │
    └─────────────────────────────────────┘

    [X] = SEALED    [!] = DAMAGE REPORTED`
        },
      ],
    },

    // ── MEDBAY TERMINAL ──
    // Accessed via: yoursite.com/?t=medbay
    "medbay": {
      name: "MED BAY TERMINAL",
      accessLevel: "MEDICAL",
      logs: [
        {
          filename: "crew_manifest.dat",
          title: "CREW MANIFEST",
          category: "PERSONNEL",
          accessLevel: "GENERAL",
          password: null,
          type: "table",
          content:
`CREW MANIFEST — ACTIVE ROSTER
═══════════════════════════════════════════════
 ID      NAME              ROLE          STATUS
═══════════════════════════════════════════════
 001     CHEN, M.          CAPTAIN       ACTIVE
 002     VASQUEZ, R.       PILOT         ACTIVE
 003     OKAFOR, D.        ENGINEER      ACTIVE
 004     PARK, S.          MEDIC         ACTIVE
 005     JOHANSSEN, E.     SCIENTIST     MIA
 006     AL-RASHID, K.     SECURITY      ACTIVE
═══════════════════════════════════════════════
 TOTAL: 6 | ACTIVE: 5 | MIA: 1`
        },
        {
          filename: "med_report_019.log",
          title: "MEDICAL REPORT #019",
          category: "MEDICAL",
          accessLevel: "MEDICAL",
          password: null,
          type: "text",
          content:
`MEDICAL OFFICER'S REPORT — #019
DATE: 2348.124
OFFICER: PARK, S.

PATIENT: JOHANSSEN, E.
COMPLAINT: Insomnia, visual disturbances,
           reported "seeing geometry" in the
           dark.

NOTES: Third visit this cycle. Prescribed
standard sedatives. Brain scan shows unusual
activity in the temporal lobe — patterns I
haven't seen before. Forwarding to NAKATOMI
MEDICAL DIVISION for review.

UPDATE: Patient did not return for follow-up.
Current status: MIA as of 2348.125.

— PARK, S. (MEDICAL OFFICER)`
        },
      ],
    },

    // ── SECURITY TERMINAL ──
    // Accessed via: yoursite.com/?t=security
    "security": {
      name: "SECURITY STATION ALPHA",
      accessLevel: "SECURITY",
      logs: [
        {
          filename: "cargo_bay_4.dat",
          title: "CARGO BAY 4 — SEALED",
          category: "SECURITY",
          accessLevel: "SECURITY",
          password: "PROMETHEUS",
          type: "text",
          content:
`██████████████████████████████████████████
█  CLASSIFIED — NAKATOMI CORP EYES ONLY  █
██████████████████████████████████████████

CARGO MANIFEST — BAY 4
ITEM: SPECIMEN CONTAINER (CRYO)
ORIGIN: LV-426 SURVEY SITE
CLASS: BIOHAZARD LEVEL 5

CONTAINMENT STATUS: ██████ COMPROMISED
LAST SEAL CHECK: 2348.121
CURRENT SEAL STATUS: UNKNOWN

NOTE FROM SCIENCE DIVISION:
"Do not attempt to interface with specimen.
Do not expose to temperatures above -40C.
Do not look directly at it if container is
breached. It learns from observation."

AUTHORIZATION: DIR. TANAKA, NAKATOMI R&D
CLEARANCE: BLACK LEVEL`
        },
        {
          filename: "security_alert.log",
          title: "SECURITY ALERT — PRIORITY",
          category: "SECURITY",
          accessLevel: "SECURITY",
          password: null,
          type: "text",
          content:
`╔══════════════════════════════════════╗
║  PRIORITY SECURITY ALERT            ║
║  AUTOMATED NOTIFICATION             ║
╚══════════════════════════════════════╝

TIMESTAMP: 2348.125.0347
EVENT: Unauthorized access — Cargo Bay 4
DETAIL: Internal seal breach detected.
        No crew badge registered at door.
        Motion sensors triggered in bay.
        No visual confirmation (cam offline).

ACTION TAKEN: Bay sealed automatically.
OVERRIDE REQUIRED: COMMAND level clearance.

— AUTOMATED SECURITY SYSTEM`
        },
      ],
    },

    // ── ADD MORE TERMINALS BELOW ──
    // Copy a block above, change the key and contents.
    // Example:
    //
    // "bridge": {
    //   name: "BRIDGE COMMAND TERMINAL",
    //   accessLevel: "COMMAND",
    //   logs: [ ... ],
    // },

  },
};
