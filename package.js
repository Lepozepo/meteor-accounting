Package.describe({
	summary: "Accounting.js -  number, money and currency formatting - fully localisable, zero dependencies.",
	version: "1.0.0",
	git:"https://github.com/Lepozepo/meteor-accounting",
	name:"lepozepo:accounting"
});

Package.on_use(function (api) {
    api.add_files([
        "accounting.js"
    ]
        , ['client', 'server']);
});