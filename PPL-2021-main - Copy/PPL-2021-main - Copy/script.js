const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")



let data=[
    {
        "S.N": 1,
        " Description": " Resuscitator - Manual, Pediatric",
        "Unit": "Each",
        "Total Qty": 5392,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 2,
        " Description": " X Ray - Radiography, Digital",
        "Unit": "Each",
        "Total Qty": 28,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 3,
        " Description": " Laundry Machine ,50Kg",
        "Unit": "Each",
        "Total Qty": 40,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 4,
        " Description": " Electrosurgical Unit",
        "Unit": "Each",
        "Total Qty": 29,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 5,
        " Description": " Warmer - Radiant, Infant",
        "Unit": "Each",
        "Total Qty": 104,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 6,
        " Description": " Set - Instrument, Surgery, Major",
        "Unit": "Set",
        "Total Qty": 58,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 7,
        " Description": " Set - Instrument, Tracheostomy",
        "Unit": "Set",
        "Total Qty": 30,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 8,
        " Description": " Trolley - Patient, Stretcher",
        "Unit": "Each",
        "Total Qty": 318,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 9,
        " Description": " Stand - Infusion, Adjustable Height",
        "Unit": "Each",
        "Total Qty": 610,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 10,
        " Description": " Suction Machine - Surgical, Electrical",
        "Unit": "Each",
        "Total Qty": 174,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 11,
        " Description": " Hammer - Reflex",
        "Unit": "Each",
        "Total Qty": 363,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 12,
        " Description": " Sphygmomanometer - Digital, Adult",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 13,
        " Description": " Set - Laparotomy, Adult",
        "Unit": "Set",
        "Total Qty": 30,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 14,
        " Description": " Pulse Oximeter - Handheld",
        "Unit": "Each",
        "Total Qty": 470,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 15,
        " Description": "Generic Name: Dialysis Machine",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 16,
        " Description": " CPAP",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 17,
        " Description": " Scale - Weight, Adult, Digital",
        "Unit": "Each",
        "Total Qty": 476,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 18,
        " Description": " Scale - Weight, Digital, Infant",
        "Unit": "Each",
        "Total Qty": 434,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 19,
        " Description": " Sterilizer - Instrument, Hot Air, 40L",
        "Unit": "Each",
        "Total Qty": 42,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 20,
        " Description": " Bed - Patient, Fowler, Adult",
        "Unit": "Each",
        "Total Qty": 828,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 21,
        " Description": " Bowl - With Stand, 300L",
        "Unit": "Each",
        "Total Qty": 610,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 22,
        " Description": " Screen - Patient, Four Section",
        "Unit": "Each",
        "Total Qty": 434,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 23,
        " Description": " Centrifuge - General Purpose, Electrical",
        "Unit": "Each",
        "Total Qty": 84,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 24,
        " Description": " Cold box - 25L",
        "Unit": "Each",
        "Total Qty": 1270,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 25,
        " Description": " Couch - Delivery",
        "Unit": "Each",
        "Total Qty": 426,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 26,
        " Description": " Set - Delivery",
        "Unit": "Set",
        "Total Qty": 384,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 27,
        " Description": " Set - Diagnostic, EENT",
        "Unit": "Set",
        "Total Qty": 192,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 28,
        " Description": " Set - Dialation and Curettage",
        "Unit": "Set",
        "Total Qty": 42,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 29,
        " Description": " Set - Instrument, Dressing",
        "Unit": "Set",
        "Total Qty": 284,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 30,
        " Description": " Enema Can",
        "Unit": "Each",
        "Total Qty": 42,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 31,
        " Description": " Couch - Examination",
        "Unit": "Each",
        "Total Qty": 434,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 32,
        " Description": " Light - Examination, Mobile",
        "Unit": "Each",
        "Total Qty": 284,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 33,
        " Description": " Fetoscope - Wooden",
        "Unit": "Each",
        "Total Qty": 484,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 34,
        " Description": " Tray - Instrument, with cover",
        "Unit": "Each",
        "Total Qty": 560,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 35,
        " Description": " Trolley - General Purpose",
        "Unit": "Each",
        "Total Qty": 84,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 36,
        " Description": " Dish - Kidney, 475 ml",
        "Unit": "Each",
        "Total Qty": 260,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 37,
        " Description": " Microscope - Binocular, LED",
        "Unit": "Each",
        "Total Qty": 234,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 38,
        " Description": " Set - Instrument, Surgery, Minor",
        "Unit": "Set",
        "Total Qty": 462,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 39,
        " Description": " Table - Operating, Manual",
        "Unit": "Each",
        "Total Qty": 42,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 40,
        " Description": " Oxygen concentrator",
        "Unit": "Each",
        "Total Qty": 112,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 41,
        " Description": " Cylinder - Oxygen, 40L, With Regulator, Humidifier and Flow Meter",
        "Unit": "Each",
        "Total Qty": 468,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 42,
        " Description": " Forceps - Pick Up, With Jar",
        "Unit": "Each",
        "Total Qty": 384,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 43,
        " Description": "Refrigerator - Medicine, 250L",
        "Unit": "Each",
        "Total Qty": 84,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 44,
        " Description": "1. Generic Name : Refrigerator - Vaccine, 300L",
        "Unit": "Each",
        "Total Qty": 126,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 45,
        " Description": " Resuscitator - Manual, Adult",
        "Unit": "Each",
        "Total Qty": 476,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 46,
        " Description": " Set - Midwifery",
        "Unit": "Set",
        "Total Qty": 510,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 47,
        " Description": " Sphygmomanometer - Aneroid, Adult",
        "Unit": "Each",
        "Total Qty": 476,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 48,
        " Description": " Sterilizer - Steam, 40L",
        "Unit": "Each",
        "Total Qty": 42,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 49,
        " Description": " Stethoscope - Adult and Pediatric",
        "Unit": "Each",
        "Total Qty": 526,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 50,
        " Description": " Tape - measuring",
        "Unit": "Each",
        "Total Qty": 434,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 51,
        " Description": " Thermometer - Auxillary, Digital",
        "Unit": "Each",
        "Total Qty": 610,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 52,
        " Description": " Ultrasound - Ob/Gyn",
        "Unit": "Each",
        "Total Qty": 597,
        "OWNER": "MOH-2016 AND EYECARE"
    },
    {
        "S.N": 53,
        " Description": " Vacuum Extractor - Electrical",
        "Unit": "Each",
        "Total Qty": 84,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 54,
        " Description": " Sterilizer - Instrument, Hot Air, 25L",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 55,
        " Description": " Stretcher - Army type",
        "Unit": "Each",
        "Total Qty": 350,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 56,
        " Description": " Dish - Kidney, Stainless Steel, 300 ml",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 57,
        " Description": " Refrigerator - Medicine, 150L",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 58,
        " Description": "1. Generic Name : Refrigerator - Vaccine, 80 L",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 59,
        " Description": " Sterilizer - Steam, 25 L",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 60,
        " Description": " Suction Machine - Manual",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 61,
        " Description": "- Centrifuge - Manual",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 62,
        " Description": " Set - Episiotomy",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 63,
        " Description": " Sterilizer - Drum, 240 x 290mm",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 64,
        " Description": "4.Generic name: Set - Instrument, Suture",
        "Unit": "Each",
        "Total Qty": 450,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 65,
        " Description": " Tunning Fork",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 66,
        " Description": "- Wheelchair Adult",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 67,
        " Description": " Anesthesia Machine with monitor",
        "Unit": "Each",
        "Total Qty": 14,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 68,
        " Description": " Table – Operating, Electro hydraulic",
        "Unit": "Each",
        "Total Qty": 14,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 69,
        " Description": " Light - Operating, Mobile",
        "Unit": "Each",
        "Total Qty": 14,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 70,
        " Description": " Monitor - Patient",
        "Unit": "Each",
        "Total Qty": 28,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 71,
        " Description": " Set - Laryngoscope, Adult/Pediatric",
        "Unit": "Set",
        "Total Qty": 28,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 72,
        " Description": " Cylinder - Oxygen, 50L",
        "Unit": "Each",
        "Total Qty": 28,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 73,
        " Description": " Sterilizer - Steam, 80L",
        "Unit": "Each",
        "Total Qty": 14,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 74,
        " Description": " Set - Instrument, Caeserean Section",
        "Unit": "Each",
        "Total Qty": 28,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 75,
        " Description": " Set - Instrument, Splint",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 76,
        " Description": " Power drill and Oscillating Saw - Battery Operated",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 77,
        " Description": " Infusion - pump",
        "Unit": "Each",
        "Total Qty": 48,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 78,
        " Description": " Set - Speculum, Nasal",
        "Unit": "Set",
        "Total Qty": 30,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 79,
        " Description": " Set - Cataract, Complete",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 80,
        " Description": " Set - Gigli Saw Wire",
        "Unit": "Set",
        "Total Qty": 200,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 81,
        " Description": " Trolley - Instrument",
        "Unit": "Each",
        "Total Qty": 358,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 82,
        " Description": " Couch - Minor Procedure",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 83,
        " Description": " Medicine Cabinet",
        "Unit": "Each",
        "Total Qty": 14,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 84,
        " Description": " Table - Instrument, Mayo Type",
        "Unit": "Each",
        "Total Qty": 28,
        "OWNER": "MOH-2016"
    },
    {
        "S.N": 85,
        " Description": "1.Generic Name : Refractometer – Automated",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 86,
        " Description": " Slit Lamp",
        "Unit": "Each",
        "Total Qty": 25,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 87,
        " Description": " Retinoscope",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 88,
        " Description": " Tonometer - Hand held, non contact",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 89,
        " Description": " Keratometer - Automatic",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 90,
        " Description": " Set - Trial Lens",
        "Unit": "Set",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 91,
        " Description": " Trial Frame Lens",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 92,
        " Description": " Ultrasound - A Scan, Ophtalmic",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 93,
        " Description": " Set - Cataract, Complete",
        "Unit": "Set",
        "Total Qty": 90,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 94,
        " Description": " Microscope - Operating, Portable, Ophthalmic",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "EYECARE"
    },
    {
        "S.N": 95,
        " Description": "Anesthesia Machine",
        "Unit": "Each",
        "Total Qty": 280,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 96,
        " Description": "Bed patient , adult",
        "Unit": "Each",
        "Total Qty": 1540,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 97,
        " Description": "Pelvic binder",
        "Unit": "Each",
        "Total Qty": 1050,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 98,
        " Description": "Bowl capacity - 300ml stainless steel",
        "Unit": "Each",
        "Total Qty": 1180,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 99,
        " Description": "Crash Cart",
        "Unit": "Each",
        "Total Qty": 225,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 100,
        " Description": "Centrifuge, general-purpose laboratory",
        "Unit": "Each",
        "Total Qty": 320,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 101,
        " Description": "Centrifuge, Manual",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 102,
        " Description": "Cold Box -25L",
        "Unit": "Each",
        "Total Qty": 2400,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 103,
        " Description": "Neck Collar",
        "Unit": "Each",
        "Total Qty": 900,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 104,
        " Description": "Delivery Coach",
        "Unit": "Each",
        "Total Qty": 2760,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 105,
        " Description": "Examination coach/Examination Table/Minor procedure coach",
        "Unit": "Each",
        "Total Qty": 970,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 106,
        " Description": "CPAP",
        "Unit": "Each",
        "Total Qty": 225,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 107,
        " Description": "Oxygen, cylinder with flow meter-40L",
        "Unit": "Each",
        "Total Qty": 1280,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 108,
        " Description": "Defibrillator",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 109,
        " Description": "Electrical dermatome machine",
        "Unit": "Each",
        "Total Qty": 16,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 110,
        " Description": "Kidney dish 300ml stainless steel",
        "Unit": "Each",
        "Total Qty": 330,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 111,
        " Description": "Kidney dish 300ml stainless steel",
        "Unit": "Each",
        "Total Qty": 800,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 112,
        " Description": "Doppler",
        "Unit": "Each",
        "Total Qty": 2000,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 113,
        " Description": "Instrument Drums",
        "Unit": "Each",
        "Total Qty": 190,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 114,
        " Description": "ECG Machine",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 115,
        " Description": "Electrosurgical unit",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 116,
        " Description": "Fiber optic laryngoscope (Teritiary H.)",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 117,
        " Description": "Fetoscope",
        "Unit": "Each",
        "Total Qty": 700,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 118,
        " Description": "Pickup forceps with jar",
        "Unit": "Each",
        "Total Qty": 740,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 119,
        " Description": "Reflex hammer",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 120,
        " Description": "Infant Incubator",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 121,
        " Description": "Humby’s knife with blade",
        "Unit": "Each",
        "Total Qty": 800,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 122,
        " Description": "Examination Light",
        "Unit": "Each",
        "Total Qty": 510,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 123,
        " Description": "Light-Operating, Mobile",
        "Unit": "Each",
        "Total Qty": 280,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 124,
        " Description": "Microscope - Binocular, compound Light",
        "Unit": "Each",
        "Total Qty": 460,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 125,
        " Description": "Fetal Monitor",
        "Unit": "Each",
        "Total Qty": 500,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 126,
        " Description": "Cardiac Monitor/Portable patient monitor",
        "Unit": "Each",
        "Total Qty": 585,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 127,
        " Description": "Oxygen concentrator",
        "Unit": "Each",
        "Total Qty": 740,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 128,
        " Description": "Phototherapy",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 129,
        " Description": "Pulse Oximeter -Prtbale/Pulse Oximeter",
        "Unit": "Each",
        "Total Qty": 860,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 130,
        " Description": "Infusion pump",
        "Unit": "Each",
        "Total Qty": 585,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 131,
        " Description": "Refrigerator for medicine - 150L",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 132,
        " Description": "Refrigerator for medicine - 250L",
        "Unit": "Each",
        "Total Qty": 320,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 133,
        " Description": "Refrigerator for vaccine - 300L",
        "Unit": "Each",
        "Total Qty": 480,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 134,
        " Description": "Refrigerator for vaccine - 80L",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 135,
        " Description": "Resuscitator Adult/Resuscitator, Adult, Manual",
        "Unit": "Each",
        "Total Qty": 480,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 136,
        " Description": "Resuscitator, pedi, Manual/Resuscitator Pedi",
        "Unit": "Each",
        "Total Qty": 160,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 137,
        " Description": "Resuscitator, pedi, Manual/Resuscitator Pedi",
        "Unit": "set",
        "Total Qty": 50,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 138,
        " Description": "Resuscitator, pedi, Manual/Resuscitator Pedi",
        "Unit": "Each",
        "Total Qty": 280,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 139,
        " Description": "Weighing scale, adult/Adult weight scale with height/Adult weight scale with height, baby",
        "Unit": "Each",
        "Total Qty": 330,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 140,
        " Description": "Scale - Weight, Adult, Digital",
        "Unit": "Each",
        "Total Qty": 480,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 141,
        " Description": "Infant weight scale",
        "Unit": "Each",
        "Total Qty": 330,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 142,
        " Description": "Infant weight scale",
        "Unit": "Each",
        "Total Qty": 640,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 143,
        " Description": "Patient screen",
        "Unit": "Each",
        "Total Qty": 650,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 144,
        " Description": "DNC complete set",
        "Unit": "Set",
        "Total Qty": 160,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 145,
        " Description": "Delivery set",
        "Unit": "Each",
        "Total Qty": 600,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 146,
        " Description": "Basic ENT set",
        "Unit": "Set",
        "Total Qty": 300,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 147,
        " Description": "Enema can",
        "Unit": "Each",
        "Total Qty": 160,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 148,
        " Description": "Episiotomy set",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 149,
        " Description": "Burn’s basic instrument set",
        "Unit": "Each",
        "Total Qty": 16,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 150,
        " Description": "Dressing set/ Dressing instrument set",
        "Unit": "Set",
        "Total Qty": 510,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 151,
        " Description": "Major Surgery set",
        "Unit": "Each",
        "Total Qty": 180,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 152,
        " Description": "Minor set/Minor operation set/Minor surgical set",
        "Unit": "Set",
        "Total Qty": 830,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 153,
        " Description": "Suture set",
        "Unit": "set",
        "Total Qty": 420,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 154,
        " Description": "Intubation set",
        "Unit": "Each",
        "Total Qty": 180,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 155,
        " Description": "Laparatomy set",
        "Unit": "Set",
        "Total Qty": 210,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 156,
        " Description": "Set-Midwifery",
        "Unit": "Each",
        "Total Qty": 1080,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 157,
        " Description": "Spinal Set",
        "Unit": "Each",
        "Total Qty": 180,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 158,
        " Description": "Different types of splints/Different types of splints set",
        "Unit": "Set",
        "Total Qty": 190,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 159,
        " Description": "Tracheotomy set",
        "Unit": "Each",
        "Total Qty": 180,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 160,
        " Description": "Skin graft mesher",
        "Unit": "Each",
        "Total Qty": 16,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 161,
        " Description": "Sphygmomanometer (Aneriod)",
        "Unit": "Each",
        "Total Qty": 810,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 162,
        " Description": "B/P appartaus (Aneriod/Digital)",
        "Unit": "Each",
        "Total Qty": 1000,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 163,
        " Description": "Infusion Stand - adjustible height/IV stand",
        "Unit": "Each",
        "Total Qty": 1850,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 164,
        " Description": "Skin stapples",
        "Unit": "Each",
        "Total Qty": 800,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 165,
        " Description": "Autoclave dry oven - 25L",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 166,
        " Description": "Autoclave dry oven - 40L",
        "Unit": "Each",
        "Total Qty": 160,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 167,
        " Description": "Autoclave 120 Litres",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 168,
        " Description": "steam sterilizer 25L",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 169,
        " Description": "steam sterilizer 25L",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 170,
        " Description": "Sterilizer steam , 40 Liters",
        "Unit": "Each",
        "Total Qty": 160,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 171,
        " Description": "Stethoscope",
        "Unit": "Each",
        "Total Qty": 860,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 172,
        " Description": "Hand carrying stretcher",
        "Unit": "Each",
        "Total Qty": 330,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 173,
        " Description": "Suction machine, electrical/Suction Machine",
        "Unit": "Each",
        "Total Qty": 1005,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 174,
        " Description": "Suction Manual",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 175,
        " Description": "Hydraulic Operation tables*/OR Table, Hydrolic/Table-Operating, Electro-Hydraulic",
        "Unit": "Each",
        "Total Qty": 280,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 176,
        " Description": "Minor operation Table",
        "Unit": "Each",
        "Total Qty": 160,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 177,
        " Description": "Measuring tape/Tape meter",
        "Unit": "Each",
        "Total Qty": 650,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 178,
        " Description": "Thermometer",
        "Unit": "Each",
        "Total Qty": 1180,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 179,
        " Description": "Instrument tray (with table)/Instrument tray stainless steel",
        "Unit": "Each",
        "Total Qty": 1130,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 180,
        " Description": "Trolley",
        "Unit": "Each",
        "Total Qty": 75,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 181,
        " Description": "Intrument Trolley",
        "Unit": "Each",
        "Total Qty": 600,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 182,
        " Description": "Mobile stretcher/Stretcher",
        "Unit": "Each",
        "Total Qty": 840,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 183,
        " Description": "Tuning forks (set , 500Hz)",
        "Unit": "Each",
        "Total Qty": 140,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 184,
        " Description": "Ultrasound Machine general purpose",
        "Unit": "Each",
        "Total Qty": 40,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 185,
        " Description": "Portable Ultrasound with Echo (Teritiary H.)",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 186,
        " Description": "Ultrasound, Obgyn",
        "Unit": "Each",
        "Total Qty": 310,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 187,
        " Description": "Electrical Vacuum Extractor/Vacuum extractor, Electrical",
        "Unit": "Each",
        "Total Qty": 350,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 188,
        " Description": "Radiant Warmer",
        "Unit": "Each",
        "Total Qty": 350,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 189,
        " Description": "Wheelchair, adult/Wheelchair",
        "Unit": "Each",
        "Total Qty": 350,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 190,
        " Description": "X Ray - Radiography, Digital",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "WORLD BANK"
    },
    {
        "S.N": 191,
        " Description": " Blast Plasma Freezer / Contact Shock Freezer",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "BLOOD BANK"
    },
    {
        "S.N": 192,
        " Description": " Plasma Feeezer",
        "Unit": "Set",
        "Total Qty": 100,
        "OWNER": "BLOOD BANK"
    },
    {
        "S.N": 193,
        " Description": " Refrigerated centrifuge",
        "Unit": "Set",
        "Total Qty": 15,
        "OWNER": "BLOOD BANK"
    },
    {
        "S.N": 194,
        " Description": "Anesthesia Machine with monitor",
        "Unit": "Each",
        "Total Qty": 6,
        "OWNER": "SRHB"
    },
    {
        "S.N": 195,
        " Description": "Bed - Patient, Fowler, Adult",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "SRHB"
    },
    {
        "S.N": 196,
        " Description": "Bowl - With Stand,",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "SRHB"
    },
    {
        "S.N": 197,
        " Description": "Centrifuge - General Purpose, Electrical",
        "Unit": "Each",
        "Total Qty": 13,
        "OWNER": "SRHB"
    },
    {
        "S.N": 198,
        " Description": "Cold box, 25L",
        "Unit": "Each",
        "Total Qty": 65,
        "OWNER": "SRHB"
    },
    {
        "S.N": 199,
        " Description": "Couch - Delivery",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "SRHB"
    },
    {
        "S.N": 200,
        " Description": "Dish kidney - Stainless Steel, 300ml",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "SRHB"
    },
    {
        "S.N": 201,
        " Description": "Drum - Sterilizer, 240mm*290mm",
        "Unit": "Each",
        "Total Qty": 5,
        "OWNER": "SRHB"
    },
    {
        "S.N": 202,
        " Description": "Fetoscope - Wooden",
        "Unit": "Each",
        "Total Qty": 18,
        "OWNER": "SRHB"
    },
    {
        "S.N": 203,
        " Description": "Fork - Tunning",
        "Unit": "Each",
        "Total Qty": 5,
        "OWNER": "SRHB"
    },
    {
        "S.N": 204,
        " Description": "Hammer - Reflex",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "SRHB"
    },
    {
        "S.N": 205,
        " Description": "Incubator - Newborn",
        "Unit": "Each",
        "Total Qty": 12,
        "OWNER": "SRHB"
    },
    {
        "S.N": 206,
        " Description": "Light - Examination, Mobile",
        "Unit": "Each",
        "Total Qty": 13,
        "OWNER": "SRHB"
    },
    {
        "S.N": 207,
        " Description": "Light - Operating, Ceiling",
        "Unit": "Each",
        "Total Qty": 5,
        "OWNER": "SRHB"
    },
    {
        "S.N": 208,
        " Description": "Microscope - Binocular, LED",
        "Unit": "Each",
        "Total Qty": 13,
        "OWNER": "SRHB"
    },
    {
        "S.N": 209,
        " Description": "Pump - Infusion",
        "Unit": "Each",
        "Total Qty": 6,
        "OWNER": "SRHB"
    },
    {
        "S.N": 210,
        " Description": "Refrigerator - General Purpose, 150L",
        "Unit": "Each",
        "Total Qty": 5,
        "OWNER": "SRHB"
    },
    {
        "S.N": 211,
        " Description": "Refrigerator - General Purpose, 250L",
        "Unit": "Each",
        "Total Qty": 13,
        "OWNER": "SRHB"
    },
    {
        "S.N": 212,
        " Description": "Resuscitator - Manual, Adult,",
        "Unit": "Each",
        "Total Qty": 22,
        "OWNER": "SRHB"
    },
    {
        "S.N": 213,
        " Description": "Scale - Weight, Baby, Digital, with Height",
        "Unit": "Each",
        "Total Qty": 26,
        "OWNER": "SRHB"
    },
    {
        "S.N": 214,
        " Description": "Screen - Patient, Four Section",
        "Unit": "Each",
        "Total Qty": 18,
        "OWNER": "SRHB"
    },
    {
        "S.N": 215,
        " Description": "Set - Diagnostic, EENT",
        "Unit": "Set",
        "Total Qty": 9,
        "OWNER": "SRHB"
    },
    {
        "S.N": 216,
        " Description": "Set - Hysterectomy",
        "Unit": "Set",
        "Total Qty": 6,
        "OWNER": "SRHB"
    },
    {
        "S.N": 217,
        " Description": "Set - Instrument, Caeserean Section",
        "Unit": "Set",
        "Total Qty": 18,
        "OWNER": "SRHB"
    },
    {
        "S.N": 218,
        " Description": "Set - Dressing Instrument",
        "Unit": "Set",
        "Total Qty": 13,
        "OWNER": "SRHB"
    },
    {
        "S.N": 219,
        " Description": "Set - Instrument, Surgery, Major",
        "Unit": "Set",
        "Total Qty": 15,
        "OWNER": "SRHB"
    },
    {
        "S.N": 220,
        " Description": "Set - Instrument, Surgery, Minor",
        "Unit": "Set",
        "Total Qty": 33,
        "OWNER": "SRHB"
    },
    {
        "S.N": 221,
        " Description": "Set - instrument, Suture",
        "Unit": "Set",
        "Total Qty": 15,
        "OWNER": "SRHB"
    },
    {
        "S.N": 222,
        " Description": "Set - Thoracotomy, Adult",
        "Unit": "Each",
        "Total Qty": 3,
        "OWNER": "SRHB"
    },
    {
        "S.N": 223,
        " Description": "Enema Can",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "SRHB"
    },
    {
        "S.N": 224,
        " Description": "Stand - Infusion, Adjustable Height",
        "Unit": "Each",
        "Total Qty": 22,
        "OWNER": "SRHB"
    },
    {
        "S.N": 225,
        " Description": "Sterilizer - Steam, 40L",
        "Unit": "Each",
        "Total Qty": 9,
        "OWNER": "SRHB"
    },
    {
        "S.N": 226,
        " Description": "Stethoscope - Adult",
        "Unit": "Each",
        "Total Qty": 22,
        "OWNER": "SRHB"
    },
    {
        "S.N": 227,
        " Description": "Thermometer - Clinical, Digital",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "SRHB"
    },
    {
        "S.N": 228,
        " Description": "Tissue Processor Rotary",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "SRHB"
    },
    {
        "S.N": 229,
        " Description": "Tray - Instrument, with cover, 35x30x3.5 cm",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "SRHB"
    },
    {
        "S.N": 230,
        " Description": "Trolley - General Purpose",
        "Unit": "Each",
        "Total Qty": 18,
        "OWNER": "SRHB"
    },
    {
        "S.N": 231,
        " Description": "Trolley - Patient, Stretcher",
        "Unit": "Each",
        "Total Qty": 26,
        "OWNER": "SRHB"
    },
    {
        "S.N": 232,
        " Description": "Ultrasound - General Purpose, Color Doppler, Mobile, 3D",
        "Unit": "Each",
        "Total Qty": 2,
        "OWNER": "SRHB"
    },
    {
        "S.N": 233,
        " Description": "Ultrasound - Ob/Gyn",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "SRHB"
    },
    {
        "S.N": 234,
        " Description": "Warmer - Radiant, Infant",
        "Unit": "Each",
        "Total Qty": 16,
        "OWNER": "SRHB"
    },
    {
        "S.N": 235,
        " Description": "Vacuum Extractor, Electrical",
        "Unit": "Each",
        "Total Qty": 8,
        "OWNER": "SRHB"
    },
    {
        "S.N": 236,
        " Description": " Set-Laryngoscope, Adult/Pediatric",
        "Unit": "Set",
        "Total Qty": 250,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 237,
        " Description": " Ultrasonic-Doppler, Fetal",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 238,
        " Description": " Vacuum Extractor, Electrical",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 239,
        " Description": " Centrifuge - General Purpose, Electrical",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 240,
        " Description": " Microscope - Binocular, LED",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 241,
        " Description": " Rack - Staining",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 242,
        " Description": " Shaker - Rotary",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 243,
        " Description": " Cylinder - Oxygen, 50L",
        "Unit": "Each",
        "Total Qty": 1000,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 244,
        " Description": " Trolley - Resuscitation",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 245,
        " Description": " Couch-Examination",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 246,
        " Description": " Light-Examination, Mobile",
        "Unit": "Each",
        "Total Qty": 500,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 247,
        " Description": " Pulse Oximeter",
        "Unit": "Each",
        "Total Qty": 500,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 248,
        " Description": "Screen - Patient/Bed",
        "Unit": "Each",
        "Total Qty": 1000,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 249,
        " Description": " Trolley - Patient records",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 250,
        " Description": " Anoscope - Metal",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 251,
        " Description": " Clamp - Bowel, stainless steel",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 252,
        " Description": " Galipot-Stainless Steel, 100ml",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 253,
        " Description": " Humby-Knife with Blade",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 254,
        " Description": " Light-Operating, Mobile",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 255,
        " Description": " Set - Instrument, Vasectomy",
        "Unit": "set",
        "Total Qty": 85,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 256,
        " Description": " Set - Biopsy, incision",
        "Unit": "Each",
        "Total Qty": 62,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 257,
        " Description": " Set - Cusco Vaginal Speculum",
        "Unit": "Set",
        "Total Qty": 250,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 258,
        " Description": " Set-Foreign Body Removal",
        "Unit": "Set",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 259,
        " Description": " Set-Hysterectomy",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 260,
        " Description": " Set-Instrument, Obstetrical",
        "Unit": "Set",
        "Total Qty": 100,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 261,
        " Description": " Set - Instrument, Surgery, Major",
        "Unit": "Set",
        "Total Qty": 150,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 262,
        " Description": " Set - Laminectomy",
        "Unit": "Each",
        "Total Qty": 60,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 263,
        " Description": "Set-pancreaticoduodenectomy",
        "Unit": "Set",
        "Total Qty": 36,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 264,
        " Description": " Set - Instrument, Rectal, Major",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 265,
        " Description": " Suction Machine",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 266,
        " Description": " Hammer - Reflex",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 267,
        " Description": " Defibrillator With Monitor",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 268,
        " Description": " Tonometer - Hand held, non contact",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 QUA"
    },
    {
        "S.N": 269,
        " Description": "HIGH RESOLUTION ULTRASOUND,COLOUR DOPPLER",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 270,
        " Description": "MOBILE X-RAY MACHINE DIGITAL",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 271,
        " Description": "DIGITAL X-RAY MACHINE",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 272,
        " Description": "PATIENT MONITOR",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 273,
        " Description": "RADIANT WARMER",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 274,
        " Description": "OXYGEN CONCENTRATOR",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 275,
        " Description": "ANESTHESIA MACHINE WITH INTEGRATED VENTILATOR AND PATIENT MONITOR",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 276,
        " Description": "OPERATION LIGHT CEILING TYPE",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 277,
        " Description": "MOBILE OPERATION LIGHT",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 278,
        " Description": "ELECTRO CARDIOGRAPH (ECG) MACHINE",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 279,
        " Description": "STEAM STERILIZER",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 280,
        " Description": "STEAM STERILIZER >80L",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 281,
        " Description": "STEAM STERILIZER, 40 LITER",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 282,
        " Description": "OPERATION TABLE, MULTI SECTION, ELECTRO -HYDRAULIC",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 283,
        " Description": "SURGICAL SUCTION MACHINE,ELEC,2 BOTTLE",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 284,
        " Description": "VACUUM EXTRACTOR, MANUAL",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 285,
        " Description": "VACUUM EXTRACTOR, ELECTRICAL",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 286,
        " Description": "ELECTROSURGICAL UNIT",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 287,
        " Description": "DELIVERY COACH",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 288,
        " Description": "STRETCHERS",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 289,
        " Description": "EXAMINATION COACH",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 290,
        " Description": "GASTROINTESTINAL INSTRUMENT SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 291,
        " Description": "ABDOMINAL PERINEAL RESECTION SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 292,
        " Description": "MAJOR RECTAL INSTRUMENT SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 293,
        " Description": "VAGINAL HYSTERECTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 294,
        " Description": "ABDOMINAL GYNECOLOGICAL INSTRUMENT SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 295,
        " Description": "DIAPHRAGMATIC HERNIA REPAIR SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 296,
        " Description": "LARYNGECTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 297,
        " Description": "CRANIOTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 298,
        " Description": "PROSTATECTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 299,
        " Description": "LAMINECTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 300,
        " Description": "CHOLECYSTECTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 301,
        " Description": "HAEMORRHOIDECTOMY SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 302,
        " Description": "URETER DILATION SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 303,
        " Description": "CAESAREAN SECTION SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 304,
        " Description": "INCISION & DRAINAGE SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 305,
        " Description": "OTOSCOPE, HANDHELD SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 306,
        " Description": "LARYNGOSCOPE SET",
        "Unit": "Set",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 307,
        " Description": "EXAMINATION LIGHT",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 308,
        " Description": "HOSPITAL LAUNDRY MACHINE WITH IRONING",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 309,
        " Description": "LAPAROTOMY SET",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 310,
        " Description": "SPHYGMOMANOMETER MERCURY (BPA)",
        "Unit": "Each",
        "Total Qty": 500,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 311,
        " Description": "PATIENT BED AT LEAST THREE SECTIONS WITH MATTRESS",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 312,
        " Description": "PEDIATRIC PATIENT BED WITH MATTRESS",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 313,
        " Description": "REFRIGRATOR,>300LITER",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 314,
        " Description": "DEFIBRILLATOR",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 315,
        " Description": "INFUSION PUMP",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 316,
        " Description": "CENTRIFUGE",
        "Unit": "Each",
        "Total Qty": 30,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 317,
        " Description": "MICROSCOPE,LED",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 318,
        " Description": "SLIT LAMP/AUTOMATIC",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 319,
        " Description": "OPHTHALMOSCOPES,DIRECT",
        "Unit": "Each",
        "Total Qty": 40,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 320,
        " Description": "VISUAL SIGN",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 321,
        " Description": "OPERATING MICROSCOPE OPHTHALMIC",
        "Unit": "Each",
        "Total Qty": 2,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 322,
        " Description": "CATARACT SET",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 323,
        " Description": "A-SCAN BIOMETRY",
        "Unit": "Each",
        "Total Qty": 5,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 324,
        " Description": "I CARE TONOMETRY",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 325,
        " Description": "DENTAL UNIT ADVANCE",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 326,
        " Description": "PHOTOTHERAPY",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 327,
        " Description": "INFANT INCUBATOR",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 328,
        " Description": "COAGULATION MACHINE",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 329,
        " Description": "FLUORESCENCE MICROSCOPE",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 330,
        " Description": "MICROTOME (TISSUE SLICER) DIGITAL",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 331,
        " Description": "TISSUE PROCESSING MACHINE (AUTOMATED)",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 332,
        " Description": "SET - AMPUTATION INSTRUMENT",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 333,
        " Description": "HUMBY KNIFE",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 334,
        " Description": "TOURNIQUET-PNEUMATIC",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 335,
        " Description": "LARGE BONE POWER DRILL WITH SAW SET",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 336,
        " Description": "SET - INSTRUMENT, RUSH NAIL",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 337,
        " Description": "SET - INSTRUMENT, CANULATED SCREW 7MM",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 338,
        " Description": "SET - INSTRUMENT , LARGE FRAGMENT 4.5 NON LOCKING",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 339,
        " Description": "SET - INSTRUMENT, SMALL FRAGMENT, 3.5MM NON LOCKING",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 340,
        " Description": "SET - FIXATOR, EXTERNAL, LARGE (SYNTHES TYPE)",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 341,
        " Description": "SET - INSTRUMENT, HCS/DHS",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 342,
        " Description": "SET - PELVIC INSTRUMENT",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 343,
        " Description": "SET - INSTRUMENTS, SMALL FRAGMENT LOCKING (3.5)",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 344,
        " Description": "SET - INSTRUMENT, LARGE FRAGMNET LOCKING",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 345,
        " Description": "SET - INSTRUMENT SYSTEM, TIBIA FEMURE",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 346,
        " Description": "SET - INSTRUMENT, PFNA II",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 347,
        " Description": "BASIC ORTHOPEDIC SET",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 348,
        " Description": "CPAP MACHINE",
        "Unit": "Each",
        "Total Qty": 4,
        "OWNER": "2015 ORHB"
    },
    {
        "S.N": 349,
        " Description": "Laundry Machine ,50Kg",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 350,
        " Description": "Electrosurgical Unit",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 351,
        " Description": "Suction Machine - Manual",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 352,
        " Description": "Suction Machine - Surgical, Electrical",
        "Unit": "Each",
        "Total Qty": 112,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 353,
        " Description": "Sphygmomanometer - Digital, Adult",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 354,
        " Description": "Pulse Oximeter - Handheld",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 355,
        " Description": "Scale - Weight, Adult, Digital",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 356,
        " Description": "Scale - Weight, Digital, Infant",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 357,
        " Description": "Sterilizer - Instrument, Hot Air, 25L",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 358,
        " Description": "Sterilizer - Drum, 240 x 290mm",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 359,
        " Description": "Bed - Patient, Fowler, Adult",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 360,
        " Description": "Bowl - With Stand, 300mL",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 361,
        " Description": "Screen - Patient, Four Section",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 362,
        " Description": "Centrifuge - General Purpose, Electrical",
        "Unit": "Each",
        "Total Qty": 80,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 363,
        " Description": "Couch - Delivery",
        "Unit": "Each",
        "Total Qty": 150,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 364,
        " Description": "Couch - Examination",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 365,
        " Description": "Light - Examination, Mobile",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 366,
        " Description": "Tray - Instrument, with cover",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 367,
        " Description": "Refrigerator - Vaccine, 300L",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 368,
        " Description": "Vacuum Extractor - Electrical",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 369,
        " Description": "Stretcher - Army type",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 370,
        " Description": "Wheelchair Adult",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 371,
        " Description": "Table – Operating, Electro hydraulic",
        "Unit": "Each",
        "Total Qty": 8,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 372,
        " Description": "Light - Operating, Mobile",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 373,
        " Description": "Cylinder - Oxygen, 50L",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 374,
        " Description": "Infusion - pump",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 375,
        " Description": "Trolley - Instrument",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 376,
        " Description": "Tonometer - Hand held, non contact",
        "Unit": "Each",
        "Total Qty": 15,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 377,
        " Description": "Microscope - Operating, Portable, Ophthalmic",
        "Unit": "Each",
        "Total Qty": 2,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 378,
        " Description": "Microscope - Binocular, LED",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 379,
        " Description": "Set - Cataract, Complete",
        "Unit": "Set",
        "Total Qty": 10,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 380,
        " Description": "Set - Delivery",
        "Unit": "Set",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 381,
        " Description": "Set - Instrument, Dressing",
        "Unit": "Set",
        "Total Qty": 250,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 382,
        " Description": "Set - Instrument, Surgery, Minor",
        "Unit": "Set",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 383,
        " Description": "Set - Instrument, Suture",
        "Unit": "Each",
        "Total Qty": 250,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 384,
        " Description": "SHAKER -ROTERY",
        "Unit": "Each",
        "Total Qty": 50,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 385,
        " Description": "OTOSCOPE, HANDHELD SET",
        "Unit": "SET",
        "Total Qty": 150,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 386,
        " Description": "Resuscitator - adult",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 387,
        " Description": "Resuscitator - Pediatric",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 388,
        " Description": "BED PANS -Adult, Male",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 389,
        " Description": "BED PANS -Adult, Female",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 390,
        " Description": "Kidney , basin ,200*95*35",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 391,
        " Description": "drum sterilizer ,240mm * 240mm",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 392,
        " Description": "Forceps - Pick Up, With Jar",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 393,
        " Description": "Thermometer - clinical, Digital",
        "Unit": "Each",
        "Total Qty": 500,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 394,
        " Description": "Vacuum Extractor - Manuel",
        "Unit": "Each",
        "Total Qty": 100,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 395,
        " Description": "Stethoscope - Adult",
        "Unit": "Each",
        "Total Qty": 300,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 396,
        " Description": "Stethoscope - Pediatric",
        "Unit": "Each",
        "Total Qty": 200,
        "OWNER": "2016 ORHB"
    },
    {
        "S.N": 397,
        " Description": "ECT -MACHINE",
        "Unit": "Each",
        "Total Qty": 20,
        "OWNER": "MOH-2016 WITH SPARE"
    },
    {
        "S.N": 398,
        " Description": "Sphygmomanometer - Digital, Adult",
        "Unit": "Each",
        "Total Qty": 3456,
        "OWNER": "MOH-2016 WITH SPARE"
    },
    {
        "S.N": 399,
        " Description": "Slit lamp microscope",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Woraba"
    },
    {
        "S.N": 400,
        " Description": "Electrosurgical unit",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "Woraba"
    },
    {
        "S.N": 401,
        " Description": "Laundary Machine - 50kg",
        "Unit": "Each",
        "Total Qty": 3,
        "OWNER": "Woraba"
    },
    {
        "S.N": 402,
        " Description": "X - ray, Fluroscopy, C - arm, Digital",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Woraba"
    },
    {
        "S.N": 403,
        " Description": "Light - Operating, Mobile",
        "Unit": "Each",
        "Total Qty": 10,
        "OWNER": "Woraba"
    },
    {
        "S.N": 404,
        " Description": "Refrigerator - GP, 390 L",
        "Unit": "Each",
        "Total Qty": 12,
        "OWNER": "ARHB"
    },
    {
        "S.N": 405,
        " Description": "Refrigerator - GP, 390 L",
        "Unit": "Each",
        "Total Qty": 3,
        "OWNER": "ARHB"
    },
    {
        "S.N": 406,
        " Description": "Bed - Patient, Adult",
        "Unit": "Each",
        "Total Qty": 175,
        "OWNER": "ALERT"
    },
    {
        "S.N": 407,
        " Description": "Bed - Patient, Adult",
        "Unit": "Each",
        "Total Qty": 125,
        "OWNER": "ALERT"
    },
    {
        "S.N": 408,
        " Description": "MRI Machine - 1.5T",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Arba minch univeristy"
    },
    {
        "S.N": 409,
        " Description": "MRI Machine - 1.5T",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Meda walabu Univeristy Hospital"
    },
    {
        "S.N": 410,
        " Description": "MRI Machine - 1.5T",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Arsi unversity Hospital"
    },
    {
        "S.N": 411,
        " Description": "MRI Machine - 1.5T",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Amhara RHB"
    },
    {
        "S.N": 412,
        " Description": "MRI Machine - 1.5T",
        "Unit": "Each",
        "Total Qty": 1,
        "OWNER": "Wollega University"
    }
]
let users = []
let currentData = data








searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase().trim()

  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) 
      
    user.element.classList.toggle("hide", !isVisible)
    

  })
 

if(element.innerHTML == 0 ){
    document.getElementById("noitem").innerText=" ITEM IS NOT FOUND" 
}
else{
    document.getElementById("noitem").innerText="" 
}

})


function renderUsers() {
    // Clear the userCardContainer
    userCardContainer.innerHTML = ""
  
    users = currentData.map(user => {
      // Code for creating user card
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const type = card.querySelector("[data-type]")
      const amount = card.querySelector("[data-amount]")
      const device = card.querySelector("[data-device]")
      const owner = card.querySelector("[data-owner]")
     
        device.innerHTML = user[" Description"]
      amount.textContent = user["Total Qty"]
      type.textContent = user.Unit
      owner.textContent= user.OWNER
      userCardContainer.append(card)
  
      return { name: user[" Description"], email: user["Total Qty"], amount: user.Unit, element: card }
    })
  }
 

  
  
  // Event listener for switch button




  

  // Initial rendering
 
  renderUsers()






    
   
