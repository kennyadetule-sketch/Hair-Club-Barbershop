/*
 * ============================================================
 * HAIR CLUB BARBERSHOP — BUSINESS CONFIGURATION
 * ============================================================
 * Reuse this website for another client by changing the values
 * in this file. Keep the page files and main.js unchanged.
 */
const BUSINESS = {
    name: "Hair Club Barbershop",
    tagline: "A fresh cut. A clean finish. A better you.",
    description:
        "Hair Club Barbershop in San Antonio offers haircuts and everyday grooming, including beard lineups, traditional shaves and additional barber services. Call the shop to confirm current service options, pricing and availability.",
    logo: "https://lh3.googleusercontent.com/a-/ALV-UjXVbI4RU4L2ImwwHMjxNYb4m3BwUJq8SxQjQaY_LLMYLN4qThb5=w72-h72-p-rp-mo-br100",

    // Design system — change these to re-theme the entire site.
    colors: {
        primary: "#111111",
        secondary: "#b91c1c",
        accent: "#2563eb",
        background: "#ffffff",
        surface: "#f5f5f5",
        text: "#171717",
        muted: "#6b7280"
    },

    phone: "+12109430044",
    displayPhone: "(210) 943-0044",
    email: "hairclub.llc@gmail.com",
    address: "7211 Green Glen Dr, San Antonio, TX 78255, United States",
    streetAddress: "7211 Green Glen Dr",
    city: "San Antonio",
    region: "TX",
    postalCode: "78255",
    country: "US",

    facebook: "https://www.facebook.com/profile.php?id=100050299957308",
    instagram: "",
    googleMaps:
        "https://www.google.com/maps/place/Hair+Club+Barbershop/@29.5892254,-98.6354164,17z/data=!4m6!3m5!1s0x865c675e20c0a069:0x5369341b22e1cfbe!8m2!3d29.5892254!4d-98.6309103!16s%2Fg%2F11ft7866py?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D",

    // No online booking URL was supplied, so the primary action is phone/WhatsApp.
    bookingUrl: "tel:+12109430044",
    siteUrl: "", // Optional production domain, e.g. "https://hairclubbarbershop.com"

    openingHours: {
        monday: "Closed",
        tuesday: "10:30 AM–8 PM",
        wednesday: "10:30 AM–8 PM",
        thursday: "10:30 AM–8 PM",
        friday: "10:30 AM–8 PM",
        saturday: "10:30 AM–8 PM",
        sunday: "10:30 AM–6 PM"
    },

    services: [
        { name: "Haircuts & Fades", description: "From classic, tidy cuts to modern fades, let your barber know the look and finish you have in mind.", price: "Call for current pricing", icon: "✂" },
        { name: "Beard Trim & Lineup", description: "Shape the beard, sharpen the edges and bring the overall look together.", price: "Call for current pricing", icon: "✦" },
        { name: "Straight-Razor Shave", description: "A traditional shave for a clean, close finish. Ask the shop about current shave options.", price: "Call for current pricing", icon: "▱" },
        { name: "Kids Haircuts", description: "Haircuts for younger clients. Call ahead if you have questions about the style or timing.", price: "Call for current pricing", icon: "★" },
        { name: "Hair Color & Styling", description: "Ask the team about available color and styling services before your visit.", price: "Call for current pricing", icon: "◒" },
        { name: "Facial Waxing", description: "Ask about available detail grooming, including eyebrow, ear or nose waxing.", price: "Call for current pricing", icon: "✧" }
    ],

    gallery: [
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9PSfipm2YbxnRWS9UiVRoz9YZmc1SYDBenOkBWPWRtEBFzHZa2jcknzpeVaZawaWjeTJdP-62GYtcToMOq0RtL0JskMCpLzAl5a5NEuzDh01uZewvyYDal0SJ_Nf0NAkMtDrg=w900-h1200-k-no",
            alt: "Inside Hair Club Barbershop — photo from the business Google Maps listing",
            title: "Inside Hair Club Barbershop",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        },
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THGZ0HSGKrQrJL27I-J1L7qpZ7vFOzm4PL3RUB15izVd-P0zB4BLJ3gIqYXwZp5EZMBhPp_f8aSYTk3Bq4NCO1jfbXACUDiUcUvS__GRf9hVxMp4Oh9oU3hJGQxadqnW4dCSuVjQ=w765-h1200-k-no",
            alt: "A look at the shop — photo from the business Google Maps listing",
            title: "A look at the shop",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        },
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QDHg4wGNsbdyqkwsmE0FmOjAVjNND7vZjl7NB2gQ_jm082KKHdTQAVZRBzUARhGi85vteMOTQNXCRe85wCUGqO0IKAmqwWFrTGV_SbNfdVOp-OI43Zud1_BlkIwZgRdg1VZKoU=w900-h1200-k-no",
            alt: "Hair Club Barbershop photo — photo from the business Google Maps listing",
            title: "Hair Club Barbershop photo",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        },
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TnJWyefeTIou71SzySvuqt0x5koIBNiZnwr59RdWVC_-12SHI3XWuP7VnJWUkp3_CCYCy9gwGfSwlwOIO2iJ7b2GdKDWPqJC_ZG0nHVe8Czjc30HPG_2ahAnEexz9fsLLumVjtQg=w900-h1200-k-no",
            alt: "Barbershop detail — photo from the business Google Maps listing",
            title: "Barbershop detail",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        },
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R_EjJuCOxstNKXfIVVc8F3FHihkUBPVDFhmH6Y80jztzrquNSDelAfz0NDNBuSrRQRbsi1uheaUw-1UXTOqVYRGQ7E5HcIddNdLJLGFWrYgF_lBBI6YTbEXl1LP7SqmoFRwy9zf2cO4Sg=w900-h1200-k-no",
            alt: "From the Google Maps gallery — photo from the business Google Maps listing",
            title: "From the Google Maps gallery",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        },
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SCUUmGbYwuXQM6A62ZTmEHlE-qYjhMNT8F16eIOok46B_t8Am4NLYduMEP1bSdnA1b9BuJVSoGv8K5o8uRk3ZhqZgdhEHAvo8tPO2_ae1uYa760DxN8gb7hAONbD5uDgtApZs=w900-h1200-k-no",
            alt: "Hair Club Barbershop — photo from the business Google Maps listing",
            title: "Hair Club Barbershop",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        },
        {
            src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZ2BJ26SZEQw8_KsmwUmHmd7fj9dQ7VF_767_PwoBFr2rp4fVAyr5NdSHMdB4Fj7W67NhVYQT9VNEsELLRx7swCkJfXpV8KPAtZahB3fUkwTgZxiS3VsLKhlaMLFrwVMGT1993sT1bez60=w900-h1200-k-no",
            alt: "A photo from the shop — photo from the business Google Maps listing",
            title: "A photo from the shop",
            caption: "Photo from Hair Club Barbershop’s Google Maps listing."
        }
    ],

    testimonials: [
        { name: "Ab Dub", rating: 5, text: "Told him what I wanted, and he did it exactly how I wanted. Definitely worth it, money well spent!" },
        { name: "Jexxer Jay", rating: 5, text: "Amazing service. Great conversation. Best haircut I have had in a while." },
        { name: "Joshua Foss", rating: 5, text: "Very professional and friendly service. Highly recommended!" }
    ],

    faq: [
        {
            question: "What services are available?",
            answer: "Hair Club Barbershop is listed for haircuts, beard trims and lineups, straight-razor shaves, hair styling and color, and detail grooming. Call to confirm which services are available on the day you plan to visit."
        },
        {
            question: "What are your opening hours?",
            answer: "Public listings show the shop closed on Monday, open Tuesday through Saturday from 10:30 AM to 8:00 PM, and Sunday from 10:30 AM to 6:00 PM. Hours can change, so call to confirm before travelling."
        },
        {
            question: "Can I walk in?",
            answer: "Public listings indicate walk-ins may be accepted, but availability and wait times can vary. Call (210) 943-0044 to check before you come."
        },
        {
            question: "How much do services cost?",
            answer: "Prices can change and vary by service. Call the shop for current pricing before your visit."
        },
        {
            question: "Where are you located?",
            answer: "Find Hair Club Barbershop at 7211 Green Glen Dr, Suite 105, San Antonio, TX 78255. Use the Directions link on this website for navigation."
        },
        {
            question: "How do I contact the shop?",
            answer: "Call (210) 943-0044 or use the Facebook and Google Maps links on this website to check the latest business information."
        }
    ]
};

window.BUSINESS = BUSINESS;
