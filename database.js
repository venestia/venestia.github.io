    const liveries = [
        {
            aircraft: "Airbus A300-600",
            airline: "Eastern Airlines",
            livery: "Standard | Hockeystick (1965-1971)",
            registration: "N201EA",
            bodyID: ["17437719650"],
            wingID: "17444927130",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "/palposter.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently."
        },
        {
            aircraft: "Airbus A340-300",
            airline: "Estelar",
            livery: "Standard",
            registration: "9H-JAI",
            bodyID: ["126410192986285", "96839954445098", "134376930172499"],
            wingID: "80486619936917",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "1920/9H-JAI.png",   // Full image for modal
            customization: {"Radome":"External Static Dischargers (Late)","Wingroot":"Belly UV","Nose":"No Mask","SATCOM":"Clean","Base Variant":"-300X","Exit Configurations":"Small Waist Door"},
            notes: "Released independently.<br>Engines: 130074038637117",
            airframeInfo: "Manufacturer Serial Number (MSN): 118<br>Airframe built as: Airbus A350-1041<br>Engines: Rolls Royce Trent XWB-97"
        },
        {
            aircraft: "Airbus A350-1000",
            airline: "Cathay Pacific",
            livery: "Standard (2015-)",
            registration: "B-LXA",
            bodyID: ["112469859856149"],
            wingID: "120589570559595",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "1920/B-LXA.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Manufacturer Serial Number (MSN): 118<br>Airframe built as: Airbus A350-1041<br>Engines: Rolls Royce Trent XWB-97"
        },
        {
            aircraft: "Antonov An-225",
            airline: "Aeroflot",
            livery: "Standard | Silver Body (2003-)",
            registration: "RA-75525",
            bodyID: [" "],
            wingID: " ",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Airframe nicknamed as 'G. Derzhavin / Г. Держа́вин'",
            semiFictional: "Yes"
        },
        {
            aircraft: "Antonov An-225",
            airline: "Aeroflot",
            livery: "Standard | Silver Body (2003-)",
            registration: "RA-75528",
            bodyID: [" "],
            wingID: " ",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Fictional Registration (aicraft never bore this livery in real life.)<br><br>Airframe nicknamed as 'A. Belyaev / A. Беля́ев'",
            semiFictional: "Yes"
        },
        {
            aircraft: "Antonov An-225",
            airline: "Aeroflot",
            livery: "Standard | Silver Body (2003-)",
            registration: "RA-75532",
            bodyID: [" "],
            wingID: " ",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Airframe nicknamed as 'N. Chernyshevsky / Н. Чернышевский'",
            semiFictional: "Yes"
        },
        {
            aircraft: "Antonov An-225",
            airline: "UPS",
            livery: "Standard",
            registration: "UR-54060",
            bodyID: [" "],
            wingID: " ",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: "No Customization Available",
            semiFictional: "Yes",
            notes: "Released independently."
        },
        {
            aircraft: "Boeing 747-100",
            airline: "British Airways",
            livery: "Standard | Negus (Patched Short Titles)",
            registration: "G-AWNC",
            bodyID: ["code1", "code2", "code3"],
            wingID: "code4",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "1920/G-AWNC_NGST.png", // Full image for modal
            customization: {"Engines": "Pratt & Whitney PW4000-100", "Radome": "External Static Dischargers (Late)", "Wingroot": "Belly UV", "Nose": "No Mask", "SATCOM": "Clean", "MTOW Rating (Base Variant)": "212t", "Exit Configurations": "Small Waist Door"},
            notes: "Released as part of the Pendragon Collection"
        },
        {
            aircraft: "Boeing 747-200",
            airline: "KLM",
            livery: "Standard | Blue-top (1972-2002)",
            registration: "PH-BUG",
            bodyID: ["17461065199"],
            wingID: "174161217894",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "/palposter.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Manufacturer Serial Number (MSN): 20427<br>Line Number (LN): 170<br>Airframe built as: Boeing 747-206B<br>Engines: Pratt & Whitney JT9D-7W<br><br>Airframe nicknamed as 'Orinoco'",
            referenceCode: "KL.1.3.5"
        },
        {
            aircraft: "Boeing 747-200",
            airline: "Philippine Airlines",
            livery: "Standard | pre-Landor",
            registration: "N741PR",
            bodyID: ["129654657443408"],
            wingID: "79259409809819",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "1920/N741PR.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Manufacturer Serial Number (MSN): 21832<br>Line Number (LN): 421<br>Airframe built as: Boeing 747-2F6B<br>Engines: General Electric CF6-50E2"

        },
        {
            aircraft: "Boeing 747-200",
            airline: "Philippine Airlines",
            livery: "Sticker | pre-Landor (Hurray for Hollywood)",
            registration: "N741PR",
            bodyID: ["79509001691902"],
            wingID: "90592345920569",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "1920/N741PR_HFH.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Manufacturer Serial Number (MSN): 21832<br>Line Number (LN): 421<br>Airframe built as: Boeing 747-2F6B<br>Engines: General Electric CF6-50E2"
        },
        {
            aircraft: "Boeing 747-200",
            airline: "Arrego Airlines",
            livery: "Standard",
            registration: "CS-VER",
            bodyID: ["108440780746029"],
            wingID: "17461217894",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "/palposter.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Airframe nicknamed as 'Cielo'",
            fullFictional: "Yes"
        },
        {
            aircraft: "Boeing 747-400",
            airline: "British Airways",
            livery: "Special | BOAC Retro",
            registration: "G-BYGC",
            bodyID: ["18736588329"],
            wingID: "87612555583810",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: "/beaposter.png",
            customization: "No Customization Available",
            notes: "Released independently",
            airframeInfo: "Manufacturer Serial Number (MSN): 25823<br>Line Number (LN): 1195<br>Airframe built as: Boeing 747-436<br>Engines: Rolls Royce RB211-524G"
        },
        {
            aircraft: "Boeing 757-300",
            airline: "Icelandair",
            livery: "Special | '100 Years of Sovereignty'",
            registration: "TF-ISX",
            bodyID: [" "],
            wingID: " ",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: "No Customization Available",
            notes: " ",
            airframeInfo: "Manufacturer Serial Number (MSN): 30179<br>Line Number (LN): 912<br>Airframe built as: Boeing 757-3E7(WL)<br>Engines: Rolls Royce RB211-535E4B<br><br>Airframe nicknamed as 'Þingvellir'"
        },
        {
            aircraft: "Boeing 777-200",
            airline: "Air Italiana",
            livery: "Standard (1985-1992)",
            registration: "I-EDZB",
            bodyID: ["83154674531876"],
            wingID: "71174649939341",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: {"SATCOM Option 2":"Clean 2","SATCOM Option 1":"Clean 1","Engine":"General Electric GE90-94B","Base Variant":"200"},
            notes: " ",
            airframeInfo: "Airframe nicknamed as 'Campobasso'",
            fictional: "Yes"
        },
        {
            aircraft: "Boeing 777-200",
            airline: "Air Italiana",
            livery: "Standard (1992-2002)",
            registration: "I-EDZA",
            bodyID: ["124090400923410"],
            wingID: "105438470484857",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: {"SATCOM Option 2":"Clean 2","SATCOM Option 1":"Clean 1","Engine":"General Electric GE90-94B","Base Variant":"200"},
            notes: " ",
            airframeInfo: "Airframe nicknamed as 'Brindisi'",
            fictional: "Yes"
        },
        {
            aircraft: "Boeing 777-200",
            airline: "Air Italiana",
            livery: "Standard (2002-)",
            registration: "I-EDZE",
            bodyID: ["105283627980967"],
            wingID: "110853869505205",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: {"SATCOM Option 2":"Clean 2","SATCOM Option 1":"Clean 1","Engine":"General Electric GE90-94B","Base Variant":"200"},
            notes: " ",
            airframeInfo: "Airframe nicknamed as 'Caserta'",
            fictional: "Yes"
        },
        {
            aircraft: "Boeing 777-300ER",
            airline: "Emirates",
            livery: "Standard (1999-2024)",
            registration: "A6-EGQ",
            bodyID: ["16016877392"],
            wingID: "12710628039",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: "No Customization Available",
            notes: " ",
            airframeInfo: "Manufacturer Serial Number (MSN): 41076<br>Line Number (LN): 1014<br>Airframe built as: Boeing 777-31HER<br>Engines: General Electric GE90-115B"
        },
        {
            aircraft: "Boeing 777-300ER",
            airline: "LATAM",
            livery: "Special | 'Stormtrooper Plane'",
            registration: "PT-MUA",
            bodyID: ["15983107758"],
            wingID: "12710628039",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "/palposter.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.",
            airframeInfo: "Manufacturer Serial Number (MSN): 37664<br>Line Number (LN): 727<br>Airframe built as: Boeing 777-32WER<br>Engines: General Electric GE90-115B"
        },
        {
            aircraft: "Boeing 777-300ER",
            airline: "Philippine Airlines",
            livery: "Standard (1986-)",
            registration: "RP-C7772",
            bodyID: ["107963836791698"],
            wingID: "102786383771228",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: "/RP-C7772.png",
            customization: {"SATCOM Option 1":"Option 1B","SATCOM Option 2":"Option 2A"},
            notes: " ",
            airframeInfo: "Manufacturer Serial Number (MSN): 38719<br>Line Number (LN): 1153<br>Airframe built as: Boeing 777-3F6ER<br>Engines: General Electric GE90-115B"
        },
        {
            aircraft: "Boeing 777-300ER",
            airline: "Philippine Airlines",
            livery: "Sticker | 75th Anniversary",
            registration: "RP-C7772",
            bodyID: ["94981521175944"],
            wingID: "102786383771228",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: "/RP-C7772_75.png",
            customization: {"SATCOM Option 1":"Option 1B","SATCOM Option 2":"Option 2A"},
            notes: " ",
            airframeInfo: "Manufacturer Serial Number (MSN): 38719<br>Line Number (LN): 1153<br>Airframe built as: Boeing 777-3F6ER<br>Engines: General Electric GE90-115B"
        },
        {
            aircraft: "Boeing 777-9",
            airline: "Lufthansa",
            livery: "Standard (2018-)",
            registration: "D-ABSA",
            bodyID: ["125679162998806"],
            wingID: "122788672580675",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: " ",
            customization: {"SATCOM Option 2":"Clean 2","SATCOM Option 1":"Option 1C","Door Configuration":"10-Door"},
            notes: "Released independently.<br>Fictional Registration (aicraft never bore this livery in real life.)",
            airframeInfo: "Airframe nicknamed as 'Nordhausen'",
            semiFictional: "Yes"
        },
        {
            aircraft: "Bristol Type 200",
            airline: "British Airways",
            livery: "Standard | Negus",
            registration: "G-AZLZ",
            bodyID: ["125689962285872"],
            wingID: "111233664142759",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: "/beaposter.png",
            customization: "No Customization Available",
            notes: "Released independently.<br>Fictional Registration (aicraft never bore this livery in real life.)",
            fictional: "Yes"
        },
        {
            aircraft: "Bristol Type 200",
            airline: "British European Airways",
            livery: "Standard | Blue Tail",
            registration: "G-ATBA",
            bodyID: ["115143095854566"],
            wingID: "127236518663692",
            thumbnail: "Icons/ImageIcon.png",
            fullImage: "1920/G-ATBA.png",
            customization: "No Customization Available",
            notes: "Released independently.<br>Fictional Registration (aicraft never bore this livery in real life.)",
            fictional: "Yes"
        },
        {           
            aircraft: "Fokker F26",
            airline: "KLM",
            livery: "Standard | Blue-top (2014-2024)",
            registration: "PH-CNA",
            bodyID: ["16698673592"],
            wingID: "17156401746",
            thumbnail: "Icons/ImageIcon.png",  // Small icon shown in table
            fullImage: "1920/PH-CNA.png",   // Full image for modal
            customization: "No Customization Available",
            notes: "Released independently.<br>Fictional Registration (aircraft never bore this livery in real life).",
            airframeInfo: "Airframe nicknamed as 'Súdwest-Fryslân'",
            fictional: "Yes"
        }
    ];
