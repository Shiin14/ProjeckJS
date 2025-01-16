const hariKerja = (hari) => {
    switch (hari) {
    case "senin":
    case "selasa":
    case "rabu":
    case "kamis":
    case "jumat":
        console.log("Hari kerja");
        break;
    case "sabtu":
    case "minggu":
        console.log("Hari libur");
        break;
    default:
        console.log("Hari tidak valid");
    }
};

hariKerja("rabu");