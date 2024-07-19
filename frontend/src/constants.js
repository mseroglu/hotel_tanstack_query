export const inputs = [
    {
        label: "Başlık",
        name: "name",
        placeholder: "Hotel adı giriniz"
    },
    {
        label: "Lokasyon",
        name: "location",
        placeholder: "Hotel adı giriniz"
    },
    {
        label: "Adres",
        name: "address",
        placeholder: "Hotel adı giriniz"
    },
    {
        label: "Açıklama",
        name: "description",
        placeholder: "Oteli kısaca tanıtınız"  ,
        isTextArea: true 
    },
    {
        label: "Özellikler ( , ile ayırınız)",
        name: "amenities",
        placeholder: "Özellikler"  ,
        isTextArea: true 
    },
    {
        label: "Rating",
        name: "rating",
        type: "number",
        min: 1,
        max: 5,                
    },
    {
        label: "Gecelik Fiyat",
        name: "price_per_night",
        type: "number",
        min: 100,
        max: 9999,
        placeholder: "Ücreti giriniz..",
    },
    {
        label: "Müsait mi?",
        name: "availability",
        type: "checkbox",
        required: false
    },
]