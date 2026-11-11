// Katalog der Tracks, neuester zuerst. Pflegt das Release-Skript; von Hand ändern geht auch.
// Nummern wie Katalognummern eines Labels: der älteste Track ist 001, jeder neue bekommt die nächste.
// file: null = noch keine Datei, der Track wird grau angezeigt. Audiodateien liegen in audio/.
// Ab "const TRACKS =" muss gültiges JSON stehen (doppelte Anführungszeichen, kein Komma am Ende).
const TRACKS = [
  {"no": "005", "title": "Sundown", "date": "Nov 10", "bpm": 114, "file": "audio/sundown.mp3"},
  {"no": "004", "title": "Tuned To God 6.0", "date": "Oct 11", "bpm": 118, "file": "audio/tuned-to-god-6.m4a"},
  {"no": "003", "title": "DRAGAN", "date": "Sep 12", "bpm": 117, "file": "audio/dragan.m4a"},
  {"no": "002", "title": "Jaguar", "date": "Jul 12", "bpm": 126, "file": "audio/jaguar.mp3"},
  {"no": "001", "title": "Understand It From Here (slowed)", "date": "Jul 04", "bpm": 199, "file": null}
];
